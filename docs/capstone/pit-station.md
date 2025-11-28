# Capstone: Pit Station Build

**Week:** 16  
**Element:** ICTIOT502 Device 2: Program second IoT device  
**Phase:** Capstone

---

## Overview

The **Pit Station** is the second required IoT device for Assessment 6. It subscribes to MQTT topics and displays live fleet data on an LCD screen, giving pit operators real-time visibility into all truck statuses without accessing AWS console.

## Hardware Requirements

- ESP32 (second board)
- 16×2 or 20×4 I²C LCD display
- Piezo buzzer (for critical alerts)
- RGB LED (fleet status indicator)
- Push button (cycle through trucks)
- Enclosure (3D print or project box)

---

## Pit Station Functionality

### Display Modes

**Mode 1: Fleet Summary**
```
RockCore Fleet
Trucks: 20  OK:18
WARN:1  FAULT:1
[HC-03 needs service]
```

**Mode 2: Individual Truck Detail (button press cycles)**
```
HC-01: OPERATIONAL
Temp:62C Vibe:1.2g
Gas:120  Rain:NO
Update: 3s ago
```

**Mode 3: Active Alerts**
```
!ALERTS!
HC-07: High temp 78C
HC-12: Vibration 2.4g
Press for details
```

### Alert Behavior

- Critical alerts → Red LED + continuous buzzer
- Warnings → Yellow LED + intermittent beep
- All OK → Green LED

---

## Pit Station Code

```cpp
// pit_station.ino - Assessment 6 Device 2
#include <WiFiClientSecure.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include <LiquidCrystal_I2C.h>
#include "secrets.h"

LiquidCrystal_I2C lcd(0x27, 20, 4);  // 20x4 LCD

const char* FLEET_TOPIC = "rockcore/trucks/+/telemetry";
const char* ALERT_TOPIC = "rockcore/alerts/#";

#define BUTTON_PIN 4
#define BUZZER_PIN 26
#define RED_LED 25
#define GREEN_LED 27

struct TruckData {
  String id;
  float temp;
  float vibe;
  String status;
  unsigned long lastUpdate;
};

TruckData fleet[20];  // Support up to 20 trucks
int activeTrucks = 0;
int displayedTruck = 0;

void setup() {
  Serial.begin(115200);
  lcd.init();
  lcd.backlight();
  
  pinMode(BUTTON_PIN, INPUT);
  pinMode(BUZZER_PIN, OUTPUT);
  pinMode(RED_LED, OUTPUT);
  pinMode(GREEN_LED, OUTPUT);
  
  // Connect to WiFi and AWS
  connectAWS();
  
  // Subscribe to all truck telemetry
  client.subscribe(FLEET_TOPIC);
  client.subscribe(ALERT_TOPIC);
  
  lcd.setCursor(0, 0);
  lcd.print("RockCore Pit Station");
  lcd.setCursor(0, 1);
  lcd.print("Connecting...");
}

void mqttCallback(char* topic, byte* payload, unsigned int length) {
  StaticJsonDocument<512> doc;
  deserializeJson(doc, payload, length);
  
  // Parse truck ID from topic: rockcore/trucks/HC01/telemetry
  String topicStr = String(topic);
  int start = topicStr.indexOf("/trucks/") + 8;
  int end = topicStr.indexOf("/", start);
  String truckID = topicStr.substring(start, end);
  
  // Update fleet array
  updateFleetData(truckID, doc);
  
  // Refresh display
  displayFleetStatus();
}

void updateFleetData(String id, JsonDocument& doc) {
  // Find or create truck entry
  int index = -1;
  for (int i = 0; i < activeTrucks; i++) {
    if (fleet[i].id == id) {
      index = i;
      break;
    }
  }
  
  if (index == -1) {
    index = activeTrucks++;
    fleet[index].id = id;
  }
  
  fleet[index].temp = doc["temp"];
  fleet[index].vibe = doc["vibe"];
  fleet[index].status = doc["status"].as<String>();
  fleet[index].lastUpdate = millis();
}

void displayFleetStatus() {
  lcd.clear();
  
  // Count statuses
  int ok = 0, warn = 0, fault = 0;
  for (int i = 0; i < activeTrucks; i++) {
    if (fleet[i].status == "OPERATIONAL") ok++;
    else if (fleet[i].status == "WARNING") warn++;
    else fault++;
  }
  
  // Display summary
  lcd.setCursor(0, 0);
  lcd.print("Fleet: ");
  lcd.print(activeTrucks);
  lcd.print(" trucks");
  
  lcd.setCursor(0, 1);
  lcd.print("OK:");
  lcd.print(ok);
  lcd.print(" WARN:");
  lcd.print(warn);
  lcd.print(" FAULT:");
  lcd.print(fault);
  
  // Show status LED
  if (fault > 0) {
    digitalWrite(RED_LED, HIGH);
    digitalWrite(GREEN_LED, LOW);
    tone(BUZZER, 1000, 500);
  } else if (warn > 0) {
    digitalWrite(RED_LED, HIGH);
    digitalWrite(GREEN_LED, HIGH);  // Yellow = R+G
  } else {
    digitalWrite(RED_LED, LOW);
    digitalWrite(GREEN_LED, HIGH);
  }
}

void displayTruckDetail(int index) {
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print(fleet[index].id);
  lcd.print(": ");
  lcd.print(fleet[index].status);
  
  lcd.setCursor(0, 1);
  lcd.print("T:");
  lcd.print(fleet[index].temp, 1);
  lcd.print("C V:");
  lcd.print(fleet[index].vibe, 2);
  lcd.print("g");
  
  lcd.setCursor(0, 2);
  int secondsAgo = (millis() - fleet[index].lastUpdate) / 1000;
  lcd.print("Update: ");
  lcd.print(secondsAgo);
  lcd.print("s ago");
}

void loop() {
  if (!client.connected()) {
    reconnectAWS();
  }
  client.loop();
  
  // Button press cycles through truck details
  static bool lastButton = false;
  bool buttonNow = digitalRead(BUTTON_PIN);
  
  if (buttonNow && !lastButton) {
    displayedTruck = (displayedTruck + 1) % activeTrucks;
    displayTruckDetail(displayedTruck);
    delay(3000);  // Show detail for 3 seconds
    displayFleetStatus();  // Return to summary
  }
  lastButton = buttonNow;
  
  delay(100);
}
```

---

## Testing Requirements

**Demonstrate pit station receiving data from:**
1. Your physical truck (HC-01)
2. Simulated second truck (modify truck code to publish as HC-02)
3. Trigger alert on truck → pit station displays warning immediately

**Test scenarios:**
- Normal operation → Green LED
- Truck goes to WARNING → Yellow LED
- Truck goes to FAULT → Red LED + buzzer
- Button cycles through truck details
- Show latency: Change truck sensor → pit station updates within 2 seconds

---

## Deliverables for Week 16

1. Complete pit station code with comments
2. Wiring diagram (Fritzing)
3. Photos of physical pit station enclosure
4. Test video showing:
   - Fleet summary display
   - Button cycling through trucks
   - Alert triggering (red LED + buzzer)
5. Latency measurement: Truck sensor change → pit station update time

---

**Navigation:** [← Integration Guide](integration.md) | [Testing Scenarios →](testing.md)

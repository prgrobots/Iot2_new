# Capstone: Testing Scenarios

**Week:** 17  
**Element:** ICTIOT502 & ICTIOT503 - Test and rectify  
**Phase:** Capstone Testing

---

## Overview

Week 17 focuses on comprehensive testing of your complete system. You must simulate and document at least **3 real fault scenarios** that demonstrate all assessments working together and triggering appropriate cloud alerts.

## Required Test Scenarios

### Scenario 1: Engine Overheat Emergency

**Setup:**
- Truck operating normally (all green)
- Temperature at 55°C

**Trigger:**
- Heat DHT11 sensor above 80°C (use hair dryer or hot water)

**Expected System Response:**
1. Truck: Red LED illuminates, buzzer sounds
2. OLED: Displays "CRITICAL: Engine Fault"
3. AWS Shadow: Updates reported temperature to >80°C
4. IoT Rule: Triggers SNS alert → SMS/email sent
5. Pit Station: Shows HC-01 in FAULT state, red LED + buzzer
6. QuickSight: Dashboard shows temperature spike

**Documentation:**
- Timestamp when fault triggered
- Screenshot of SNS email/SMS
- Pit station LCD photo showing fault
- AWS console logs

---

### Scenario 2: Unauthorized Access Attempt

**Setup:**
- Cabin locked (shadow shows cabin_locked = true)
- RFID system active

**Trigger:**
- Scan unauthorized RFID card

**Expected System Response:**
1. Truck: Red LED flashes, access denied tone
2. RFID logs: Unauthorized attempt recorded with timestamp
3. AWS Shadow: Does NOT update (cabin remains locked)
4. IoT Rule: Security alert published to `rockcore/security/alerts`
5. CloudWatch: Metric "UnauthorizedAccess" increments
6. Pit Station: Shows "Security Alert: HC-01"

**Documentation:**
- RTC timestamp of attempt
- AWS CloudWatch screenshot showing metric
- RFID card ID logged
- Shadow document showing cabin_locked still true

---

### Scenario 3: Predictive Maintenance - Vibration Anomaly

**Setup:**
- Truck vibration baseline 1.2g (normal operation)
- Anomaly threshold 2.2g

**Trigger:**
- Shake ESP32 or attach to vibrating motor
- Sustain elevated vibration for 30+ seconds

**Expected System Response:**
1. Truck: GY-521 detects anomaly, counter increments
2. OLED: Displays "WARNING: High vibration"
3. AWS Telemetry: Publishes vibration readings >2.2g
4. CloudWatch Alarm: "VibrationAnomaly" triggers after 3 consecutive samples
5. SNS: Sends maintenance alert "HC-01 needs tire inspection"
6. Pit Station: Shows HC-01 in WARNING state
7. QuickSight: Vibration trend chart shows spike

**Documentation:**
- Time-series data showing vibration spike
- CloudWatch alarm state change screenshot
- Maintenance SMS received
- Vibration anomaly count logged

---

### Scenario 4 (Bonus): Multi-Fault Cascade

**Setup:**
- Simulate multiple simultaneous faults

**Trigger:**
1. Rain sensor detects water (60s)
2. Temperature rises to WARNING level 65°C (30s later)
3. Gas sensor detects leak (20s later)

**Expected System Response:**
- System prioritizes faults (gas > temp > rain)
- Multiple SNS alerts sent
- Pit station shows highest priority fault first
- QuickSight shows all three metrics spiking
- Truck enters "SHUTDOWN" state after 3 critical faults

---

## Offline Resilience Test

**Purpose:** Demonstrate Device Shadow synchronization

**Test Procedure:**
1. Disconnect truck from WiFi
2. Change temperature from 55°C to 75°C (warning level)
3. Check AWS Shadow → shows last known (55°C)
4. Reconnect WiFi
5. Shadow automatically updates to 75°C
6. Timestamp shows when sync occurred

**Documentation:**
- Shadow document before disconnect
- Shadow document after reconnect
- Serial monitor log showing reconnection
- Sync latency measurement

---

## Performance Testing

### Latency Measurements

**Truck to Cloud:**
- Measure time from sensor read to AWS IoT Core receipt
- Target: < 500ms

**Cloud to Pit Station:**
- Measure time from AWS publish to pit station LCD update
- Target: < 1000ms total (sensor → cloud → pit station)

**Method:**
```cpp
// Add to truck code
unsigned long sensorTime = millis();
doc["sensor_timestamp"] = sensorTime;

// Pit station receives and calculates
unsigned long latency = millis() - doc["sensor_timestamp"];
Serial.print("Latency: ");
Serial.print(latency);
Serial.println("ms");
```

### Bandwidth Testing

- Count MQTT messages per minute
- Calculate average payload size
- Estimate bandwidth for 20-truck fleet
- Document in portfolio

---

## Test Deliverables for Week 17

1. **Test Report** (4-6 pages):
   - Executive summary
   - All 3 scenarios documented with timestamps
   - Screenshots/photos for each expected response
   - Fault rectification log (any issues encountered and fixed)

2. **Test Video** (5-7 minutes):
   - Show normal operation
   - Trigger each scenario
   - Pan to show: truck response, pit station, AWS console, phone (SMS alert)
   - Narrate what's happening

3. **Performance Data:**
   - Latency measurements table
   - Bandwidth calculations
   - Offline resilience proof

4. **Updated Architecture Diagram:**
   - Add fault flow paths
   - Show alert routing

---

**Navigation:** [← Pit Station](pit-station.md) | [Demo & Submission →](demo.md)

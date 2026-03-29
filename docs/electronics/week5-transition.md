# Week 5 — Course Update & Catch-Up

**Week:** 5 (No scheduled class — Public Holiday)  
**Phase:** Electronics for Programmers

---

!!! info "No Class This Week"
    There is **no scheduled session this week** due to a public holiday. Use this time to consolidate your Session 4 work, review the thermistor content below, and prepare for Session 5.

---

## What Changed — and Why

This is a good moment to explain some updates we've made to the course materials.

### Equipment Issues

Early in the course we encountered two problems with our hardware kits:

1. **Microcontroller connection issues** — PlatformIO had intermittent trouble connecting to the boards in class. We've worked through this and it is largely resolved; if you still have trouble, your instructor has a fallback workflow using the Arduino IDE.

2. **DHT11 sensor failures** — The DHT11 temperature/humidity sensors in some kits proved unreliable, returning frequent errors or not working at all. Rather than troubleshoot faulty hardware, we've switched to a **thermistor** for Assessment 1.

---

## Assessment 1 Update — Thermistor Replaces DHT11

Your Assessment 1 Engine Compartment Monitor now uses a **thermistor** instead of a DHT11 sensor. The **RGB LED** requirements remain the same.

!!! success "What's the same"
    - RGB LED temperature colour display (green / yellow / red thresholds unchanged)
    - Temperature-to-colour mapping logic
    - Pseudocode, flowchart, and demo video deliverables
    - Fault rectification documentation
    - Due date: **end of Week 4** (or as advised by your instructor)

!!! warning "What changed"
    - **DHT11 removed** → replaced with thermistor (NTC 10kΩ)
    - **Photocell (LDR) removed** → no longer required in A1
    - No ambient light or auto-brightness logic required
    - Thermistor is read via ADC (`analogRead`) — no library needed

See [Session 4](04.md) for the updated wiring and code guidance.

---

## Thermistor Quick Reference

A thermistor is a resistor whose resistance changes with temperature. We use an **NTC (Negative Temperature Coefficient)** type — resistance decreases as temperature increases.

### Wiring (Voltage Divider)

```
3.3V ──── [Thermistor] ──── GPIO 34 ──── [10kΩ resistor] ──── GND
```

- The junction between the thermistor and the fixed resistor connects to an ADC pin (e.g., GPIO 34)
- No library required — just `analogRead()`

### Reading Temperature

```cpp
const float BETA     = 3950;       // B-constant for NTC 10kΩ
const float R_FIXED  = 10000.0;    // 10kΩ fixed resistor

float readTemp(int adcPin) {
  int raw = analogRead(adcPin);
  if (raw == 0 || raw == 4095) return -999;  // out-of-range guard

  float resistance = R_FIXED * raw / (4095.0 - raw);
  float tempK = 1.0 / (1.0 / 298.15 + (1.0 / BETA) * log(resistance / 10000.0));
  return tempK - 273.15;
}
```

This gives a reading in °C. Apply the same colour thresholds as before:

| Temperature | LED Colour |
|-------------|-----------|
| < 60°C      | Green     |
| 60 – 80°C   | Yellow    |
| ≥ 80°C      | Red       |

---

## Preparing for Session 5

Next week (calendar **Week 6**) we pick up with **Session 5: I²C & Actuators**.

!!! tip "Pre-session checklist"
    - [ ] Complete any remaining Session 4 tasks (thermistor + RGB LED)
    - [ ] Ensure Assessment 1 submission is committed to GitHub
    - [ ] Read: PhysComp → [I²C Protocol](https://makeabilitylab.github.io/physcomp/esp32/i2c.html)
    - [ ] **Arduino IDE / ESP32 tasks only:** Install Arduino libraries `Adafruit SSD1306`, `Adafruit GFX`
    - [ ] **Pico W tasks (MicroPython):** No Arduino library install needed — MicroPython libraries (`ssd1306`, `imu`) are imported directly in code. Instead, confirm [Thonny IDE](https://thonny.org/) is installed and connects to your Pico W.
    - [ ] Locate OLED display and GY-521 accelerometer in your kit

**Session 5 covers:** OLED display, GY-521 accelerometer (MPU6050), and servo motor — all on the I²C bus. This session launches **Assessments 3 and 4**.

---

## Revised Session Calendar

| Calendar Week | Session | Content | Notes |
|--------------|---------|---------|-------|
| Week 4 | Session 4 | Analog Sensors & RGB LED | A1 due |
| **Week 5** | **—** | **Public holiday — no class** | Self-study week |
| Week 6 | Session 5 | I²C + Actuators | A3/A4 launched |
| Week 7 | Session 6 | RFID, RTC Access Control | A2 due |
| Week 8 | Session 7 | Environmental + Tones | |
| Week 9 | Session 8 | Signal Processing & Vibration | A3 due |
| Week 10 | Session 9 | Full Truck Assembly & Testing | A4 due |

!!! note "Session numbers haven't changed"
    The session content and assessment numbering stays the same. We're just one calendar week behind schedule. Your instructor will confirm any adjusted due dates.

---

**Navigation:** [← Session 4](04.md) | [Session 5 →](05.md)

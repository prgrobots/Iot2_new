# Course Transition Log — IoT2 (RockCore Mining)

> **For teaching staff only.** This document records all curriculum changes made due to equipment issues and scheduling adjustments. Use this as a reference when running auditing tools or advising students.

---

## Context & Issues Encountered

**Date of Changes:** March 2026  
**Affected Sessions:** Session 4 (Week 4), Session 5 (Week 5 → delivered Week 6), Session 6 (Week 6 → delivered Week 7+)

### Issue 1: PlatformIO / Raspberry Pi Pico Connection Failure

PlatformIO IDE could not reliably connect to Raspberry Pi Pico microcontrollers during real hardware sessions. This prevented students from flashing and testing firmware in class, significantly disrupting hands-on work.

**Impact:** Students unable to complete physical hardware tasks as originally scheduled.  
**Resolution:** Continued with available hardware and adjusted session pacing. Students may use Wokwi simulation as a fallback for task completion where physical connection is not possible.

### Issue 2: DHT11 Sensor Failures (Assessment 1)

The DHT11 temperature/humidity sensors in the kit were found to be unreliable — returning frequent NaN errors even with good wiring — and some units were completely non-functional. This made Assessment 1 impossible to complete as originally designed.

**Impact:** A1 could not be demonstrated reliably on real hardware.  
**Resolution:** Replaced DHT11 with a **thermistor** (NTC 10kΩ). Thermistors are:
- Passive (no library required, just analogRead)
- Simpler to wire (voltage divider, two components)
- More robust (no digital protocol to fail)
- Still appropriate for the learning outcomes (analog sensor reading, ADC, threshold logic)

The photocell (LDR) component was also **removed from A1 scope** to simplify the assessment and allow catch-up after the delays.

### Issue 3: Public Holiday — Calendar Shift

A public holiday fell between Sessions 4 and 5, creating a one-week gap in delivery. As a result, students are now one week behind the original schedule.

**Resolution:** A transition/catch-up page has been added to the navigation between Session 4 and Session 5. Session numbers remain unchanged; the gap page acknowledges the calendar shift and provides a thermistor self-study reference.

---

## Summary of All Changes

| # | Change | Reason | Status |
|---|--------|--------|--------|
| 1 | DHT11 replaced with thermistor in Session 4 | Unreliable/broken hardware | ✅ Done |
| 2 | Photocell (LDR) removed from Session 4 and A1 | Scope simplification for catch-up | ✅ Done |
| 3 | Capacitive touch sensor removed from Session 6 and A2 | Not essential; simplify scope | ✅ Done |
| 4 | Gap/transition page added between Sessions 4 and 5 | Public holiday calendar acknowledgement | ✅ Done |
| 5 | A1 Submission Template updated | Reflects thermistor, no photocell | ✅ Done |
| 6 | LAP updated (Weeks 4 and 6 rows) | Accurate hardware list | ✅ Done |
| 7 | Capstone testing.md Scenario 1 updated | DHT11 reference replaced with thermistor | ✅ Done |

---

## Files Modified

| File | What Changed |
|------|-------------|
| `mkdocs.yml` | Added `electronics/week5-transition.md` to nav between Sessions 4 and 5 |
| `docs/electronics/04.md` | DHT11 → thermistor; photocell/LDR removed entirely |
| `docs/electronics/06.md` | Capacitive touch sensor Task 3 removed; integrated code updated |
| `docs/assessments/index.md` | A1: thermistor + no photocell; A2: no touch sensor; A6: sensor list updated |
| `docs/assessments/A1_SUBMISSION_TEMPLATE.md` | All DHT11 + photocell references replaced with thermistor |
| `docs/course-overview/learning-assessment-plan.md` | Week 4 hardware list; Week 6 hardware list; public holiday note added |
| `docs/capstone/testing.md` | Scenario 1 trigger updated from DHT11 to thermistor |

---

## Files Created

| File | Purpose |
|------|---------|
| `docs/electronics/week5-transition.md` | Student-facing gap page; public holiday notice + thermistor reference |
| `docs/course-transition.md` | This document |

---

## Assessment 1 — Hardware Change Detail

**Before:**

| Sensor | Role |
|--------|------|
| DHT11 | Temperature reading (digital/one-wire) |
| Photocell (LDR) | Ambient light → LED brightness |
| RGB LED | Status display |

**After:**

| Sensor | Role |
|--------|------|
| Thermistor (NTC 10kΩ) | Temperature reading (analog/ADC) |
| RGB LED | Status display |

**What students still demonstrate with thermistor:**
- Analog sensor reading via ADC (`analogRead`)
- Voltage divider circuit construction
- Temperature-to-colour mapping logic (same thresholds: 60°C warning, 80°C critical)
- PWM control of RGB LED
- Error handling (out-of-range ADC values)

**What is no longer required:**
- Ambient light sensing
- Auto-on brightness logic
- Photocell wiring (voltage divider was the same pattern — this is now the thermistor)

---

## Assessment 2 — Hardware Change Detail

**Before:**
- RFID-RC522 card reader
- DS3231 RTC module
- Capacitive touch sensor (ESP32 T0/GPIO 4) — emergency override

**After:**
- RFID-RC522 card reader ✅ unchanged
- DS3231 RTC module ✅ unchanged
- ~~Capacitive touch sensor~~ — removed

**What students still demonstrate:**
- RFID card read and authorisation logic
- RTC-stamped access logging
- Authorised/unauthorised card handling
- Serial log export (CSV format)

---

## Thermistor Quick Reference (for teaching staff)

**Wiring:** NTC thermistor + 10kΩ resistor in voltage divider (same as photocell wiring from original design)

```
3.3V ──── [Thermistor] ──── GPIO 34 ──── [10kΩ] ──── GND
```

**Formula (simplified Steinhart-Hart for NTC 10kΩ B=3950):**

```cpp
const float BETA = 3950;
const float R_FIXED = 10000;  // 10kΩ fixed resistor
const float NOMINAL_TEMP = 25.0;
const float NOMINAL_R = 10000.0;

float readThermistorTemp(int adcPin) {
  int adcVal = analogRead(adcPin);
  float voltage = adcVal / 4095.0 * 3.3;
  float resistance = R_FIXED * voltage / (3.3 - voltage);
  float tempK = 1.0 / (1.0/298.15 + (1.0/BETA) * log(resistance / NOMINAL_R));
  return tempK - 273.15;  // Convert to Celsius
}
```

**Range:** NTC 10kΩ (B=3950) typically accurate from -40°C to +125°C. More than sufficient for the 0–100°C range needed for the truck monitoring scenario.

---

## Auditing Checklist

After changes are made, run the course auditing agents to verify consistency:

- [ ] All Session 4 content refers to thermistor, not DHT11 or photocell
- [ ] All Assessment 1 content refers to thermistor, not DHT11 or photocell
- [ ] Session 6 has no capacitive touch content
- [ ] Assessment 2 has no capacitive touch requirement
- [ ] Gap page is visible in navigation between Sessions 4 and 5
- [ ] LAP table rows for Weeks 4 and 6 are accurate
- [ ] Capstone testing.md Scenario 1 uses thermistor language
- [ ] A6 sensor list does not include DHT11 or touch sensor
- [ ] No broken links introduced by any changes

---

**Document maintained by:** Teaching Team  
**Last updated:** March 2026

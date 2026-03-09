# Assessment 1: Engine Compartment Monitor – Submission Template

**Student Name:** ___________________  
**Submission Date:** ___________________  
**GitHub Repository:** https://github.com/[your-username]/[iot-portfolio]/tree/main/A1-Electronics-Fundamentals

---

## Project Overview

**Brief Description (2–3 sentences):**

In this assessment, I built an Engine Compartment Monitor that displays thermal status via RGB LED colour. The system reads temperature from a thermistor (NTC 10kΩ) via ADC and maps it to LED colour (green/yellow/red) based on temperature thresholds.

---

## Deliverables Checklist

### Code Structure & Logic
- [ ] **Thermistor Temperature Reading**
  - Sensor wired as voltage divider on GPIO 34
  - ADC value read every 1000ms
  - ADC converted to resistance, then to temperature (°C) using Steinhart–Hart formula
  - Out-of-range ADC values (0 or 4095) handled gracefully (print error, skip cycle)
  - Code includes comments explaining the conversion formula

- [ ] **RGB LED PWM Control**
  - RGB pins configured: GPIO 25 (Red), GPIO 26 (Green), GPIO 27 (Blue)
  - analogWrite() used for brightness control (0–255)
  - Each color channel independently scalable

- [ ] **Temperature → Colour Mapping**
  - < 60°C → Green (R=0, G=255, B=0)
  - 60–80°C → Yellow (R=255, G=255, B=0)
  - ≥ 80°C → Red (R=255, G=0, B=0)
  - Threshold constants clearly defined

### Hardware Documentation
- [ ] **Wiring Diagram**
  - Shows thermistor voltage divider (thermistor + 10kΩ resistor, GPIO 34)
  - Shows RGB LED (GPIO 25, 26, 27) with 220Ω series resistors
  - Includes pin labels and component values

- [ ] **System Flowcharts** (Mermaid or hand-drawn)
  - Main loop flowchart (read thermistor → convert to temp → colour logic → update LED)
  - Temperature state determination (decision tree for colour)
  - All decision points and logic branches clear

### Video Demonstration (2–3 minutes)
- [ ] **Normal Operation**
  - Serial output visible (ADC value, temperature °C, colour state)
  - RGB LED displaying colour corresponding to temperature
  - Temperature reading printed every 1–2 seconds

- [ ] **Temperature Range Tests**
  - Show LED displaying Green (normal temp, < 60°C)
  - Warm thermistor gently (pinch with fingers or warm air) to trigger Yellow (60–80°C)
  - Continue warming to trigger Red (> 80°C)
  - All three colours visible in sequence
  - Serial output shows temperature transitions

- [ ] **Fault Rectification Documentation**
  - At least one bug or issue encountered and fixed documented
  - Examples: out-of-range ADC handling added, threshold tuning, resistor value adjusted
  - Explain the problem, solution, and how testing confirmed the fix

### Reflection & Future Design
- [ ] **Reflection Paragraph (150–200 words)**
  - How would you extend this system to log temperature data over time?
  - Describe how the thermistor reading could be published to AWS IoT Core in later weeks
  - Consider practical extensions: alerts when temperature exceeds threshold, trend analysis, multi-truck monitoring

---

## Technical Notes

### Sensor Pin Assignments
| Component | GPIO | Type | Notes |
|-----------|------|------|-------|
| Thermistor | 34 | ADC (Analog) | 10kΩ fixed resistor in voltage divider |
| RGB Red | 25 | PWM Output | 220Ω series resistor |
| RGB Green | 26 | PWM Output | 220Ω series resistor |
| RGB Blue | 27 | PWM Output | 220Ω series resistor |

### Threshold Values (Tunable by Environment)
| Parameter | Value | Notes |
|-----------|-------|-------|
| Temp Warning | 60°C | Green → Yellow transition |
| Temp Critical | 80°C | Yellow → Red transition |

### Code Structure (Pseudocode Skeleton)
```cpp
// Pin definitions
#define THERM_PIN    34
#define RGB_R_PIN    25
#define RGB_G_PIN    26
#define RGB_B_PIN    27

// Thermistor constants
#define BETA          3950
#define R_FIXED       10000
#define TEMP_WARNING  60
#define TEMP_CRITICAL 80

// Setup: Initialize pins & serial
void setup() {
  // Serial, pin modes
}

// Main loop (1000ms cycle)
void loop() {
  // 1. Read thermistor ADC
  // 2. Convert ADC → resistance → temperature °C
  // 3. Handle out-of-range values
  // 4. Determine colour from temp
  // 5. Set RGB LED
  // 6. Serial output
  // 7. Delay 1000ms
}

// Helper functions (suggested)
float readThermistorTemp(int adcPin) { }
void getColorFromTemp(float temp, int &r, int &g, int &b) { }
void setRGB(int r, int g, int b) { }
```

---

## Submission Instructions

1. **Commit to GitHub:**
   - Navigate to `A1-Electronics-Fundamentals/code/esp32-arduino/`
   - Commit `engine_bay_monitor.ino` (pseudocode skeleton + comments)
   - Commit wiring diagram (image or Fritzing file)
   - Commit `system_flowcharts.md` or equivalent with Mermaid diagrams
   - Commit `FAULT_RECTIFICATION_LOG.md` documenting any bugs fixed
   - Add descriptive commit messages

2. **Create Submission Form:**
   - Complete this template (fill in all checkboxes and fields)
   - Save as `A1_SUBMISSION_TEMPLATE.md` in the assessment folder
   - Commit to GitHub

3. **Video Submission:**
   - Record 2–3 minute video (MP4, max 100 MB)
   - Upload to cloud storage (Google Drive, OneDrive, YouTube)
   - Include shareable link in Blackboard form
   - Ensure access permissions allow instructor viewing

4. **Blackboard Submission:**
   - Copy completed template to Blackboard submission box
   - Paste GitHub repository link
   - Paste video link
   - Submit by due date (end of Week 4, 11:59 PM)

---

## Academic Integrity Declaration

I certify that:
- [ ] This work is my own (libraries and examples used with attribution)
- [ ] I have not plagiarized from classmates or online sources
- [ ] All sources (datasheets, tutorials) are cited
- [ ] I have documented any bugs/issues I encountered and how I fixed them
- [ ] I understand resubmission policy: one resubmission allowed if not meeting competency

**Student Signature:** ___________________________ **Date:** ___________

---

## Assessor Feedback

| Criterion | Status | Comments |
|-----------|--------|----------|
| Code Structure | ☐ Pass ☐ Developing ☐ Not Yet | |
| Hardware Setup | ☐ Pass ☐ Developing ☐ Not Yet | |
| Flowcharts | ☐ Pass ☐ Developing ☐ Not Yet | |
| Video Demonstration | ☐ Pass ☐ Developing ☐ Not Yet | |
| Reflection | ☐ Pass ☐ Developing ☐ Not Yet | |
| Fault Rectification | ☐ Pass ☐ Developing ☐ Not Yet | |

**Overall Competency:** ☐ ACHIEVED ☐ DEVELOPING ☐ NOT YET ACHIEVED

**Assessor Comments:**

---

**Related Resources:**
- [Week 4 Session Content](../electronics/04.md)
- [Assessment Overview](index.md)
- [Thermistor Datasheet](../resources.md)
- [RGB LED PWM Control](../resources.md)

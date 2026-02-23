# Assessment 1: Engine Compartment Monitor – Submission Template

**Student Name:** ___________________  
**Submission Date:** ___________________  
**GitHub Repository:** https://github.com/[your-username]/[iot-portfolio]/tree/main/A1-Electronics-Fundamentals

---

## Project Overview

**Brief Description (2–3 sentences):**

In this assessment, I built an Engine Compartment Monitor that displays thermal status via RGB LED color and responds to ambient light conditions. The system reads temperature from a DHT11 sensor and light levels from a photocell, mapping these to LED color (green/yellow/red) and brightness (with auto-activation in darkness).

---

## Deliverables Checklist

### Code Structure & Logic
- [ ] **DHT11 Temperature Reading**
  - Sensor initialized on GPIO 4
  - Temperature read every 1000ms
  - NaN errors handled gracefully (use previous value or print error)
  - Code includes comments explaining NaN handling

- [ ] **Photocell Analog Reading**
  - Sensor read on GPIO 34 (ADC input)
  - Reading: 0–4095 (10-bit ADC)
  - Comments classify light levels (bright/normal/dim/dark)

- [ ] **RGB LED PWM Control**
  - RGB pins configured: GPIO 25 (Red), GPIO 26 (Green), GPIO 27 (Blue)
  - analogWrite() used for brightness control (0–255)
  - Each color channel independently scalable

- [ ] **Temperature → Color Mapping**
  - < 60°C → Green (R=0, G=255, B=0)
  - 60–80°C → Yellow (R=255, G=255, B=0)
  - ≥ 80°C → Red (R=255, G=0, B=0)
  - Threshold constants clearly defined

- [ ] **Photocell → Brightness Mapping**
  - Light level scaled to PWM range (0–255)
  - Formula or mapping function clearly commented
  - Auto-on logic: if photocell < 500, force brightness = 255

- [ ] **Auto-On Logic**
  - When photocell detects darkness (< 500): LED activates at full brightness
  - When photocell detects light (> 500): LED brightness scales with light level
  - Both logic paths tested and working

### Hardware Documentation
- [ ] **Wiring Diagram**
  - Shows DHT11 connection (GPIO 4, VCC, GND)
  - Shows photocell + 10kΩ resistor divider on GPIO 34
  - Shows RGB LED (GPIO 25, 26, 27) with 220Ω series resistors
  - Includes pin labels and component values

- [ ] **System Flowcharts** (Mermaid or hand-drawn)
  - Main loop flowchart (sensor reads → color logic → brightness logic → update LED)
  - Temperature state determination (decision tree for color)
  - Photocell to brightness mapping (scaling + auto-on)
  - All decision points and logic branches clear

### Video Demonstration (2–3 minutes)
- [ ] **Normal Operation**
  - Serial output visible (temp, light level, RGB values)
  - RGB LED displaying color corresponding to temperature
  - Temperature reading printed every 1–2 seconds

- [ ] **Low-Light Auto-On Test**
  - Cover photocell with hand or dark cloth
  - Observe RGB LED activate to full brightness
  - Uncover photocell, observe LED brightness decrease
  - Serial output shows photocell reading < 500 during darkness

- [ ] **Temperature Range Tests**
  - Show LED displaying Green (normal temp, < 60°C)
  - Heat DHT11 gently (hand, warm air) to trigger Yellow (60–80°C)
  - Continue heating to trigger Red (> 80°C)
  - All three colors visible in sequence
  - Serial output shows temp transitions

- [ ] **Fault Rectification Documentation**
  - At least one bug or issue encountered and fixed documented
  - Examples: DHT11 NaN handling added, photocell threshold adjusted after testing, RGB color values corrected
  - Explain the problem, solution, and how testing confirmed the fix

### Reflection & Future Design
- [ ] **Reflection Paragraph (150–200 words)**
  - How does the photocell's ability to detect light level extend to future weeks?
  - Explain how photocell readings could control OLED display brightness in Week 5
  - Describe how similar logic could manage truck cabin lights or headlights
  - Consider practical applications: driver visibility, power efficiency, maintenance readiness

---

## Technical Notes

### Sensor Pin Assignments
| Component | GPIO | Type | Notes |
|-----------|------|------|-------|
| DHT11 Data | 4 | I²C/One-wire | Pull-up recommended in library |
| Photocell | 34 | ADC (Analog) | 10kΩ pull-down resistor divider |
| RGB Red | 25 | PWM Output | 220Ω series resistor |
| RGB Green | 26 | PWM Output | 220Ω series resistor |
| RGB Blue | 27 | PWM Output | 220Ω series resistor |

### Threshold Values (Tunable by Environment)
| Parameter | Value | Notes |
|-----------|-------|-------|
| Temp Warning | 60°C | Green → Yellow transition |
| Temp Critical | 80°C | Yellow → Red transition |
| Light Dark | < 500 | Auto-on threshold |
| Light Dim | 500–1500 | Medium brightness |
| Light Normal | 1500–2500 | Scaled brightness |
| Light Bright | > 2500 | Low brightness (if any) |

### Code Structure (Pseudocode Skeleton)
```cpp
// Pin definitions
#define DHT_PIN 4
#define PHOTOCELL_PIN 34
#define RGB_R_PIN 25
#define RGB_G_PIN 26
#define RGB_B_PIN 27

// Threshold constants
#define TEMP_WARNING 60
#define TEMP_CRITICAL 80
#define LIGHT_DARK_THRESHOLD 500

// Setup: Initialize sensors & pins
void setup() {
  // Serial, DHT, pin modes
}

// Main loop (1000ms cycle)
void loop() {
  // 1. Read DHT11 (handle NaN)
  // 2. Read photocell ADC
  // 3. Determine color from temp
  // 4. Calculate brightness from light
  // 5. Apply auto-on logic
  // 6. Set RGB LED
  // 7. Serial output
  // 8. Delay 1000ms
}

// Helper functions (suggested)
void getColorFromTemp(float temp, int &r, int &g, int &b) { }
int calculateBrightness(int photocellReading) { }
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
- [DHT11 Datasheet](../resources.md)
- [RGB LED PWM Control](../resources.md)

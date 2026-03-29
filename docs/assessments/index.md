# Assessments Overview

This course uses **competency-based assessment** where students demonstrate mastery of specific IoT skills and knowledge. Assessments map to **ICTIOT502** (Develop IoT device solutions) and **ICTIOT503** (Evaluate and test IoT device solutions) and are designed to evaluate competency demonstrated through practical application, not percentage-based grades.

## Assessment Schedule

| Assessment | Unit Elements | Due Date | Deliverable |
|------------|---------------|----------|-------------|
| **A1** | 502: 1.1, 1.2, 1.3, 1.4, 2.4, 3.2 | Week 4 | ESP32 + temp/gas/flame sensors |
| **A2** | 502: 2.2, 3.1, 3.3 | Week 6/7 | RFID access control + buzzer tones |
| **A3** | 502: 2.1, 2.3 | Week 8 | Pico W + MPU6050 I²C vibration monitor |
| **A4** | 502: 3.4, 4.1 | Week 9 | Full haul truck system |
| **A5** | 503: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3 | Week 14 | AWS IoT integration + testing |
| **A5b** | 503: 2.4 | Week 14 | QuickSight analytics dashboard |
| **A6** | 503: 3.1, 3.2, 3.3 | Week 18 | Complete fleet system + demo |

---

## Submission Process

### **Your GitHub Portfolio is Primary**

Your portfolio repository on GitHub is your **single source of truth** for all code, documentation, and evidence. Blackboard submission is for timestamping and institutional audit purposes only.

### **How to Submit Each Assessment**

1. **Complete your work** and commit to GitHub in the assessment folder
2. **Fill out the submission template** (located in each assessment folder)
3. **Copy the completed form** to the Blackboard submission box for that assessment
4. Blackboard records the timestamp automatically

### **Submission Templates by Assessment**

Each assessment folder in your portfolio template contains a pre-filled submission template:

| Assessment | Template File | Folder |
|-----------|---------------|--------|
| **A1** | `A1_SUBMISSION_TEMPLATE.md` | `A1-Electronics-Fundamentals/` |
| **A2** | `A2_SUBMISSION_TEMPLATE.md` | `A2-RFID-Access-Control/` |
| **A3** | `A3_SUBMISSION_TEMPLATE.md` | `A3-Vibration-Monitoring/` |
| **A4** | `A4_SUBMISSION_TEMPLATE.md` | `A4-Haul-Truck-Integration/` |
| **A5** | `A5_SUBMISSION_TEMPLATE.md` | `A5-AWS-IoT-Integration/` |
| **A5b** | `A5b_SUBMISSION_TEMPLATE.md` | `A5-AWS-IoT-Integration/` |
| **A6** | `A6_SUBMISSION_TEMPLATE.md` | `A6-Capstone-Fleet-Demo/` |

**Each template includes:**
- Assessment-specific requirements checklist
- GitHub repository link field
- Brief description field (2-3 sentences)
- Evidence requirements (screenshots, videos, documents)
- Academic integrity declaration
- Space for assessor feedback

**No code duplication:** Your code remains on GitHub only. The submission form provides proof of submission without duplicating work.

---

## Assessment 1: Engine Compartment Monitor (Week 4)

**Objective:** Build IoT device with thermal and light-responsive status display.

**Scenario:** RockCore Mining needs engine bay monitoring. Your system must display engine temperature via LED colour — from normal (green) through warning (yellow) to critical (red).

**Components:**
- Thermistor (NTC 10kΩ) for temperature sensing
- RGB LED for colour-coded status display

**Requirements:**
- Read thermistor ADC value and convert to temperature (°C)
- Handle out-of-range ADC readings gracefully
- Map temperature to LED colour: Green (< 60°C) → Yellow (60–80°C) → Red (≥ 80°C)
- Pseudocode structure and flowcharts provided (NO complete working code in submission)

**Deliverables:**
1. **Pseudocode Sketch** – `engine_bay_monitor.ino` with structure and comments (structure only, no implementation)
2. **Wiring Diagram** – Fritzing or hand-drawn schematic showing thermistor voltage divider and RGB LED
3. **System Flowcharts** – Mermaid diagrams: main loop, thermistor ADC → temperature conversion, temp→colour mapping
4. **Demo Video** (2–3 min) – Normal op, temperature range colour transitions, fault rectification
5. **Reflection** – How would you extend this system to log temperature to the cloud or notify a pit station?

**Submission:**
- GitHub: `A1-Electronics-Fundamentals/code/esp32-arduino/`
- Blackboard: Link + submission form
- **Competency:** ICTIOT502 Element 2 (Program IoT device, test and rectify faults)

---

## Assessment 2: Access Control System (Week 6/7)

**Objective:** Implement RFID authentication with distinct audio feedback tones.

**Requirements:**
- RFID-RC522 module reading multiple cards (SPI protocol)
- Access granted: distinct "good" buzzer tone + green LED
- Access denied: distinct "bad" buzzer tone pattern + red LED
- Serial output logging access events (card UID + outcome)
- Authorised/unauthorised card handling
- Brief explanation of SPI vs I²C protocol choice

**Submission:**
- Arduino `.ino` file (or MicroPython `.py`)
- Serial Monitor screenshot showing 5+ access attempts (mix of authorised/unauthorised)
- Breadboard photo with RFID, buzzer, and LEDs wired
- 2-minute demonstration video showing both tone patterns

---

## Assessment 3: Tire & Suspension Health Monitor (Week 8)

**Objective:** Use the Raspberry Pi Pico W with soldered I²C devices for vibration-based predictive maintenance.

**MCU:** Raspberry Pi Pico W (carrier board with OLED + MPU6050 soldered on)  
**Language:** MicroPython

!!! info "Building on Session 5/6"
    You received the Pico W carrier board and took raw MPU6050 readings during session 5/6. Assessment 3 formalises that work by adding filtering algorithms and anomaly detection. This is also why the Pico W counts as your **second MCU** for the training package requirement (program 2 devices).

**Requirements:**
- Power the OLED and MPU6050 via GPIO output pins (bring VCC pins HIGH in code)
- Run I²C scanner first — confirm both devices found (0x3C and 0x68)
- MPU6050 measuring X, Y, Z acceleration via I²C on Pico W
- OLED displaying live accelerometer readings
- Threshold detection for abnormal vibration
- Moving average filtering to reduce noise
- Serial output with filtered values

**Submission:**
- MicroPython `.py` file(s)
- Screenshot of I²C scanner output showing 0x3C and 0x68
- Photo of Pico W carrier board with VCC pins annotated
- CSV data file (60 seconds of readings)
- 2-minute demonstration video showing OLED + serial output

**Competency:** ICTIOT503 Element 3 – Produce design documentation; I²C bus integration and device addressing

---

## Assessment 4: Payload & Load Management (Week 9)

**Objective:** Integrate sensors, actuators, and I²C peripherals — with real-world breadboard wiring.

**MCU:** A different MCU (not the Pico W carrier board) using header pins on a **solderless breadboard**  
**Language:** Arduino (C++) or MicroPython

!!! warning "Different MCU — Breadboard Required"
    Assessment 4 is deliberately done on a different MCU with components wired on a solderless breadboard. This tests your ability to make reliable I²C connections without the aid of a soldered carrier board. Run the I²C scanner to verify your wiring, and document any connection issues you troubleshoot.

**Requirements:**
- All sensors from A1–A3 functional
- SG90 servo controlling dump bed
- OLED display showing truck status
- RGB LED status indicator
- Buzzer for alarms
- Clean, modular code with functions
- I²C scanner output included as evidence of working connections

**Submission:**
- Complete code file(s) with comments
- Fritzing diagram or breadboard photo (clearly showing all connections)
- I²C scanner screenshot confirming device addresses found
- GitHub repository with README
- 5-minute demonstration video showing:
  - All sensors reading values
  - Servo dump operation
  - OLED displaying data
  - Alert scenarios (high temp, unauthorized access, high vibration)

---

## Assessment 5: Environmental Monitor + Cloud Analytics (Week 14)

**Objective:** Connect device to AWS IoT Core with secure communication and cloud event handling.

**Core Requirements:**
- X.509 certificate authentication (no API keys)
- MQTT publish to `truck/{truckID}/telemetry` (thermistor temp, MPU6050 vibration, MQ-2, lock state)
- Device Shadow for offline state management (desired vs. reported state)
- IoT Rules Engine routing to SNS (alerts), DynamoDB (storage)
- CloudWatch metrics for message volume and latency
- Testing: Offline/online sync, message latency, alert response

**Submission:**
- Arduino `.ino` file (with clear MQTT code structure)
- AWS configuration screenshots (IoT Core Thing, Shadows, Rules)
- Testing document (200-300 words): test cases run, results, performance data
- GitHub repository with README
- 5-minute video: MQTT messages in AWS, Shadow sync offline/online, SNS alert received, CloudWatch metrics visible

---

## Assessment 5b: QuickSight Analytics Dashboard (Week 14)

**Objective:** Create real-time analytics dashboard for haul truck monitoring.

**Core Requirements:**
- **3+ visualizations:** Temperature trend (line chart), vibration status (gauge), alerts summary (table)
- **Data source:** IoT Core → IoT Analytics OR S3/DynamoDB backend
- **Live data:** Minimum 1 hour of historical data, auto-refresh every 5-15 minutes
- **SiteWise asset model:** Create "RockCore-Truck-01" with properties (engine_temperature, vibration_level, cabin_lock_state)
- **Integration:** Link SiteWise to QuickSight for hierarchical visualization

**Submission:**
- QuickSight dashboard URL or full-page screenshot (PDF/PNG)
- IoT Analytics pipeline configuration JSON
- One-page architecture document (justified paragraph, 200-300 words): data flow truck→IoT Core→Analytics→QuickSight, business value of each visualization
- GitHub repository with AWS setup scripts
- 3-minute video: Dashboard loading, interactive filters, each visualization explained, how to spot anomalies

---

## Assessment 6: Capstone Fleet System (Week 18)

**Objective:** Demonstrate complete IoT solution integrating electronics, AWS cloud, and digital twins for fleet monitoring.

!!! info "Full week-by-week requirements"
    The detailed build guide for Assessment 6 spans four files — read these alongside this summary:

    - [Week 15 – Full Integration Guide](../capstone/integration.md)
    - [Week 16 – Pit Station Build](../capstone/pit-station.md)
    - [Week 17 – Testing Scenarios](../capstone/testing.md)
    - [Week 18 – Demo & Final Submission](../capstone/demo.md)

**Core Requirements:**

**Hardware & Sensors**
- Haul truck Pico W with all A1-A5b sensors functional (thermistor, MPU6050, MQ-2) — running Arduino framework
- Continuous MQTT telemetry to AWS IoT Core
- **Pit station** (second Pico W): 16×2 or 20×4 I²C LCD display, piezo buzzer, RGB LED, push button — subscribes to fleet MQTT topics and displays live truck status

**AWS Cloud Integration**
- IoT Core with X.509 certificate authentication
- Device Shadow for offline state management
- IoT Rules Engine routing to SiteWise, DynamoDB, SNS
- **SiteWise:** Asset model "RockCore-Truck-01" with properties (temperature, vibration, gas, lock_state)
- QuickSight dashboard from A5b displaying real truck data
- SNS alerts for anomalies

!!! info "Required vs Optional AWS Services"
    | Service | Status | Condition |
    |---------|--------|-----------|
    | IoT Core (Thing, cert, MQTT) | **Required** | Always |
    | Device Shadow | **Required** | Always |
    | IoT Rules Engine | **Required** | Always |
    | CloudWatch alarms | **Required** | Always |
    | SNS alerts | **Required** | Always |
    | SiteWise + QuickSight | **Required** | If you completed A5b |
    | TwinMaker digital twin | **Required** | If you completed Industry Quest Labs 1–3 |
    | DynamoDB historical data | Recommended | Strongly recommended |
    | Lambda (advanced rules) | Optional | If extending beyond core requirements |

**Digital Twins (AWS IoT TwinMaker)**
- Scene with 6 truck models (1 real truck + 5 simulated)
- Real truck telemetry bound to digital representation
- Visual feedback: anomalies change model color/state
- Demonstrates Industry Quest labs (Weeks 15-17)

**Deliverables:**

1. **GitHub Repository** – Clean structure:
   ```
   /truck        – truck firmware (Pico W, Arduino framework) with all sensors + MQTT
   /pit-station  – LCD + buzzer + RGB fleet display code
   /aws          – IaC scripts (CloudFormation/CDK)
   /docs         – Architecture diagram, setup guide
   README.md     – Deployment instructions
   ```

2. **Demonstration Video (5-7 minutes)**
   - Truck in action: sensors working, MQTT messages flowing
   - AWS console: IoT Core, SiteWise asset model, DynamoDB data
   - QuickSight dashboard: live data with anomaly trigger
   - TwinMaker: digital twins responding to real truck state change
   - Pit station: LCD and alerts reflecting fleet status
   - Business value: safety, maintenance prediction, efficiency

3. **Portfolio Document (Justified paragraphs, 20-30 pages)**
   - **System Overview** (250-300 words): Problem statement, RockCore scenario, how solution delivers value
   - **Architecture** (250-300 words): Truck → IoT Core → Analytics → TwinMaker, with diagram
   - **Hardware** (200-250 words): Sensor integration, wiring, photos
   - **AWS Integration** (300-350 words): IoT Core setup, Shadows, Rules, SiteWise configuration, DynamoDB schema
   - **Analytics & Digital Twins** (250-300 words): QuickSight queries, TwinMaker scene binding, anomaly detection
   - **Pit Station** (200-250 words): LCD display logic, fleet MQTT subscriptions, button cycling, alert triggering
   - **Testing & Validation** (200-250 words): Data flow verification, offline sync test, anomaly response timing
   - **Industry Quest Integration** (150-200 words): Key learnings from Weeks 15-17, application to capstone
   - **Reflection** (150-200 words): Challenges, solutions, future improvements (scaling, multi-truck coordination)
   - **Appendices:** Architecture diagram (PNG), code snippets (key functions only), datasheets, unit mapping table

**Submission Checklist:**
- [ ] GitHub repository link
- [ ] 5-7 minute demonstration video (MP4 or YouTube/Vimeo link)
- [ ] Portfolio PDF (20-30 pages, justified paragraphs)
- [ ] Architecture diagram (PNG/PDF)
- [ ] Offline resilience test documented in portfolio (disconnect/reconnect/Shadow sync with timestamps and screenshot)
- [ ] Unit mapping table (ICTIOT502 + ICTIOT503 alignment)
- [ ] A6_SUBMISSION_TEMPLATE.md completed
- [ ] Complete portfolio ZIP (A1-A6) with all submission templates

---

**Final Portfolio ZIP Structure:**
```
iot-portfolio.zip
├── A1-Electronics-Fundamentals/
│   ├── code/esp32-arduino/
│   ├── A1_SUBMISSION_TEMPLATE.md
│   └── README.md
├── A2-RFID-Access-Control/
│   ├── code/esp32-arduino/
│   ├── A2_SUBMISSION_TEMPLATE.md
│   └── README.md
├── A3-Vibration-Monitoring/
│   ├── code/pico-w-micropython/
│   ├── A3_SUBMISSION_TEMPLATE.md
│   └── README.md
├── A4-Haul-Truck-Integration/
│   ├── code/                    ← language/MCU depends on your A4 choice
│   ├── A4_SUBMISSION_TEMPLATE.md
│   └── README.md
├── A5-AWS-IoT-Integration/
│   ├── code/esp32-arduino/
│   ├── aws-setup/
│   ├── A5_SUBMISSION_TEMPLATE.md
│   ├── A5b_SUBMISSION_TEMPLATE.md
│   └── README.md
└── A6-Capstone-Fleet-Demo/
    ├── truck/ – truck firmware (Pico W, Arduino)
    ├── pit-station/ – LCD + buzzer + RGB fleet display code
    ├── aws/ – CloudFormation/CDK scripts
    ├── docs/ – Architecture diagram, setup guide
    ├── portfolio/ – Portfolio.pdf + unit-mapping.pdf
    ├── video/ – demo-video-link.txt
    ├── A6_SUBMISSION_TEMPLATE.md
    └── README.md
```

---

## General Submission Guidelines

**All Assessments:**
- Submit via Blackboard by 11:59 PM on due date
- Extensions require medical/special consideration evidence
- Late submissions may affect timely feedback on competency development

**Video Requirements:**
- MP4 format, max 500 MB
- Clear audio (narrate what you're demonstrating)
- Screen recording + physical device footage
- Upload to cloud (YouTube, OneDrive) and submit link

**Code Requirements:**
- Comments explaining logic
- Consistent indentation
- Variable names descriptive (`tempSensor`, not `x`)
- No hardcoded credentials (use `secrets.h` in `.gitignore`)

**Academic Integrity:**
- Code must be your own (libraries/examples OK with attribution)
- Cite sources (datasheets, tutorials)
- Plagiarism = 0% grade + academic misconduct

---

## Getting Help



**Resubmission Policy:**
- A1-A4: One resubmission allowed
- A5-A5b: One resubmission allowed
- A6: One resubmission allowed

---

**Related:** [Course Scenario](../scenario.md)

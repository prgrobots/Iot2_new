# Assessments OverviewD

All assessments map to **ICTIOT502** (Develop IoT device solutions) and **ICTIOT503** (Evaluate and test IoT device solutions).

## Assessment Schedule

| Assessment | Unit Elements | Due Date | Deliverable |
|------------|---------------|----------|-------------|
| **A1** | 502: 1.1, 1.2, 1.3, 1.4, 2.4, 3.2 | Week 4 | ESP32 + temp/gas/flame sensors |
| **A2** | 502: 2.2, 3.1, 3.3 | Week 6 | RFID access control + RTC logging |
| **A3** | 502: 2.1, 2.3 | Week 8 | GY-521 accelerometer integration |
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

## Assessment 1: Sensor Integration (Week 4)

**Objective:** Build IoT device with environmental monitoring.

**Requirements:**
- DHT11 temperature/humidity sensor
- MQ-2 gas sensor
- Flame sensor
- Serial output with sensor readings
- Threshold detection logic (e.g., temp > 50°C triggers alert)

**Submission:**
- Arduino `.ino` file
- Wokwi simulation link OR breadboard photo
- 2-minute demonstration video

---

## Assessment 2: Access Control System (Week 6)

**Objective:** Implement RFID authentication with timestamp logging.

**Requirements:**
- RFID-RC522 module reading multiple cards
- DS3231 RTC module for timestamps
- Serial output logging access events
- Authorized/unauthorized card handling

**Submission:**
- Arduino `.ino` file
- CSV log file (5+ access attempts)
- Breadboard photo with RFID and RTC wired
- 2-minute demonstration video

---

## Assessment 3: Vibration Monitoring (Week 7)

**Objective:** Use accelerometer for predictive maintenance.

**Requirements:**
- GY-521 (MPU6050) measuring X, Y, Z acceleration
- Threshold detection for abnormal vibration
- Moving average filtering to reduce noise
- Serial output with filtered values

**Submission:**
- Arduino `.ino` file
- Breadboard photo
- CSV data file (60 seconds of readings)
- 2-minute demonstration video

---

## Assessment 4: Complete Haul Truck Device (Week 9)

**Objective:** Integrate all sensors, actuators, and I²C peripherals.

**Requirements:**
- All sensors from A1-A3 functional
- SG90 servo controlling dump bed
- OLED display showing truck status
- RGB LED status indicator
- Buzzer for alarms
- Clean, modular code with functions

**Submission:**
- Complete Arduino `.ino` file with comments
- Fritzing diagram or breadboard photo
- GitHub repository with README
- 5-minute demonstration video showing:
  - All sensors reading values
  - Servo dump operation
  - OLED displaying data
  - Alert scenarios (high temp, unauthorized access, high vibration)

---

## Assessment 5: AWS IoT Integration & Testing (Week 14)

**Objective:** Connect device to AWS IoT Core with secure communication and cloud event handling.

**Core Requirements:**
- X.509 certificate authentication (no API keys)
- MQTT publish to `truck/{truckID}/telemetry` (DHT11, GY-521, MQ-2, lock state)
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

**Core Requirements:**

**Hardware & Sensors**
- Real ESP32 with all A1-A5b sensors functional (DHT11, GY-521, MQ-2, touch sensor)
- Continuous MQTT telemetry to AWS IoT Core
- Pit station: Simple 3-LED status indicator (red=error, orange=warning, green=normal)

**AWS Cloud Integration**
- IoT Core with X.509 certificate authentication
- Device Shadow for offline state management
- IoT Rules Engine routing to SiteWise, DynamoDB, SNS
- **SiteWise:** Asset model "RockCore-Truck-01" with properties (temperature, vibration, gas, lock_state)
- QuickSight dashboard from A5b displaying real truck data
- SNS alerts for anomalies

**Digital Twins (AWS IoT TwinMaker)**
- Scene with 6 truck models (1 real truck + 5 simulated)
- Real truck telemetry bound to digital representation
- Visual feedback: anomalies change model color/state
- Demonstrates Industry Quest labs (Weeks 15-17)

**Deliverables:**

1. **GitHub Repository** – Clean structure:
   ```
   /truck     – ESP32 firmware with all sensors + MQTT
   /pit-station – 3-LED status code
   /aws       – IaC scripts (CloudFormation/CDK)
   /docs      – Architecture diagram, setup guide
   README.md  – Deployment instructions
   ```

2. **Demonstration Video (5 minutes)**
   - Truck in action: sensors working, MQTT messages flowing
   - AWS console: IoT Core, SiteWise asset model, DynamoDB data
   - QuickSight dashboard: live data with anomaly trigger
   - TwinMaker: digital twins responding to real truck state change
   - Pit station: 3 LEDs reflecting truck health status
   - Business value: safety, maintenance prediction, efficiency

3. **Portfolio Document (Justified paragraphs, ~15-20 pages)**
   - **System Overview** (250-300 words): Problem statement, RockCore scenario, how solution delivers value
   - **Architecture** (250-300 words): Truck → IoT Core → Analytics → TwinMaker, with diagram
   - **Hardware** (200-250 words): Sensor integration, wiring, photos
   - **AWS Integration** (300-350 words): IoT Core setup, Shadows, Rules, SiteWise configuration, DynamoDB schema
   - **Analytics & Digital Twins** (250-300 words): QuickSight queries, TwinMaker scene binding, anomaly detection
   - **Pit Station** (150-200 words): 3-LED status logic, how it reflects truck state
   - **Testing & Validation** (200-250 words): Data flow verification, offline sync test, anomaly response timing
   - **Industry Quest Integration** (150-200 words): Key learnings from Weeks 15-17, application to capstone
   - **Reflection** (150-200 words): Challenges, solutions, future improvements (scaling, multi-truck coordination)
   - **Appendices:** Architecture diagram (PNG), code snippets (key functions only), datasheets, unit mapping table

**Submission Checklist:**
- [ ] GitHub repository link
- [ ] 5-minute demonstration video (MP4)
- [ ] Portfolio PDF (15-20 pages, justified paragraphs)
- [ ] Architecture diagram (PNG/PDF)
- [ ] Unit mapping table (ICTIOT503 alignment)
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
│   ├── code/esp32-arduino/
│   ├── A3_SUBMISSION_TEMPLATE.md
│   └── README.md
├── A4-Haul-Truck-Integration/
│   ├── code/esp32-arduino/
│   ├── A4_SUBMISSION_TEMPLATE.md
│   └── README.md
├── A5-AWS-IoT-Integration/
│   ├── code/esp32-arduino/
│   ├── aws-setup/
│   ├── A5_SUBMISSION_TEMPLATE.md
│   ├── A5b_SUBMISSION_TEMPLATE.md
│   └── README.md
└── A6-Capstone-Fleet-Demo/
    ├── truck/ – ESP32 firmware
    ├── pit-station/ – 3-LED status code
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
- Late penalties: 10% per day (max 3 days, then 0%)
- Extensions require medical/special consideration evidence

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

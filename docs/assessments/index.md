# Assessments Overview

All assessments map to **ICTIOT502** (Develop IoT device solutions) and **ICTIOT503** (Evaluate and test IoT device solutions).

## Assessment Schedule

| Assessment | Unit Elements | Due Date | Weight | Deliverable |
|------------|---------------|----------|--------|-------------|
| **A1** | 502: 1.1, 1.2, 1.3, 1.4, 2.4, 3.2 | Week 4 | 10% | ESP32 + temp/gas/flame sensors |
| **A2** | 502: 2.2, 3.1, 3.3 | Week 6 | 10% | RFID access control + RTC logging |
| **A3** | 502: 2.1, 2.3 | Week 8 | 10% | GY-521 accelerometer integration |
| **A4** | 502: 3.4, 4.1 | Week 9 | 15% | Full haul truck system |
| **A5** | 503: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3 | Week 14 | 18% | AWS IoT integration + testing |
| **A5b** | 503: 2.4 | Week 14 | 7% | QuickSight analytics dashboard |
| **A6** | 503: 3.1, 3.2, 3.3 | Week 18 | 30% | Complete fleet system + demo |

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

**Objective:** Connect device to AWS IoT Core and implement cloud features with comprehensive testing documentation.

**Requirements:**
- X.509 certificate authentication
- MQTT publish to `truck/{truckID}/telemetry`
- Device Shadow for offline resilience
- IoT Rules sending SNS alerts
- CloudWatch metrics and alarms
- **Testing documentation** per 503 elements:
  - Test plan (unit, integration, system tests)
  - Test cases with expected vs actual results
  - Bug log and resolutions
  - Performance testing (message latency, offline sync)

**Submission:**
- Arduino `.ino` file with MQTT code
- AWS console screenshots (IoT Core, SNS, CloudWatch)
- Testing report (PDF, 5-10 pages)
- GitHub repository
- 5-minute demonstration video showing:
  - Live MQTT messages in AWS Test console
  - Shadow updates
  - SNS email/SMS received
  - CloudWatch alarm triggered
  - Offline sync test (disconnect WiFi, reconnect, verify sync)


---

## Assessment 5b: QuickSight Analytics Dashboard (Week 14)

**Objective:** Create a real-time analytics dashboard for haul truck monitoring using AWS QuickSight and IoT Analytics.

**Requirements:**

#### Dashboard Design (Mandatory)
- **Minimum 3 visualizations:**
  1. **Temperature Trend** – Line chart showing engine temperature over last 24 hours
  2. **Vibration Status** – Gauge or card displaying current vibration value vs. alert threshold
  3. **Alerts Summary** – Table showing recent alerts (timestamp, alert type, severity)

#### Data Integration
- Connect QuickSight to IoT Core telemetry via **IoT Analytics pipeline** OR **S3/DynamoDB backend**
- Demonstrate live/near-real-time data (minimum 1 hour of historical data)
- Data refresh rate: auto-refresh every 5-15 minutes

#### SiteWise Asset Model (Optional Enhancement)
- Model haul truck as **AWS IoT SiteWise asset**
- Configure properties: `engine_temperature`, `vibration_level`, `cabin_lock_state`
- Link SiteWise model to QuickSight dashboard for hierarchical visualization
- **Bonus:** +2 points for complete SiteWise integration

#### Documentation
- **One-page architecture document** explaining:
  - Data flow: truck MQTT → IoT Core → IoT Analytics → S3/database → QuickSight
  - Business value of each visualization
  - How mining supervisor uses dashboard for predictive maintenance

**Submission:**
- [ ] QuickSight dashboard URL (live link) OR full-page screenshot (PDF/PNG)
- [ ] QuickSight dashboard definition JSON export
- [ ] IoT Analytics pipeline configuration JSON
- [ ] One-page architecture document (PDF)
- [ ] 3-minute video walkthrough showing:
  - Dashboard loading with live data
  - Interactive filters/drill-downs (if configured)
  - Each visualization and what it reveals
  - How to identify anomalies from trends
  - (Optional) SiteWise asset model in AWS console

**Submission Format:**
- Zip file containing all deliverables + links
- Submit to Blackboard "Week 14 – A5b" folder


---

## Assessment 6: Capstone Fleet System (Week 18)

**Objective:** Demonstrate complete IoT solution with pit station.

**Requirements:**
- **Haul truck device** with all A1-A5b features (sensors, AWS IoT, analytics)
- **Pit station ESP32** with LCD dashboard
- AWS integration (Shadows, Rules, Analytics)
- Fleet simulation (single device representing 20 trucks via Shadow)
- **Four test scenarios** from Week 17:
  1. Engine overheat cascade
  2. Unauthorized access
  3. Vibration anomaly
  4. Multi-fault scenario
- **Offline resilience test** (disconnect WiFi, reconnect, verify Shadow sync)
- **Performance metrics** (message latency, Shadow sync time)

**Deliverables:**
1. **GitHub Repository:**
   - `/truck` folder: ESP32 code for truck
   - `/pit-station` folder: ESP32 code for pit station
   - `/aws` folder: CloudFormation/CDK/CLI scripts
   - `/docs` folder: Architecture diagram, setup guide
   - `README.md` with deployment instructions

2. **Demonstration Video (5-7 minutes):**
   - Opening: Introduce RockCore scenario
   - Section 1: Normal operation (truck sending data, pit station displaying)
   - Section 2: Test Scenario 1 (engine overheat)
   - Section 3: Test Scenario 2 (unauthorized access)
   - Section 4: Offline resilience (disconnect WiFi, show Shadow sync)
   - Closing: Explain business value (ROI, safety benefits)

3. **Portfolio Document (PDF, 15-25 pages):**
   - **1. Executive Summary** (1 page): Business problem and solution
   - **2. Architecture** (2-3 pages): Diagrams, component descriptions
   - **3. Device Implementation** (4-6 pages): Hardware, code structure
   - **4. AWS Integration** (3-4 pages): IoT Core, Shadows, Rules, Analytics
   - **5. Testing Results** (4-6 pages): Test scenarios, performance data
   - **6. Reflection** (1-2 pages): Challenges, lessons learned
   - **7. Appendices**: Code snippets, datasheets, screenshots

**Submission Checklist:**
- [ ] GitHub repository URL (public or instructor access)
- [ ] Video uploaded (YouTube/Vimeo/OneDrive)
- [ ] Portfolio PDF uploaded to Blackboard
- [ ] Peer evaluation form completed
- [ ] Self-assessment against 503 performance criteria


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

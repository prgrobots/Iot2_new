# Course Glossary

Quick reference for terminology used throughout the IoT course, particularly AWS resources and NMTAFE sandbox setup.

---

## AWS Terms

### AWS Skill Builder

**AWS Skill Builder** is a learning platform from Amazon Web Services offering two types of courses:

- **Free Foundations Courses** – 5 digital courses covering AWS IoT Core, device management, analytics, and visualization (Weeks 10-14). All students enroll directly at no cost.
- **Paid Courses** – Premium courses accessed via NMTAFE sandbox subscription. These include interactive lab environments for hands-on practice.



**In this course:** Both types are used. Foundations courses (Weeks 10-14) are free. Paid courses (OTA Updates, ETL at the Edge) are provided via NMTAFE sandbox at no cost to students.

---

### AWS Industry Quest

**AWS Industry Quest** is a separate, game-based subscription course from AWS focused on real-world manufacturing and automotive scenarios. Different from AWS Skill Builder.

**Key features:**
- 13 hours of immersive labs (Weeks 15-17)
- Manufacturing and Automotive industry quest
- Digital twin labs using AWS IoT TwinMaker
- Fleet simulation and predictive maintenance scenarios
- Accessed via NMTAFE sandbox at no cost to students

**In this course:** Students complete all 13 hours of Industry Quest as their Capstone preparation (Weeks 15-17).

---

### NMTAFE Sandbox

**NMTAFE Sandbox** is a cloud account subscription managed by NMTAFE (Northern Metropolitan TAFE) that provides institutional access to AWS services and learning platforms at no cost to individual students.

**How it works:**
1. You (the instructor) manage the NMTAFE sandbox account
2. You add students to this account
3. Students access AWS resources through the shared account
4. No individual student subscriptions or payments needed

**Courses accessed via NMTAFE sandbox in this course:**
- OTA Updates in Edge Devices (Week 12)
- ETL at the Edge (Week 13)
- AWS Industry Quest: Manufacturing and Automotive (Weeks 15-17)

**Cost to students:** $0 — All subscription access is covered by NMTAFE institutional account

---

### AWS IoT Core

**AWS IoT Core** is Amazon's managed service for secure, scalable connectivity and communication between IoT devices and the cloud.

**Key concepts in this course:**
- **Thing Registry** – Register each truck as a "Thing" in AWS
- **MQTT** – Lightweight messaging protocol for device-to-cloud communication
- **X.509 Certificates** – Secure authentication (no passwords)
- **Device Shadows** – Virtual representation of device state (survives offline periods)
- **IoT Rules** – Data routing and filtering rules

**Covered in:** Weeks 10-14 (Foundations courses)

---

### Digital Twin

**A digital twin** is a virtual, real-time replica of a physical device or system. It models the device's state, behavior, and performance in the cloud.

**In this course:**
- Physical: Your 3D-printed haul truck with sensors
- Digital: Virtual representation in AWS IoT TwinMaker
- Benefits: Simulation, predictive maintenance, testing scenarios without impacting production

**Weeks 15-17:** Build and integrate a digital twin as part of AWS Industry Quest labs

---

## Course Structure Terms

### Assessment (A1–A6)

**Assessments** are graded submissions evaluating student learning against performance criteria.

| Assessment | Focus | Due |
|---|---|---|
| A1 | Sensor integration | Week 4 |
| A2 | Access control (RFID) | Week 6 |
| A3 | Vibration monitoring | Week 8 |
| A4 | Complete truck device | Week 9 |
| A5 | AWS IoT integration | Week 14 |
| A5b | QuickSight dashboard | Week 14 |
| A6 | Capstone fleet system | Week 18 |

**See:** [Assessments](assessments/index.md) for detailed rubrics

---

### Capstone

**Capstone** is the final project (Week 18) integrating all course components:
- Full electronics truck system (Weeks 1-9)
- AWS cloud integration (Weeks 10-14)
- AWS Industry Quest labs (Weeks 15-17)

**Deliverables:**
- Working haul truck with all sensors and AWS connectivity
- Pit station dashboard with live fleet monitoring
- 5-minute demonstration video
- Portfolio document mapping to performance criteria

---

### RockCore Mining Scenario

**RockCore** is the fictional mining company context for the entire course. Students build an IoT fleet monitoring system for RockCore's 20 haul trucks in the Pilbara region of Australia.

**Business Problem:**
- Equipment failures cost $18M annually
- No predictive maintenance (reactive vs. proactive)
- Limited fleet visibility from pit station

**Your Solution:**
- Real ESP32 truck with temperature, gas, vibration, RFID sensors
- AWS cloud infrastructure for fleet monitoring
- Digital twins for predictive maintenance
- Pit station dashboard for supervisor visibility

**See:** [RockCore Mining Scenario](scenario.md)

---

### Pit Station

**Pit station** is the operator control center at the mining site where supervisors monitor the fleet in real-time.

**In this course:**
- Week 16: Build pit station with second ESP32 + 20×4 LCD display
- Week 17+: Connect to AWS dashboards (QuickSight) for live fleet status
- Real-hardware extension: Pit station shows truck telemetry, alerts, maintenance scheduling

---

## Technology Terms

### ESP32

**ESP32** is a microcontroller with built-in WiFi and Bluetooth capabilities. Manufactured by Espressif.

**In this course:**
- Primary hardware platform for the haul truck (Weeks 1-9)
- Runs your sensor code and MQTT client
- Communicates with AWS IoT Core via WiFi

**Why ESP32?** Low cost, extensive GPIO pins, WiFi capable, good for IoT prototyping

---

### MQTT

**MQTT** (Message Queuing Telemetry Transport) is a lightweight publish-subscribe protocol ideal for IoT devices with limited bandwidth or intermittent connectivity.

**Key concepts:**
- **Publish** – Device sends data to a topic (e.g., `rockcore/trucks/HC01/telemetry`)
- **Subscribe** – Cloud or other devices listen to a topic
- **Broker** – AWS IoT Core manages message routing
- **Lightweight** – Uses less bandwidth than HTTP

**In this course:** All truck-to-cloud communication uses MQTT (Week 10+)

---

### Device Shadow

**Device Shadow** (also called "Twin") is an AWS IoT feature maintaining both desired and reported state for a device.

**Desired State** – What the cloud/operator wants (e.g., "lock cabin")  
**Reported State** – What the device actually reports (e.g., "cabin locked")  
**Delta** – The difference between desired and reported

**Why it matters:** Devices often lose connectivity (underground mining). Shadows remember the last known state and sync when reconnected.

**In this course:** Engine temperature and cabin lock state tracked via Device Shadows (Week 11+)

---

### OTA Update

**OTA** (Over-The-Air) means remotely updating device firmware without physical access.

**In this course:**
- Week 12: Learn OTA concepts in AWS Skill Builder
- Example: Change vibration threshold from 1.8g to 2.2g on all 20 trucks simultaneously
- Old method: Visit each truck, reprogram it manually (40 hours)
- New method: Push OTA update from cloud (20 minutes)

---

### TwinMaker

**AWS IoT TwinMaker** is Amazon's service for building digital twins of buildings, factories, or fleet systems.

**Features used in this course:**
- Model a haul truck as a 3D asset
- Connect live sensor data (temperature, vibration, position)
- Create fleet scenes showing all 20 trucks
- Trigger anomaly responses (visual alerts)
- Integration with predictive maintenance systems

**Weeks 15-17:** Core component of AWS Industry Quest labs

---

### QuickSight

**AWS QuickSight** is Amazon's business intelligence and data visualization service.

**In this course:**
- Assessment A5b: Create dashboard showing fleet status
- Visualizations: Temperature trends, vibration heatmaps, alert summary
- Connected to IoT Analytics data pipeline
- Pit station supervisors use dashboard for real-time fleet monitoring

---

## Electronics Terms

### DHT11

**DHT11** is a low-cost temperature and humidity sensor.

- Range: 0–50°C (temperature), 20–90% (humidity)
- Interface: Single-wire digital protocol
- Used: Engine compartment temperature monitoring (A1, Week 4)

---

### GY-521 (MPU6050)

**GY-521** breakout board with **MPU6050** accelerometer and gyroscope.

- Measures: 3-axis acceleration and 3-axis angular velocity
- Interface: I²C
- Used: Vibration/shock detection for predictive maintenance (A3, Week 8)

---

### RFID-RC522

**RFID reader module** for reading RFID cards/tags.

- Range: ~5 cm
- Interface: SPI
- Used: Access control system – cabin lock/unlock with authorized cards (A2, Week 6)

---

### I²C

**I²C** (Inter-Integrated Circuit) is a two-wire protocol for connecting multiple sensors to a microcontroller.

- Wires: SDA (data), SCL (clock), GND, VCC
- Devices: Multiple sensors share same wires
- Used: Connect GY-521, OLED, LCD displays (Weeks 5+)

---

## Acronyms

| Acronym | Meaning |
|---------|---------|
| A1–A6 | Assessment 1–6 |
| AWS | Amazon Web Services |
| CLI | Command-Line Interface |
| DHT | Digital Humidity Temperature sensor |
| ESP32 | Microcontroller with WiFi/BLE |
| ETL | Extract, Transform, Load (data processing) |
| GND | Ground (electrical reference) |
| GPIO | General Purpose Input/Output pins |
| I²C | Inter-Integrated Circuit (two-wire protocol) |
| IoT | Internet of Things |
| MQTT | Message Queuing Telemetry Transport |
| NMTAFE | Northern Metropolitan TAFE (institution) |
| OTA | Over-The-Air (remote firmware update) |
| RFID | Radio Frequency Identification |
| SPI | Serial Peripheral Interface (three-wire protocol) |
| TLS | Transport Layer Security (encryption) |
| VCC | Power supply voltage |
| WiFi | Wireless networking protocol |

---

## Related Pages

- [AWS Foundations Resources](resources/aws-foundations.md) – Complete AWS course listing and enrollment instructions
- [Course Overview](overview.md) – 18-week timeline and session structure
- [RockCore Mining Scenario](scenario.md) – Business context and system requirements
- [Assessments](assessments/index.md) – Grading rubrics and deliverables

---

*Last updated: 13 December 2025*

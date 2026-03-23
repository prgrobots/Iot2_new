# Learning & Assessment Plan - Complete 18-Week Course Schedule

## ICTIOT502 (Understand IoT System Architecture) + ICTIOT503 (Develop IoT Applications)

---




## Course Overview

**Duration:** 18 weeks (integrated delivery)  
**Focus:** Physical computing fundamentals through cloud-connected IoT systems  
**Scenario:** RockCore mining haul truck monitoring system  
**Platform:** Wokwi & Tinkercad simulations with real ESP32 hardware  
**Assessment:** Portfolio-based with 6 practical assessment components (A1–A6)

---

## Learning and Assessment Schedule

!!! note "Week 1-2 Structure"
    The combined Week 1-2 session (8 hours) covers Voltage, Current, and Ohm's Law fundamentals. Navigation references `electronics/01.md`. Note: A separate `electronics/02.md` file exists with LEDs & Breadboards content but is not yet integrated into the course structure—this should be consolidated with Week 3 (Advanced Output + Buttons) or clarified as a separate week depending on course redesign.

!!! warning "Schedule Note — Public Holiday & Equipment Changes"
    A public holiday fell between Sessions 4 and 5 (calendar Weeks 4–5), shifting the schedule by one week. Sessions 6 and 7 have been **combined into a single Week 6/7 session** (RFID, Tones & Environment) to align delivery with the current calendar position. The RTC (DS3231) has been removed; Assessment 2 now uses buzzer tones for access feedback instead.
    
    Additionally, Session 4 and Assessment 1 have been updated: the **DHT11 sensor is replaced by a thermistor**, and the **photocell (LDR) has been removed from A1 scope**. The LDR is now covered in Session 5/6 as an additional task. See the [Course Transition Log](../course-transition.md) for full details.

### Phase 1: Electronics Fundamentals (Weeks 1–9)

| Week | Session Title | Simulator / Hardware | Key Content | Learning Resources* | Out-of-Class Activities* | Truck Progress | Hours |
|------|---------------|----------------------|-------------|-------------------|-------------------------|----------------|-------|
| **[Week 1-2](../electronics/01.md)** **(8hrs)** | L1–L3: Voltage, Current, Ohm's Law | Tinkercad Circuits | PhysComp Electronics basics, build series circuit with current measurement | PhysComp Lesson 1-3, Tinkercad tutorials | Review electronics fundamentals, complete circuit simulations | Print chassis | 8 |
| **[Week 3](../electronics/03.md)** **(4hrs)** | Advanced Output + Buttons | Wokwi (ESP32) | Fade PWM, RGB crossfade, buttons, debouncing | PhysComp Lesson 4, Wokwi documentation | Practice LED control patterns, button handling | Front panel alerts, chassis assembly begins | 4 |
| **[Week 4](../electronics/04.md)** **(4hrs)** | Analog Input + Sensors | Wokwi → Real ESP32 | Thermistor (NTC 10kΩ), ADC reading, voltage divider, RGB LED colour mapping | PhysComp Lesson 5, sensor datasheets | Test analog reading code, troubleshoot thermistor connections | Front panel sensors | 4 |
| **Week 5** **(Public Holiday)** | — No class — | — | Course catch-up; thermistor self-study; prepare for Session 5 | See [Week 5 Transition page](../electronics/week5-transition.md) | Review Session 4 work; commit A1 to GitHub; install I²C libraries | — | — |
| **[Week 6 (Session 5)](../electronics/05.md)** **(4hrs)** | I²C + Actuators | Real ESP32 + Raspberry Pi Pico W | OLED display, MPU6050 accelerometer, servo control; Pico W pinout, GPIO power control, I²C reliability (soldered vs breadboard) | PhysComp Lesson 6, I²C protocol guides, [Pico W Pinout PDF](https://datasheets.raspberrypi.com/picow/PicoW-A4-Pinout.pdf) | Implement I²C communication, test multi-device integration, run I²C scanner on Pico W | Base + Back panels | 4 |
| **[Week 7/8 (Session 6/7)](../electronics/0607.md)** **(4hrs)** | RFID, Tones & Environment | Real ESP32 | RFID card authentication (SPI), SPI vs I²C comparison, buzzer access tones, rain sensor, ultrasonic distance | PhysComp Lesson 7-8, RFID-RC522 library docs | Implement access control with audio feedback, test environmental sensors | Left panel + Roof panel | 4 |
| **[Week 9 (Session 8)](../electronics/08.md)** **(4hrs)** | Signal Processing & Vibration (A3) | Raspberry Pi Pico W | Moving average filter, anomaly detection on MPU6050 data; completes work started on Pico W in Session 5/6 | PhysComp Signals module, DSP algorithms | Add filtering to Session 5/6 Pico W code; complete Assessment 3 submission | Base panel predictive algo | 4 |
| **[Week 10 (Session 9)](../electronics/09.md)** **(4hrs)** | Full Truck Assembly & Testing | Real ESP32 | Inter-panel I²C communication, fault testing, final integration | Integration testing guides, debugging tools | Complete system testing, troubleshoot all components | Complete physical truck | 4 |

!!! warning "Assessment Point 1: A1 Complete"
    **[A1: Engine Compartment Monitor](../assessments/index.md)** (Due Week 4)
    - Sensor integration and real-time monitoring
    - Maps to ICTIOT502 Device 1 Condition 1

!!! warning "Assessment Point 2: A2 Complete"
    **[A2: Operator Cabin Safety System](../assessments/index.md)** (Due Week 6/7)
    - RFID access control with buzzer tone feedback (no RTC)
    - Maps to ICTIOT502 Device 1 Condition 2

!!! warning "Assessment Point 3: A3 Complete"
    **[A3: Tire & Suspension Health Monitor](../assessments/index.md)** (Due Week 8)
    - Sensor fusion and predictive analytics
    - Maps to ICTIOT503 Device 1

!!! warning "Assessment Point 4: A4-A5 Complete"
    **[A4: Payload & Load Management](../assessments/index.md)** (Due Week 9)
    - Hardware integration and system testing
    - Maps to ICTIOT503 Device 2
    - **[A5: Haul Road Environmental Monitor](../assessments/index.md)** (Due Week 9)
    - Complete sensor suite and environmental data
    - Maps to Integration Requirements

---

### Phase 2: AWS IoT Foundations (Weeks 10–14)

| Week | Session Title | Hardware | Key Content | Learning Resources* | Out-of-Class Activities* | Cloud Progress | Hours |
|------|---------------|----------|-------------|-------------------|-------------------------|----------------|-------|
| **[Week 10](../aws/10.md)** **(4hrs)** | AWS IoT Core & Secure Connection | Real ESP32 | AWS IoT Core basics, device registration, secure MQTT connection | AWS Skill Builder: Getting Started (35 min) + Securely Connecting (1 h) | Complete AWS training courses, set up device certificates | Register truck → MQTT publish thermistor/gas data | 4 |
| **[Week 11](../aws/11.md)** **(4hrs)** | Device Data, Rules & Shadows | Real ESP32 | Device Shadow, IoT Rules Engine, SNS notifications | AWS Skill Builder: Handling AWS IoT Device Data (2 h) | Implement device shadows, create data processing rules | Device Shadow for engine temp & cabin lock | 4 |
| **[Week 12](../aws/12.md)** **(4hrs)** | Fleet Management & OTA | Real ESP32 | Thing Groups, fleet management, OTA updates | AWS Skill Builder: Managing Devices at Scale (3.5 h) + OTA Updates (1 h) | Configure thing groups, test firmware updates | Thing Groups, OTA firmware deployment | 4 |
| **[Week 13](../aws/13.md)** **(4hrs)** | Cloud Analytics & Real-Time Processing | Real ESP32 | AWS IoT Analytics pipelines, SQL data transformation, real-time dashboards | AWS Skill Builder: Analytics & Visualization (45 min) | Build IoT Analytics channel and pipeline, create SQL queries | IoT Analytics data store with real-time aggregations | 4 |
| **[Week 14](../aws/14.md)** **(4hrs)** | SiteWise Asset Modeling & Visualization | Real ESP32 | AWS IoT SiteWise asset hierarchy, QuickSight dashboards, insights | AWS Skill Builder: Analytics & Visualization (45 min) | Build asset models, create interactive dashboards | SiteWise asset model "RockCore-Truck-01", QuickSight dashboard | 4 |

!!! warning "Assessment Point 5: A5b Complete - Analytics Phase"
    **[A5b: Cloud Analytics & Visualization](../assessments/index.md)** (Due Week 14)
    - AWS platform integration and dashboard development
    - Integrates all prior electronics assessments (A1-A4) with cloud data

---

### Phase 3: Capstone Integration (Weeks 15–18)

!!! note "Capstone Content Structure"
    Weeks 15-17 are part of the **AWS Industry Quest: Manufacturing** capstone experience. Primary content is located in the `capstone/` directory. Supplementary AWS training materials are available in the `aws/` directory as optional reference reading.

| Week | Session Title | Hardware | Key Content | Learning Resources* | Out-of-Class Activities* | System Progress | Hours |
|------|---------------|----------|-------------|-------------------|-------------------------|-----------------|-------|
| **[Week 15](../capstone/testing.md)** **(4hrs)** | AWS Industry Quest: Manufacturing (1/3) | Real ESP32 + Pit Station | Digital twins, edge-to-cloud architecture, predictive maintenance | AWS Industry Quest (13 h split over 3 weeks) | AWS training modules, twin maker exercises | Build digital twin in TwinMaker | 4 |
| **[Week 16](../capstone/integration.md)** **(4hrs)** | AWS Industry Quest: Manufacturing (2/3) | Real ESP32 + Pit Station | Live sensor data, fleet simulation, vehicle telemetry | AWS Industry Quest continued | Complete simulation labs, integrate live data | Digital twin with live telemetry from truck | 4 |
| **[Week 17](../capstone/pit-station.md)** **(4hrs)** | AWS Industry Quest: Manufacturing (3/3) | Real ESP32 + Pit Station | Complete manufacturing labs, system integration | AWS Industry Quest completion | Finish integration labs, prepare pit station | Digital twin fully integrated with IoT sensors | 4 |
| **[Week 18](../capstone/demo.md)** **(4hrs)** | Capstone: Demo & Final Submission | Real ESP32 + Pit Station | Live/recorded demo, portfolio mapping, video demonstration, digital twin integration | Professional documentation templates, portfolio best practices | Complete portfolio documentation, final system validation | Final zip upload with digital twin integration | 4 |

!!! success "Assessment Point 6: A6 Complete - Capstone Portfolio"
    **[A6: Capstone – Full Fleet System + AWS Dashboard](../assessments/index.md)** (Due Week 18)
    - Complete system demonstration and portfolio integration
    - Maps to all performance criteria for both ICTIOT502 and ICTIOT503
    - Includes 5-minute system video and digital twin integration
    - Demonstrates competency across all eight units of competency

---

## Assessment Summary

| Assessment | Focus Area | Due Week | Unit Coverage | Status |
|-----------|-----------|----------|---------------|--------|
| **A1** | Engine Compartment Monitor | 4 | ICTIOT502 Device 1 Cond 1 | Physical Computing |
| **A2** | Operator Cabin Safety System | 6/7 | ICTIOT502 Device 1 Cond 2 | Physical Computing |
| **A3** | Tire & Suspension Health Monitor | 9 | ICTIOT503 Device 1 | Physical Computing |
| **A4** | Payload & Load Management | 9 | ICTIOT503 Device 2 | Physical Computing |
| **A5** | Environmental Monitor + Cloud Analytics | 14 | Integration + Cloud | Cloud Integration |
| **A6** | Capstone Fleet System | 18 | All Units | Full Integration |

---

## AWS Training Requirements

**Complete these courses in order. All are FREE via your student sandbox account.**

| Week | Course Name | Duration | How to Access |
|------|-------------|----------|---------------|
| 10 | Getting Started with AWS IoT | 35 min | AWS Skill Builder (free) |
| 10 | Securely Connecting AWS IoT Devices to the Cloud | 1 h | AWS Skill Builder (free) |
| 11 | Handling AWS IoT Device Data and States | 2 h | AWS Skill Builder (free) |
| 12 | Managing AWS IoT Devices at Scale | 3 h 30 m | AWS Skill Builder (free) |
| 12 | OTA Updates in Edge Devices | 1 h | NMTAFE Sandbox (instructor adds you) |
| 13 | AWS IoT Analytics & Real-Time Processing | 2 h | AWS Skill Builder (free) |
| 14 | Analyzing, Visualizing, and Gaining Insights from IoT Devices | 45 min | AWS Skill Builder (free) |
| 15–17 | AWS Industry Quest: Manufacturing and Automotive | 13 h | NMTAFE Sandbox (instructor adds you) |

**Total: ~25 hours of AWS training (Weeks 10–17)**

---

## Quick Navigation

- **[Scenario](../scenario.md)** - RockCore mining haul truck context
- **[Assessment Information](../assessments/index.md)** - A1-A6 structure and deliverables
- **[AWS Training Resources](../resources/aws-training.md)** - Detailed course descriptions and enrollment links
- **[3D Print Files](../prints.md)** – Physical truck design
- **[Troubleshooting](../resources/troubleshooting-resources.md)** – Common issues and solutions

---

*\* Learning Resources and Out-of-Class Activities detailed in individual session pages*

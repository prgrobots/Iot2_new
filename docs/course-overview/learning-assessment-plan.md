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

### Phase 1: Electronics Fundamentals (Weeks 1–9)

| Week | Session Title | Simulator / Hardware | Key Content | Learning Resources* | Out-of-Class Activities* | Truck Progress | Hours |
|------|---------------|----------------------|-------------|-------------------|-------------------------|----------------|-------|
| **[Week 1-2](../electronics/01.md)** **(8hrs)** | L1–L3: Voltage, Current, Ohm's Law | Tinkercad Circuits | PhysComp Electronics basics, build series circuit with current measurement | PhysComp Lesson 1-3, Tinkercad tutorials | Review electronics fundamentals, complete circuit simulations | Print chassis | 8 |
| **[Week 3](../electronics/03.md)** **(4hrs)** | Advanced Output + Buttons | Wokwi (ESP32) | Fade PWM, RGB crossfade, buttons, debouncing | PhysComp Lesson 4, Wokwi documentation | Practice LED control patterns, button handling | Front panel alerts, chassis assembly begins | 4 |
| **[Week 4](../electronics/04.md)** **(4hrs)** | Analog Input + Sensors | Wokwi → Real ESP32 | DHT11, MQ-2, flame sensor fundamentals | PhysComp Lesson 5, sensor datasheets | Test analog reading code, troubleshoot sensor connections | Front panel sensors | 4 |
| **[Week 5](../electronics/05.md)** **(4hrs)** | I²C + Actuators | Real ESP32 | OLED display, accelerometer (GY-521), servo control | PhysComp Lesson 6, I²C protocol guides | Implement I²C communication, test multi-device integration | Base + Back panels | 4 |
| **[Week 6](../electronics/06.md)** **(4hrs)** | RFID, RTC, Touch | Real ESP32 | RFID reader, real-time clock, capacitive touch sensors | PhysComp Lesson 7, access system design | Build access control logic, implement time tracking | Left panel access system | 4 |
| **[Week 7](../electronics/07.md)** **(4hrs)** | Environmental + Tones | Real ESP32 | Rain sensor, dust sensor, buzzer tone generation | PhysComp Lesson 8, environmental monitoring patterns | Create alert sounds, integrate environmental data | Roof panel | 4 |
| **[Week 8](../electronics/08.md)** **(4hrs)** | Signal Processing & Vibration | Real ESP32 | Filtering techniques, anomaly detection, vibration analysis | PhysComp Signals module, DSP algorithms | Implement predictive algorithms, test fault detection | Base panel predictive algo | 4 |
| **[Week 9](../electronics/09.md)** **(4hrs)** | Full Truck Assembly & Testing | Real ESP32 | Inter-panel I²C communication, fault testing, final integration | Integration testing guides, debugging tools | Complete system testing, troubleshoot all components | Complete physical truck | 4 |

!!! warning "Assessment Point 1: A1 Complete"
    **[A1: Engine Compartment Monitor](../assessments/index.md)** (Due Week 4)
    - Sensor integration and real-time monitoring
    - Maps to ICTIOT502 Device 1 Condition 1
    - **Weighting:** 15% of portfolio

!!! warning "Assessment Point 2: A2 Complete"
    **[A2: Operator Cabin Safety System](../assessments/index.md)** (Due Week 6)
    - Access control and safety mechanisms
    - Maps to ICTIOT502 Device 1 Condition 2
    - **Weighting:** 15% of portfolio

!!! warning "Assessment Point 3: A3 Complete"
    **[A3: Tire & Suspension Health Monitor](../assessments/index.md)** (Due Week 8)
    - Sensor fusion and predictive analytics
    - Maps to ICTIOT503 Device 1
    - **Weighting:** 15% of portfolio

!!! warning "Assessment Point 4: A4-A5 Complete"
    **[A4: Payload & Load Management](../assessments/index.md)** (Due Week 9)
    - Hardware integration and system testing
    - Maps to ICTIOT503 Device 2
    - **[A5: Haul Road Environmental Monitor](../assessments/index.md)** (Due Week 9)
    - Complete sensor suite and environmental data
    - Maps to Integration Requirements
    - **Weighting:** 20% of portfolio (combined A3-A5)

---

### Phase 2: AWS IoT Foundations (Weeks 10–14)

| Week | Session Title | Hardware | Key Content | Learning Resources* | Out-of-Class Activities* | Cloud Progress | Hours |
|------|---------------|----------|-------------|-------------------|-------------------------|----------------|-------|
| **[Week 10](../aws/10.md)** **(4hrs)** | AWS IoT Core & Secure Connection | Real ESP32 | AWS IoT Core basics, device registration, secure MQTT connection | AWS Skill Builder: Getting Started (35 min) + Securely Connecting (1 h) | Complete AWS training courses, set up device certificates | Register truck → MQTT publish DHT11/gas data | 4 |
| **[Week 11](../aws/11.md)** **(4hrs)** | Device Data, Rules & Shadows | Real ESP32 | Device Shadow, IoT Rules Engine, SNS notifications | AWS Skill Builder: Handling AWS IoT Device Data (2 h) | Implement device shadows, create data processing rules | Device Shadow for engine temp & cabin lock | 4 |
| **[Week 12](../aws/12.md)** **(4hrs)** | Fleet Management & OTA | Real ESP32 | Thing Groups, fleet management, OTA updates | AWS Skill Builder: Managing Devices at Scale (3.5 h) + OTA Updates (1 h) | Configure thing groups, test firmware updates | Thing Groups, OTA firmware deployment | 4 |
| **[Week 13](../aws/13.md)** **(4hrs)** | Edge Processing & Industrial | Real ESP32 | AWS IoT Greengrass, edge computing, local processing | AWS Lab: Deploying Greengrass Components (1 h) | Deploy Greengrass components, implement edge logic | Greengrass core with local anomaly detection | 4 |
| **[Week 14](../aws/14.md)** **(4hrs)** | Analytics & Visualization | Real ESP32 | AWS IoT SiteWise, QuickSight dashboards, insights | AWS Skill Builder: Analytics & Visualization (45 m) + Manufacturing (45 m) | Build analytics models, create dashboard visualizations | SiteWise asset model "RockCore-Truck-01", QuickSight dashboard | 4 |

!!! warning "Assessment Point 5: A5b Complete - Analytics Phase"
    **[A5b: Cloud Analytics & Visualization](../assessments/index.md)** (Due Week 14)
    - AWS platform integration and dashboard development
    - Integrates all prior electronics assessments (A1-A4) with cloud data
    - **Weighting:** 15% of portfolio

---

### Phase 3: Capstone Integration (Weeks 15–18)

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
    - **Weighting:** 20% of portfolio

---

## Assessment Summary

| Assessment | Focus Area | Due Week | Unit Coverage | Weighting | Status |
|-----------|-----------|----------|---------------|-----------|--------|
| **A1** | Engine Compartment Monitor | 4 | ICTIOT502 Device 1 Cond 1 | 15% | Physical Computing |
| **A2** | Operator Cabin Safety System | 6 | ICTIOT502 Device 1 Cond 2 | 15% | Physical Computing |
| **A3** | Tire & Suspension Health Monitor | 8 | ICTIOT503 Device 1 | 15% | Physical Computing |
| **A4** | Payload & Load Management | 9 | ICTIOT503 Device 2 | Integration | Physical Computing |
| **A5** | Environmental Monitor + Cloud Analytics | 14 | Integration + Cloud | 15% | Cloud Integration |
| **A6** | Capstone Fleet System | 18 | All Units | 25% | Full Integration |

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
| 13 | ETL at the Edge | 1 h | NMTAFE Sandbox (instructor adds you) |
| 13 | Lab – Deploying AWS IoT Greengrass Components | 1 h | AWS Free Lab (free) |
| 14 | Analyzing, Visualizing, and Gaining Insights from IoT Devices | 45 min | AWS Skill Builder (free) |
| 14 | Connecting Systems and Machines to AWS for Industrial Manufacturing | 45 min | AWS Skill Builder (free) |
| 15–17 | AWS Industry Quest: Manufacturing and Automotive | 13 h | NMTAFE Sandbox (instructor adds you) |

**Total: ~27 hours of AWS training (Weeks 10–17)**

---

## Quick Navigation

- **[Scenario](../scenario.md)** - RockCore mining haul truck context
- **[Assessment Information](../assessments/index.md)** - A1-A6 structure and deliverables
- **[AWS Training Resources](../resources/aws-training.md)** - Detailed course descriptions and enrollment links
- **[3D Print Files](../prints.md)** – Physical truck design
- **[Troubleshooting](../resources/troubleshooting-resources.md)** – Common issues and solutions

---

*\* Learning Resources and Out-of-Class Activities detailed in individual session pages*

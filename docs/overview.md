# Course Overview

This page provides a week-by-week timeline for the entire IoT course, including electronics, AWS, and capstone phases. Use this as your main reference for session topics, hardware focus, and assessment deadlines.

## Portfolio Setup

**Before Week 1:** Create your portfolio using the [IoT Portfolio Template](https://github.com/your-institution/iot-portfolio-template). Click "Use this template" to create your own independent copy. This is where you'll commit all code for A1–A6.

Each assessment folder contains a pre-filled submission template. When submitting each assessment:
1. Complete your code and push to GitHub
2. Fill out the assessment submission template (located in the assessment folder)
3. Copy completed form to Blackboard for timestamping

See [Assessment Submission Process](assessments/index.md) for details.

---

## AWS Courses – Student Checklist (Weeks 10–17)

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

📌 **Note:** See [AWS Training Resources](resources/aws-training.md) for detailed course descriptions and enrollment links.

---

## 18-Week Timeline

| Week | Session Title | Simulator / Hardware | Key Content | Truck Progress | Assessment |
|------|---------------|----------------------|-------------|----------------|------------|
| 1 | L1–L3: Voltage, Current, Ohm's Law | Tinkercad Circuits | PhysComp Electronics basics, build series circuit with current measurement | — | — |
| 2 | L4–L7: Resistors, LEDs, Breadboards | Wokwi | LED on, blink, serial, fade, RGB | Front panel RGB status | — |
| 3 | Advanced Output + Buttons | Wokwi (ESP32) | Fade PWM, RGB crossfade, buttons, debouncing | Front panel alerts, chassis assembly begins | A1 start |
| 4 | Analog Input + Sensors | Wokwi → Real ESP32 | DHT11, MQ-2, flame sensor | Front panel sensors | A1 complete |
| 5 | I²C + Actuators | Real ESP32 | OLED, GY-521, servo sweep | Base + Back panels | A3 & A4 start |
| 6 | RFID, RTC, Touch | Real ESP32 | PhysComp ESP32 Lesson 6–7 (touch + IoT intro) | Left panel access system | A2 complete |
| 7 | Environmental + Tones | Real ESP32 | Rain, dust, buzzer tones | Roof panel | A5 complete |
| 8 | Signal Processing & Vibration | Real ESP32 | PhysComp Signals – filtering, anomaly detection | Base panel predictive algo | A3 complete |
| 9 | Full Truck Assembly & Testing | Real ESP32 | Inter-panel I²C, fault testing, final debug | Complete physical truck | A4 & A5 finalised |
| 10 | AWS IoT Core & Secure Connection | Real ESP32 | Foundations: Getting Started + Securely Connecting (1.5 h) | Register truck → MQTT publish real DHT11/gas | — |
| 11 | Device Data, Rules & Shadows | Real ESP32 | Handling AWS IoT Device Data and States (2 h) | Device Shadow for engine temp & cabin lock; IoT Rule → SNS | — |
| 12 | Fleet Management & OTA | Real ESP32 | Managing AWS IoT Devices at Scale (3.5 h) + OTA Updates in Edge Devices (1 h) | Thing Groups, OTA firmware to change vibration threshold | — |
| 13 | Edge Processing & Industrial | Real ESP32 | ETL at the Edge (1 h) + Lab – Deploying AWS IoT Greengrass Components (1 h) | Greengrass core on one ESP32, local anomaly detection component | — |
| 14 | Analytics & Visualization | Real ESP32 | Analyzing, Visualizing, and Gaining Insights from IoT Devices (45 m) + Connecting Systems and Machines to AWS for Industrial Manufacturing (45 m) | SiteWise asset model "RockCore-Truck-01", QuickSight dashboard | **A5 & A5b** |
| 15 | AWS Industry Quest: Mfg & Automotive (1/3) | Real ESP32 + Pit Station | AWS Industry Quest: Manufacturing and Automotive — digital twins, edge-to-cloud, predictive maintenance (13 h split over 3 weeks) | Build digital twin of 3D-printed truck in TwinMaker | — |
| 16 | AWS Industry Quest: Mfg & Automotive (2/3) | Real ESP32 + Pit Station | AWS Industry Quest continued: overlay live sensor data, fleet simulation, vehicle telemetry | Digital twin with live telemetry from truck | — |
| 17 | AWS Industry Quest: Mfg & Automotive (3/3) | Real ESP32 + Pit Station | AWS Industry Quest continued: complete manufacturing labs, integrate with capstone | Digital twin fully integrated with IoT sensors | — |
| 18 | Capstone: Demo & Final Submission | Real ESP32 + Pit Station | Live/recorded demo + portfolio mapping to every performance criterion + 5-minute video of full system + digital twin | Final zip upload with digital twin integration | A6 complete |

---

**Return to:** [Home](index.md)

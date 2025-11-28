# Capstone: Demo & Final Submission

**Week:** 18  
**Element:** Assessment 6 Complete Submission  
**Phase:** Capstone Finalization

---

## Overview

Week 18 is for polishing your work, recording your final demo, and submitting the complete portfolio. This page guides you through the submission checklist and performance criteria mapping.

## Final Demo Video Requirements

**Duration:** 5-7 minutes (strict maximum)

**Structure:**

**0:00-0:30 Introduction**
- Your name, student ID
- "RockCore Mining Haul Truck Fleet Monitor - Assessment 6"
- Quick overview of system components

**0:30-2:00 Normal Operation Demo**
- Show truck with all sensors working
- OLED displaying normal status
- Pit station showing fleet summary
- AWS QuickSight dashboard (or console if QuickSight not completed)

**2:00-4:30 Fault Scenario Demonstrations (3 scenarios)**
- Scenario 1: Engine overheat (1 minute)
  - Trigger fault
  - Show truck response, pit station alert, SMS received
- Scenario 2: Unauthorized access (45 seconds)
  - Show RFID rejection, security alert
- Scenario 3: Vibration anomaly (45 seconds)
  - Show predictive maintenance alert

**4:30-5:30 AWS Integration**
- Show Device Shadow in console
- Show IoT Rule routing data
- Show CloudWatch metrics or SiteWise dashboard

**5:30-End Conclusion**
- Briefly mention how system maps to RockCore requirements
- Thank you

**Production Tips:**
- Use screen recording software (OBS, Zoom) for AWS console
- Edit together truck footage + screen recording
- Add timestamps in corner
- Clear audio narration (use microphone if possible)

---

## Complete Submission Checklist

### 1. Code Repository (GitHub)

**Required Files:**
```
rockcore-iot-fleet/
├── README.md                     (Project overview)
├── truck/
│   ├── truck_complete.ino        (Main truck code)
│   ├── secrets_template.h        (Example without real keys)
│   └── libraries.txt             (List of required libraries)
├── pit_station/
│   ├── pit_station.ino
│   └── secrets_template.h
├── aws/
│   ├── iot_policies/
│   │   └── RockCoreTruckPolicy.json
│   ├── iot_rules/
│   │   └── temp_alert_rule.sql
│   └── cloudwatch_alarms/
│       └── vibration_alarm.json
├── docs/
│   ├── architecture.md
│   ├── test_report.md
│   └── performance_criteria_mapping.md
└── media/
    ├── demo_video.mp4
    ├── wiring_diagrams/
    └── test_screenshots/
```

### 2. Portfolio Document (PDF)

**Sections:**

**Title Page**
- Your name, student ID, course code
- "RockCore Mining Fleet Monitor - Assessment 6"
- Submission date

**Table of Contents**

**Executive Summary** (1 page)
- Project overview
- Key achievements
- How it solves RockCore's business problem

**System Architecture** (2-3 pages)
- Complete architecture diagram
- Component descriptions
- Data flow explanation

**Device 1: Haul Truck** (3-4 pages)
- Hardware list (assessments 1-5 integrated)
- Code overview with key functions explained
- Photos of physical build

**Device 2: Pit Station** (2-3 pages)
- Hardware list
- Code overview
- Photos of build

**AWS Integration** (3-4 pages)
- IoT Core setup (Thing, certificates, policies)
- Device Shadows configuration
- IoT Rules and actions
- CloudWatch alarms
- SiteWise/QuickSight dashboard (if implemented)
- Screenshots of all AWS components

**Testing & Results** (4-6 pages)
- Test scenarios (3 minimum)
- Results with timestamps and screenshots
- Performance measurements (latency, bandwidth)
- Fault rectification log

**Performance Criteria Mapping** (2-3 pages)
- Table mapping every criterion to evidence

**Reflection** (1-2 pages)
- Design decisions and trade-offs
- Challenges encountered and solutions
- What you would improve
- Learning outcomes

**Appendices**
- Full code listings (if not in GitHub)
- Datasheets
- Additional screenshots

**Total Length:** 20-30 pages recommended

### 3. Performance Criteria Mapping Table

**Example format:**

| Unit | Element | Performance Criteria | Evidence Location |
|------|---------|---------------------|-------------------|
| ICTIOT502 | 1.1 | Identify business IoT requirements | Portfolio p.5: RockCore requirements analysis |
| ICTIOT502 | 1.2 | Determine device compatibility | Portfolio p.8: ESP32 capability assessment |
| ICTIOT502 | 1.3 | Select device and platform | Portfolio p.9: ESP32 + AWS selection justification |
| ICTIOT502 | 2.1 | Program device code | GitHub: truck_complete.ino + pit_station.ino |
| ICTIOT502 | 2.2 | Test IoT device code | Portfolio p.18-23: Test scenarios and results |
| ICTIOT502 | 2.3 | Rectify faults | Portfolio p.24: Fault rectification log |
| ICTIOT503 | 1.1 | Scope design requirements | Portfolio p.12: System requirements |
| ICTIOT503 | 1.2 | Identify constraints | Portfolio p.13: Technical and cost constraints |
| ICTIOT503 | 2.1 | Evaluate design options | Portfolio p.14: Servo vs stepper evaluation (A4) |
| ICTIOT503 | 2.2 | Evaluate resources | Portfolio p.15: AWS service selection |
| ICTIOT503 | 3.1 | Develop design documentation | Portfolio p.16-17: Architecture diagrams |
| ICTIOT503 | 3.2 | Document connectivity | Portfolio p.28: MQTT topic structure |
| ICTIOT503 | 3.3 | Document compatibility | Portfolio p.29: I²C bus, GPIO usage |
| ICTIOT503 | 4.1 | Test connectivity | Portfolio p.20: Offline resilience test |
| ICTIOT503 | 4.2 | Test compatibility | Portfolio p.21: Multi-sensor integration test |

*Continue for ALL performance criteria*

---

## Submission Instructions

**Due:** End of Week 18 (check Blackboard for exact date/time)

**Submit to:**
1. **GitHub** (or zip file if GitHub not accessible):
   - All code
   - Documentation
   - Media files

2. **Blackboard**:
   - Portfolio PDF
   - Demo video (upload or YouTube/Vimeo link)
   - Performance criteria mapping table (separate Excel/PDF)

**File naming:**
- `StudentID_Surname_A6_Portfolio.pdf`
- `StudentID_Surname_A6_Demo.mp4`
- `StudentID_Surname_A6_Code.zip`

---

## Grading Rubric Overview

| Criterion | Weight | HD (85-100%) | D (75-84%) | C (65-74%) | P (50-64%) | F (<50%) |
|-----------|--------|--------------|------------|------------|------------|----------|
| Device 1 Programming | 20% | All sensors integrated, robust error handling | Most sensors working, minor bugs | Basic functionality, some faults | Incomplete integration | Non-functional |
| Device 2 Programming | 15% | Pit station fully functional, real-time updates | Works but limited features | Basic MQTT subscribe only | Incomplete | Non-functional |
| AWS Integration | 25% | Shadows, Rules, CloudWatch, dashboard | Shadows + Rules working | Basic MQTT to IoT Core | Connects but no rules | No AWS |
| Testing & Documentation | 20% | Comprehensive testing, 3+ scenarios, detailed docs | Good testing, complete docs | Basic testing, minimal docs | Incomplete testing | No testing evidence |
| Performance Criteria Mapping | 10% | All criteria clearly mapped with evidence | Most criteria mapped | Some criteria mapped | Minimal mapping | No mapping |
| System Design & Reflection | 10% | Excellent architecture, insightful reflection | Good design, reflection present | Basic design, brief reflection | Minimal design docs | No reflection |

---

## Final Checklist

Before submission, verify:

- [ ] Demo video is 5-7 minutes
- [ ] All 3 fault scenarios shown in video
- [ ] Portfolio document has page numbers and table of contents
- [ ] All screenshots have captions explaining what they show
- [ ] GitHub repo has README with setup instructions
- [ ] `secrets.h` files removed or gitignored (no private keys exposed)
- [ ] Performance criteria mapping table is complete (every criterion)
- [ ] Files named correctly with student ID
- [ ] Submission uploaded to Blackboard before deadline
- [ ] Backup copy saved locally

---

## Post-Submission

After submission:
- Keep your physical truck and pit station assembled for potential demonstration
- Be prepared to answer questions about your design decisions
- Consider presenting at showcase event (if offered)

**Congratulations on completing the RockCore IoT Fleet System!**

---

**Navigation:** [← Testing Scenarios](testing.md) | [Course Overview](../overview.md)

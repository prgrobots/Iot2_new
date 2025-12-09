# Assessment Restructuring - COMPLETE ✅

**Date:** 8 December 2025  
**Status:** Implementation complete

---

## Summary of Changes

The assessment structure has been successfully restructured to include a dedicated **Assessment 5b (QuickSight Analytics Dashboard)**, providing explicit coverage of Week 14 AWS content.

---

## New Assessment Structure

### Before (Old)
| # | Title | Due | Weight | Focus |
|---|-------|-----|--------|-------|
| A5 | AWS IoT Integration & Testing | Week 14 | 20% | All AWS weeks (10-14) |
| A6 | Capstone Fleet System | Week 18 | 35% | Full integration |
| **Total** | | | **55%** | |

### After (New) ✅
| # | Title | Due | Weight | Focus | AWS Weeks |
|---|-------|-----|--------|-------|-----------|
| A5 | AWS IoT Integration & Testing | Week 14 | **18%** | IoT Core, Shadows, Rules, Testing | 10-13 |
| **A5b** | **QuickSight Analytics Dashboard** | **Week 14** | **7%** | Analytics, SiteWise, Visualization | **14** |
| A6 | Capstone Fleet System | Week 18 | **30%** | Full integration, pit station, demo | 15-18 |
| **Total** | | | **100%** | | |

---

## Assessment 5: AWS IoT Integration & Testing (Updated)

### Changes:
- **Scope focused:** Weeks 10-13 (core IoT functionality)
- **Removed:** Analytics/visualization requirements
- **Added:** Explicit offline sync test to submission video

### New A5 Requirements:
- X.509 certificate authentication
- MQTT publish/subscribe
- Device Shadows (desired + reported state)
- IoT Rules for data routing
- SNS alerts
- CloudWatch metrics & alarms
- **Testing documentation:**
  - Test plan (unit, integration, system)
  - Test cases with results
  - Bug log
  - Performance testing (latency, offline sync)

### A5 Deliverables:
- Arduino `.ino` file with MQTT code
- AWS console screenshots
- Testing report (5-10 pages PDF)
- GitHub repository
- **5-minute demo video:**
  - Live MQTT messages
  - Shadow updates
  - SNS alerts received
  - CloudWatch alarms
  - **Offline resilience test** ← NEW

### Weight: 18% (was 20%)

---

## Assessment 5b: QuickSight Analytics Dashboard (NEW)

### Objective:
Create a real-time analytics dashboard for haul truck monitoring using AWS QuickSight and IoT Analytics.

### Due Date:
Week 14 (same week as A5)

### Requirements:

#### Dashboard Design (Mandatory)
**Minimum 3 visualizations:**
1. **Temperature Trend** – Line chart (last 24 hours)
2. **Vibration Status** – Gauge or card (current vs. threshold)
3. **Alerts Summary** – Table (recent alerts with timestamp/severity)

#### Data Integration
- Connect QuickSight to IoT Core via **IoT Analytics pipeline** OR **S3/DynamoDB**
- Live/near-real-time data (≥1 hour historical)
- Auto-refresh every 5-15 minutes

#### SiteWise Asset Model (Optional Bonus)
- Model truck as AWS IoT SiteWise asset
- Configure properties: `engine_temperature`, `vibration_level`, `cabin_lock_state`
- Link to QuickSight dashboard
- **Bonus: +2 points** for complete integration

#### Documentation
- One-page architecture document explaining:
  - Data flow: truck MQTT → IoT Core → Analytics → QuickSight
  - Business value of each visualization
  - How supervisor uses dashboard for maintenance planning

### A5b Deliverables:
- [ ] QuickSight dashboard URL or full-page screenshot
- [ ] Dashboard definition JSON export
- [ ] IoT Analytics pipeline configuration JSON
- [ ] One-page architecture document (PDF)
- [ ] 3-minute video walkthrough:
  - Dashboard with live data
  - Interactive filters/drill-downs
  - Each visualization explained
  - Identifying anomalies from trends
  - (Optional) SiteWise model in AWS console

### Submission:
- Zip file with all deliverables
- Submit to Blackboard "Week 14 – A5b" folder

### Weight: 7% (NEW)

---

## Assessment 6: Capstone Fleet System (Updated)

### Changes:
- **A6 requirements updated:** Now requires A1-**A5b** features (was A1-A5)
- **Weight adjusted:** 30% (was 35%)
- **Analytics focus removed:** A5b now handles analytics
- **A6 focus:** Integration, pit station, multi-truck simulation, demo

### New A6 Statement:
> "Haul truck device with all A1-A5b features (sensors, AWS IoT, analytics)"

### Weight: 30% (was 35%)

---

## Total Assessment Weight Distribution

| Category | Assessments | Weight |
|----------|------------|--------|
| **Electronics** | A1-A4 | 10% + 10% + 10% + 15% = **45%** |
| **AWS Phase** | A5 + A5b | 18% + 7% = **25%** |
| **Capstone** | A6 | **30%** |
| **TOTAL** | | **100%** |

---

## Files Modified

### 1. `docs/assessments/index.md`
✅ Updated assessment schedule table (added A5b row, adjusted weights)
✅ Updated Assessment 5 description (removed analytics, added offline sync test)
✅ **Added Assessment 5b section** (complete with requirements and deliverables)
✅ Updated Assessment 6 requirements (A1-A5b instead of A1-A5)
✅ Updated resubmission policy (added A5-A5b)

### 2. `docs/overview.md`
✅ Fixed corrupted header line
✅ Updated Week 14 assessment column: "— " → "**A5 & A5b**"
✅ Corrected Week 13 content (aligned to authoritative aws_course_content.md)
✅ Corrected Week 14 content (aligned to authoritative aws_course_content.md)

---

## Why This Structure?

### ✅ Advantages:

1. **Complete AWS coverage**
   - Every week 10-14 explicitly assessed
   - Analytics (Week 14) now has dedicated assessment

2. **Clear learning progression**
   - A5: Build & test IoT device functionality
   - A5b: Visualize data from device
   - A6: Scale to fleet + full integration

3. **Manageable scope**
   - A5 focused: IoT Core, Shadows, Rules, Testing
   - A5b focused: Analytics, dashboards, visualization
   - Less cognitive overload than combined 20% assessment

4. **Assessment weight fairness**
   - AWS: 25% (for 5 weeks × 17.5 hours content)
   - Electronics: 45% (for 9 weeks × 31.5 hours content)
   - Capstone: 30% (for 4 weeks × 14 hours content)
   - **Proportional to contact hours**

5. **Capstone simplification**
   - Pit station focus, not analytics
   - A6 = integration + demo, not analytics build
   - Cleaner capstone narrative

---

## Assessment Timeline

| Week | Assessment | Focus | Deliverable Type |
|------|-----------|-------|-----------------|
| 4 | A1 | Sensors | Code + Video |
| 6 | A2 | Access Control | Code + CSV + Video |
| 8 | A3 | Vibration | Code + CSV + Video |
| 9 | A4 | Full Truck | Code + Fritzing + Video |
| **14** | **A5** | **IoT Testing** | **Code + Report + Video** |
| **14** | **A5b** | **Analytics Dashboard** | **Dashboard + Architect + Video** |
| 18 | A6 | Capstone Fleet | Code + Video + Portfolio |

---

## Next Steps (Optional Enhancements)

1. **Create assessment rubric** for A5b (QuickSight dashboard quality criteria)
2. **Prepare QuickSight tutorial** for students (how to set up dashboard)
3. **Prepare IoT Analytics pipeline template** (to help students get started)
4. **Create example A5b submission** (template dashboard for reference)

---

## Verification Checklist

- ✅ Assessment table updated with A5b row
- ✅ A5 requirements refocused (removed analytics)
- ✅ A5b section created (complete requirements)
- ✅ A6 updated to reference A1-A5b
- ✅ Weight distribution: 45% + 25% + 30% = 100%
- ✅ Resubmission policy updated
- ✅ Week 14 timeline shows "A5 & A5b"
- ✅ All AWS content aligned to authoritative source

---

## Summary

**Assessment restructuring is complete and ready for students.**

The new structure provides:
- Dedicated analytics assessment (A5b)
- Clearer learning progression
- Fair weight distribution
- Complete AWS phase coverage
- Simplified capstone focus

**All materials (overview.md, assessments/index.md) are now synchronized and aligned.**

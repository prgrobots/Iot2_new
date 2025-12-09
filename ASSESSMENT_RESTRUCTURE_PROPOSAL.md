# Assessment Restructuring Proposal
**Separating QuickSight Dashboard into Dedicated Assessment**

---

## Current Structure (Before)

| # | Title | Due | Weight | Focus |
|---|-------|-----|--------|-------|
| A5 | AWS IoT Integration & Testing | Week 14 | 20% | IoT Core + Shadows + Rules + Testing |
| A6 | Capstone Fleet System | Week 18 | 35% | Full integration + pit station + demo |

**Problem:** Week 14 (Analytics & Visualization) content not represented

---

## Proposed Structure (After)

| # | Title | Due | Weight | Focus | AWS Weeks |
|---|-------|-----|--------|-------|-----------|
| A5 | AWS IoT Integration & Testing | Week 14 | 18% | IoT Core, Shadows, Rules, SNS, Testing | 10-13 |
| **A5b** | **QuickSight Analytics Dashboard** | **Week 14** | **7%** | **Analytics, SiteWise, Visualization** | **14** |
| A6 | Capstone Fleet System | Week 18 | 35% | Full integration + pit station + demo | 15-18 |

---

## Rationale

### ✅ Advantages:

1. **Clear separation of concerns**
   - A5: Core IoT device functionality + testing rigor
   - A5b: Analytics & visualization (brand new skill)

2. **Week 14 coverage**
   - Students must complete QuickSight dashboard
   - Demonstrates analytics learning from Week 14

3. **Assessment weight balance**
   - A5 reduced from 20% → 18% (still substantial)
   - A5b adds 7% for analytics
   - Total AWS assessments: 25% (fair for 5 weeks of content)

4. **Scaffolding progression**
   - A5: Build/test single truck
   - A5b: Visualize data from single truck
   - A6: Scale to fleet + full integration

5. **Capstone clarity**
   - A6 can focus on pit station + multi-truck simulation
   - Not burdened with analytics requirements

---

## Assessment 5b: QuickSight Analytics Dashboard (NEW)

### Objective
Create a real-time analytics dashboard for haul truck monitoring using AWS QuickSight.

### Due Date
Week 14

### Weight
7%

### Requirements

#### Dashboard Design (Mandatory)
- **Minimum 3 visualizations:**
  1. Temperature Trend (line chart, last 24 hours)
  2. Vibration Status (gauge or card showing current value vs threshold)
  3. Alerts Summary (table or KPI showing recent alerts)

#### Data Source
- Connect to IoT Core telemetry via IoT Analytics pipeline OR S3/DynamoDB backend
- Demonstrate live/near-real-time data (at least 1 hour of historical data)

#### SiteWise Asset Model (Optional Enhancement)
- Model haul truck as SiteWise asset
- Configure properties: engine_temperature, vibration_level, cabin_lock_state
- Link SiteWise to QuickSight dashboard (+2 bonus points)

#### Documentation
- Screenshot of dashboard (PDF or image)
- JSON export of QuickSight dashboard definition
- One-page architecture explaining:
  - Data flow (truck → cloud → analytics)
  - How each visualization answers a business question
  - Why these metrics matter for RockCore mining

### Submission

**Deliverables:**
- [ ] QuickSight dashboard URL (link to live dashboard) OR screenshot
- [ ] Dashboard definition JSON file
- [ ] Data source configuration (IoT Analytics pipeline / S3 bucket details)
- [ ] One-page architecture document (PDF)
- [ ] 3-minute video walkthrough showing:
  - Dashboard opening with live data
  - Interacting with filters/drill-downs
  - Explaining each visualization
  - How to identify anomalies from trends

**Submission Format:**
- Zip file containing all files + links
- Submit to Blackboard Week 14 folder

---

## Updated Total Assessment Structure

| # | Title | Due | Weight | Unit Elements |
|---|-------|-----|--------|---------------|
| A1 | Engine Compartment Monitor | Week 4 | 10% | 502: 1.1-1.4, 2.4, 3.2 |
| A2 | Operator Cabin Safety System | Week 6 | 10% | 502: 2.2, 3.1, 3.3 |
| A3 | Tire & Suspension Health Monitor | Week 8 | 10% | 503: 1.1-1.5 |
| A4 | Payload & Load Management | Week 9 | 15% | 503: Device 2 |
| **A5** | **AWS IoT Integration & Testing** | **Week 14** | **18%** | **503: 1.1-2.4 (IoT)** |
| **A5b** | **QuickSight Analytics Dashboard** | **Week 14** | **7%** | **503: 2.4 (Analytics)** |
| A6 | Capstone Fleet System | Week 18 | 30% | 503: 3.1-3.3 (all) |
| **TOTAL** | | | **100%** | |

**Changes:**
- A5: 20% → 18% (shift analytics focus to new A5b)
- A5b: NEW 7% (QuickSight analytics)
- A6: 35% → 30% (no longer needs to cover analytics)

---

## Alternative: Rename to A5 & A5.5

Instead of A5 / A5b, could be:
- **A5** = AWS IoT Core (weeks 10-11) → Week 12
- **A5.5** = AWS Analytics & Visualization (weeks 12-14) → Week 14
- **A6** = Capstone (weeks 15-18) → Week 18

But this creates awkward numbering. Better to keep A5 / A5b or A5a / A5b.

---

## Implementation

### Files to Update:
1. `docs/assessments/index.md` 
   - Update A5 (reduce scope, remove analytics)
   - Add NEW A5b section
   - Update total weights/table

2. `docs/overview.md`
   - Update "Assessment" column for Week 14
   - Change from "A5 complete" to "A5 & A5b complete"

3. (Optional) `docs/aws/14.md`
   - Reference A5b QuickSight requirements in learning outcomes

---

## Questions for Review

1. **Should A5b be due Week 14 or Week 15?**
   - Week 14 = more challenging, students learn analytics quickly
   - Week 15 = smoother, gives extra time for Capstone prep

2. **Should A5b include SiteWise or keep optional?**
   - Mandatory = comprehensive, but harder
   - Optional = achievable, bonus for overachievers

3. **Weight distribution - is 18% + 7% fair for AWS phase?**
   - Total AWS assessments: 25%
   - Electronics: 35% (A1-A4)
   - Capstone: 30% (A6)
   - Remaining: 10%

---

## Decision

✅ **Recommend:** Implement as proposed
- A5 (18%): IoT Integration & Testing (weeks 10-13)
- A5b (7%): QuickSight Analytics Dashboard (week 14)
- A6 (30%): Capstone Fleet System (weeks 15-18)

This structure:
1. Covers all AWS weeks explicitly
2. Motivates students to learn analytics
3. Creates natural progression
4. Keeps assessment focus sharp

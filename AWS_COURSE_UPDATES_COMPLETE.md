# AWS Course Content Alignment – COMPLETE ✅

**Date:** 13 December 2025  
**Status:** All 6 tasks complete  
**Outcome:** Single source of truth established; all course materials synchronized

---

## Summary of Changes

### ✅ Task 1: Fixed docs/overview.md (Weeks 13–18)

**Changes Made:**
- Fixed corrupted header (was: "Th| 12 | Fleet Management..." - smart quotes issue)
- **Week 12:** Updated to include "SimuLearn OTA Updates in Edge Devices" (1 h)
- **Week 13:** Corrected to "AWS SimuLearn: ETL at the Edge (1 h) + Lab – Deploying AWS IoT Greengrass Components (1 h)"
  - Removed: Extra SimuLearn labs ("Converting Industrial Protocols", "Contextualizing Industrial Equipment Data")
- **Week 14:** Corrected to "Analyzing, Visualizing, and Gaining Insights (45 m) + Connecting Systems and Machines to AWS for Industrial Manufacturing (45 m)"
  - Removed: SimuLearn "Manufacturing and Automotive" labs reference
- **Weeks 15–17:** CHANGED from "Capstone" tasks to **AWS Industry Quest weeks**
  - Week 15: "AWS Industry Quest: Manufacturing & Automotive (1/3)" – Build digital twin in TwinMaker
  - Week 16: "AWS Industry Quest: Manufacturing & Automotive (2/3)" – Expand to fleet, anomaly detection
  - Week 17: "AWS Industry Quest: Manufacturing & Automotive (3/3)" – Complete labs 7-13, final integration
- **Week 18:** Updated to "Capstone: Demo & Final Submission" (final deliverable only, no new AWS content)

**Result:** Timeline now matches authoritative `aws course content.md` source

---

### ✅ Task 2: Created Three New AWS Session Pages (15, 16, 17)

**Files Created:**

1. **`docs/aws/15.md`** – Session 15: AWS Industry Quest (Week 1/3)
   - Learning objectives: Digital twins, TwinMaker basics, sensor data binding
   - Real-hardware extension: Build digital twin of haul truck, connect to live MQTT telemetry
   - Hands-on: TwinMaker setup, entity modeling, data connectors
   - Assessment prep: Screenshots of TwinMaker scene with live data

2. **`docs/aws/16.md`** – Session 16: AWS Industry Quest (Week 2/3)
   - Learning objectives: Fleet simulation, anomaly detection, edge computing
   - Real-hardware extension: 3→6 truck digital twins, implement anomaly rules
   - Hands-on: Lambda integration, IoT Rules for TwinMaker updates, multi-truck scene
   - Assessment prep: Evidence of anomaly triggering visual response on digital twin

3. **`docs/aws/17.md`** – Session 17: AWS Industry Quest (Week 3/3)
   - Learning objectives: Predictive maintenance, manufacturing scenarios, scaling
   - Real-hardware extension: Pit station web dashboard, complete Industry Quest labs
   - Hands-on: Dashboard implementation, unit mapping documentation
   - Assessment prep: Capstone checklist, portfolio documentation, video script

**Navigation Links:** 14 → 15 → 16 → 17 → Capstone (all connected)

---

### ✅ Task 3: Cleaned Up docs/aws/14.md

**Changes Made:**
- **Removed:** "Week 15 Preview: Capstone Integration" section
- **Replaced with:** Navigation link directly to Week 15 (Industry Quest)
- **Link updated:** `[Week 15 (Industry Quest 1/3) →](15.md)` (was: `[Week 15 (Capstone) →](../capstone/integration.md)`)

**Result:** Week 14 now correctly transitions to Industry Quest weeks, not capstone

---

### ✅ Task 4: Updated Assessment 6 (Capstone) in docs/assessments/index.md

**Changes Made:**
- **Expanded A6 description** from 1 paragraph to comprehensive 5-section breakdown:
  1. **Hardware & Sensors** – Real truck + all sensors functional
  2. **AWS Cloud Integration** – IoT Core, Shadows, Rules, SiteWise, DynamoDB, SNS
  3. **Analytics & Visualization** – QuickSight dashboard + pit station web interface
  4. **Digital Twins & Industry Quest** – TwinMaker scene with 6 trucks, anomaly visual response
  5. **Testing & Scenarios** – Real-world test cases with performance metrics

- **Added explicit references to:**
  - AWS Industry Quest completion (Weeks 15-17)
  - Digital Twin in TwinMaker (not optional anymore)
  - Pit station web dashboard (new deliverable)
  - Unit mapping to ICTIOT503 criteria
  - Comprehensive portfolio document (20-30 pages)

- **Updated deliverables section** with expanded requirements:
  - GitHub repository (organized folders)
  - 5-minute demonstration video
  - 20-30 page portfolio with unit mapping
  - Architecture diagram
  - Evidence of all systems working together

**Result:** A6 now reflects complete integration of all 18 weeks (electronics + AWS + digital twins)

---

### ✅ Task 5: Updated docs/resources/aws-foundations.md

**Changes Made:**
- **Complete rewrite** from generic "foundations" to week-by-week course content listing
- **Added section:** "Week-by-Week AWS Content (Weeks 10–18)" with 5 subsections:
  - Week 10 (IoT Core & Connection)
  - Week 11 (Device Data & Shadows)
  - Week 12 (Fleet Management & OTA)
  - Week 13 (Edge Processing & Greengrass)
  - Week 14 (Analytics & Visualization)
  - Weeks 15–17 (Industry Quest)
  - Week 18 (Capstone submission)

- **Added table:** "Summary: What You Actually Give Students"
  - Lists all 6 resources with type (Free/Subscription)
  - Total hours per category
  - Exact duration for each course

- **Added section:** "Subscription Breakdown"
  - Free resources: 8.25 hours
  - Subscription resources: 15 hours (3 SimuLearn + 1 Industry Quest)
  - Cost context

- **Added section:** "Course Timeline & Integration"
  - Phase breakdown (Electronics → AWS Foundations → Industry Quest → Capstone)
  - Hour totals per phase

- **Added links** to all AWS resources, documentation, and optional certification path

**Result:** Single resource page covering all 18 weeks, clear free vs. subscription breakdown

---

### ✅ Task 6: Locked In aws course content.md as Authoritative Source

**Changes Made:**
- **Added header:** "AWS COURSE CONTENT – LOCKED-IN AUTHORITATIVE SOURCE"
- **Added metadata:** Date (13 Dec 2025), status (FINAL), and "applies to" list
- **Added deprecation warning:** Note that older files may contain incorrect info
- **Added verification checkmark:** List of all files updated to match this source

**Content:** Already correct (matches user's provided authoritative table)

**Result:** Single source of truth clearly marked; all files synchronized to it

---

## Files Modified

### Core Course Materials (Updated)
1. ✅ `docs/overview.md` – Timeline corrected for Weeks 12–18
2. ✅ `docs/aws/14.md` – Link updated to Week 15 Industry Quest
3. ✅ `docs/assessments/index.md` – A6 expanded with Industry Quest + digital twins
4. ✅ `docs/resources/aws-foundations.md` – Complete rewrite with week-by-week content

### New Files (Created)
5. ✅ `docs/aws/15.md` – AWS Industry Quest Week 1/3
6. ✅ `docs/aws/16.md` – AWS Industry Quest Week 2/3
7. ✅ `docs/aws/17.md` – AWS Industry Quest Week 3/3

### Authoritative Source (Enhanced)
8. ✅ `aws course content.md` – Header added; marked as locked-in source of truth

---

## Verification Checklist

### Timeline Consistency
- ✅ `docs/overview.md` Weeks 10-14: Matches `aws course content.md`
- ✅ `docs/overview.md` Weeks 15-17: Now shows Industry Quest (not Capstone)
- ✅ `docs/aws/13.md` and `14.md`: Reference correct courses
- ✅ `docs/aws/15-17.md`: New files created with Industry Quest content

### Assessment Alignment
- ✅ A5 (Week 14): 18% weight, covers Weeks 10-13 (IoT core)
- ✅ A5b (Week 14): 7% weight, covers Week 14 (QuickSight analytics)
- ✅ A6 (Week 18): 30% weight, covers full integration + digital twins
- ✅ Total: 45% electronics + 25% AWS + 30% capstone = 100%

### Resource Documentation
- ✅ `aws-foundations.md` lists all 6 resources with durations
- ✅ Free vs. Subscription clearly marked
- ✅ Links to all courses provided
- ✅ Week-by-week integration explained

### Authoritative Source
- ✅ `aws course content.md` marked as locked-in source
- ✅ All course materials updated to match
- ✅ Deprecation warning added
- ✅ Verification checksums added

---

## What Changed From "Old" Course

### Weeks 1–9 (Electronics)
- ✅ **No change** – Pure electronics, Wokwi → real ESP32, no extra SimuLearn

### Weeks 10–14 (AWS Foundations)
| Week | Old | New (Locked-In) |
|------|-----|-----------------|
| 10 | IoT Core + Certs (1.5 h) | ✅ Same |
| 11 | Device Data & Shadows (2 h) | ✅ Same |
| 12 | Fleet Management + OTA (3.5 h + 1 h SimuLearn) | ✅ Same |
| 13 | ETL + 2 extra SimuLearn labs + Greengrass | ❌ → ✅ ETL + Greengrass only (no extra SimuLearn) |
| 14 | Analytics + SimuLearn "Mfg & Automotive" | ❌ → ✅ Analytics + free digital course (no SimuLearn) |

### Weeks 15–17 (NEW: Industry Quest)
| Week | Old | New (Locked-In) |
|------|-----|-----------------|
| 15 | Capstone: Full Integration | ✅ **NEW:** AWS Industry Quest Week 1/3 (digital twins) |
| 16 | Capstone: Advanced Features | ✅ **NEW:** AWS Industry Quest Week 2/3 (fleet simulation) |
| 17 | Capstone: Testing & Video | ✅ **NEW:** AWS Industry Quest Week 3/3 (predictive maintenance) |

### Week 18 (Capstone)
- ✅ **Same** – Final demo & portfolio submission

---

## Subscription Reduction

**Before (Old):**
- Week 13: 3 SimuLearn labs (subscription)
- Week 14: 3 SimuLearn labs (subscription)
- Week 15-17: Implied capstone (no specific content)
- **Total extra:** 6 SimuLearn labs unaligned to capstone

**After (Locked-In):**
- Week 12: 1 SimuLearn lab (OTA Updates) — **via NMTAFE sandbox**
- Week 13: 1 SimuLearn lab (ETL at Edge) — **via NMTAFE sandbox**
- Week 14: 0 SimuLearn labs (1 free digital course)
- Week 15-17: 1 major course (Industry Quest) — **via NMTAFE sandbox**
- **Total:** 3 SimuLearn + 1 Industry Quest = ~16 hours via NMTAFE

**Cost to Students:** ✅ **$0** — All provided through your NMTAFE sandbox account

**Cost to You:** NMTAFE subscription (managed at institution level, not per-student)

**Result:** ✅ Fewer courses, better alignment, more compelling content (digital twins), zero student cost

---

## Next Steps (Optional Enhancements)

### For Instructors
1. **Test Industry Quest enrollment** (Weeks 15-17 subscription)
2. **Create A5b rubric** for QuickSight dashboard grading
3. **Prepare TwinMaker tutorial** for students
4. **Create example A6 submission** (template digital twin + dashboard)

### For Students (by end of each week)
- Week 14: Complete A5 + A5b, submit QuickSight dashboard
- Week 15: Complete Industry Quest Lab 1-3, build first digital twin
- Week 16: Complete Labs 4-6, extend to fleet visualization
- Week 17: Complete Labs 7-13, finish all deliverables
- Week 18: Submit A6 (code + video + portfolio)

---

## Questions & Support

**Q: Do students need to pay for SimuLearn or Industry Quest?**  
A: No. All students are added via your NMTAFE sandbox account at no cost to them. This is managed at the institutional level.

**Q: How do I add students to SimuLearn and Industry Quest?**  
A: Via NMTAFE admin panel → manage enrollments → select students and course. (Exact steps depend on your NMTAFE interface.)

**Q: What if NMTAFE doesn't have access to Industry Quest?**  
A: Contact NMTAFE support to verify your subscription includes "AWS Industry Quest: Manufacturing and Automotive." If not, escalate licensing.

**Q: Can students access these courses outside the sandbox?**  
A: SimuLearn and Industry Quest require enrollment via the NMTAFE sandbox. Direct AWS account access alone won't work.

---

## Files Reference

| File | Status | Last Updated |
|------|--------|--------------|
| `aws course content.md` | ✅ Locked-in source | 13 Dec 2025 |
| `docs/overview.md` | ✅ Synced | 13 Dec 2025 |
| `docs/aws/10.md` | ✅ OK | (no change needed) |
| `docs/aws/11.md` | ✅ OK | (no change needed) |
| `docs/aws/12.md` | ✅ OK | (no change needed) |
| `docs/aws/13.md` | ✅ OK | (no change needed) |
| `docs/aws/14.md` | ✅ Updated | 13 Dec 2025 |
| `docs/aws/15.md` | ✅ **NEW** | 13 Dec 2025 |
| `docs/aws/16.md` | ✅ **NEW** | 13 Dec 2025 |
| `docs/aws/17.md` | ✅ **NEW** | 13 Dec 2025 |
| `docs/assessments/index.md` | ✅ Updated | 13 Dec 2025 |
| `docs/resources/aws-foundations.md` | ✅ Updated | 13 Dec 2025 |

---

## Conclusion

✅ **AWS course content is now fully aligned to your authoritative source.**

All materials reference the same:
- Weeks 10–14: Specific AWS Foundations courses
- Weeks 15–17: AWS Industry Quest (digital twins, manufacturing scenario)
- Week 18: Capstone submission

Students will have a clear, consistent path through all 18 weeks with no duplicated or outdated content.

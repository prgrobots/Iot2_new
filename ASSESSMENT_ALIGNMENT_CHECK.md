# Assessment Alignment Check vs. AWS Course Content

**Date:** 8 December 2025

---

## Assessment 5 Analysis (Due Week 14)

### Current Description:
- **Title:** AWS IoT Integration & Testing
- **Due:** Week 14
- **Weight:** 20%
- **Scope:** AWS IoT Core, Device Shadows, Rules, SNS, CloudWatch, Testing

### AWS Course Weeks 10-14 Mapping:

| Week | Topic | A5 Coverage |
|------|-------|-----------|
| 10 | AWS IoT Core + Certificates | ✅ "X.509 certificate authentication" |
| 11 | Device Data, Rules, Shadows | ✅ "Device Shadow" + "IoT Rules sending SNS alerts" |
| 12 | Fleet Management + OTA | ⚠️ Not explicitly mentioned |
| 13 | Edge Processing + Greengrass | ⚠️ Not mentioned |
| 14 | Analytics & Visualization | ⚠️ Not mentioned |

---

## Issues Found:

### ❌ Issue 1: Missing Analytics/Visualization Content
- **Week 14** is "Analytics & Visualization" (SiteWise, QuickSight, IoT Analytics)
- **A5 requirements** don't mention QuickSight dashboard or SiteWise models
- This is a gap - A5 should demonstrate Week 14 content

### ❌ Issue 2: No Fleet Management Content
- **Week 12** covers "Managing Devices at Scale" + OTA Updates
- **A5 requirements** don't mention Thing Groups, OTA, or fleet operations
- However, this might be intentional (testing focus on single truck)

### ❌ Issue 3: No Edge Processing Content  
- **Week 13** covers Greengrass + ETL at Edge
- **A5 requirements** don't mention edge computing or local processing
- Greengrass deployment might be too advanced for a student assessment

### ✅ Issue 4: Testing Focus is Good
- **A5 emphasizes testing** per ICTIOT503 requirements
- This aligns with course structure and assessment weights

---

## Recommendation:

**UPDATE Assessment 5 to include:**

1. **Add QuickSight Dashboard requirement:**
   - Create a dashboard showing truck telemetry
   - Display temperature trend, vibration metrics
   - Include alarm/alert visualization

2. **Optionally add SiteWise asset model:**
   - Model haul truck as SiteWise asset
   - Configure properties (engine temp, vibration, lock state)
   - Link to IoT Core data

3. **Keep testing focus** (already good)

---

## Files to Update:

- ✅ `docs/assessments/index.md` - Assessment 5 description
- ✅ Consider: `docs/assessments/index.md` - Any reference to Week 14 content

---

## Proposed Changes:

### Assessment 5 - Add to Requirements:

```markdown
### AWS Analytics & Visualization (NEW)
- QuickSight dashboard with at least 2 visualizations:
  - Temperature trend (last 24 hours, line chart)
  - Vibration status (current value + threshold, gauge or card)
- Optional: SiteWise asset model for haul truck

### Submission (ADD):
- QuickSight dashboard URL or screenshot
- SiteWise asset model JSON (if included)
```

---

## Decision Point:

**Should Assessment 5 be expanded to include Week 14 analytics content?**

Option A (Minimal - Keep Current):
- Focus on core IoT (10-13) + testing
- Simpler for students
- Assessment weight: 20%

Option B (Comprehensive - Add Analytics):
- Include Week 14 analytics & visualization
- Demonstrates full AWS learning journey
- Assessment weight: 20% (same, but more demanding)

**Recommendation:** Option B - Add analytics to make A5 a true capstone of AWS phase

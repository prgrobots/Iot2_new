# AWS Course Content Alignment Summary

**Date:** 8 December 2025  
**Status:** ✅ Complete

---

## Overview

All AWS course materials have been aligned to the authoritative source: **`aws_course_content.md`**

The following files were updated to match the preferred curriculum:

---

## Changes Made

### 1. **docs/overview.md** (Week 13-14 timeline rows)

#### Week 13: Edge Processing & Industrial
- **Before:** SimuLearn "ETL at the Edge" + "Converting Industrial Protocols" + "Contextualizing Industrial Equipment Data"
- **After:** SimuLearn "ETL at the Edge" + Lab – Deploying AWS IoT Greengrass Components
- **Rationale:** Removes 2 extra SimuLearn labs not specified in aws_course_content.md

#### Week 14: Analytics & Visualization
- **Before:** Analyzing, Visualizing, and Gaining Insights (45 m) + SimuLearn "Manufacturing and Automotive" (first 3 labs)
- **After:** Analyzing, Visualizing, and Gaining Insights (45 m) + Connecting Systems and Machines to AWS for Industrial Manufacturing
- **Rationale:** Replaces SimuLearn labs with the free digital course specified in aws_course_content.md

---

### 2. **docs/aws/13.md** (Session 13: Edge Processing & Industrial Protocols)

#### Session Introduction
- Removed mention of "industrial protocol conversion"
- Focused on edge computing with Greengrass + ETL

#### Learning Objectives
- Removed: "Convert industrial protocols (Modbus simulation)"
- Kept: Deploy Greengrass, anomaly detection, local processing

#### Session Structure
- **Before:** "SimuLearn Labs – ETL, Protocols, Contextualization (3 labs)"
- **After:** "SimuLearn Lab – ETL at the Edge (1 h)" + "AWS Lab – Deploying IoT Greengrass Components (1 h)"

#### Pre-Session Preparation
- Removed: Two extra SimuLearn labs
- **Updated to:** SimuLearn "ETL at the Edge" + Lab "Deploying AWS IoT Greengrass Components"

#### Course Section (SimuLearn Labs)
- **Before:** 3 separate labs (ETL, Protocols, Contextualizing)
- **After:** 2 labs (ETL + Greengrass)

---

### 3. **docs/aws/14.md** (Session 14: Analytics & Visualization)

#### Session Introduction
- Changed from "Complete AWS Skill Builder course + 3 SimuLearn manufacturing labs"
- To: "AWS Skill Builder course + free digital course on connecting systems to AWS"

#### Session Structure
- **Before:** "AWS Skill Builder" + "SimuLearn Labs – Manufacturing & Automotive (3 labs)"
- **After:** "AWS Skill Builder" + "Free Digital Course – Connecting Systems and Machines to AWS"

#### Pre-Session Preparation
- Removed: SimuLearn reference
- **Updated to:** Free Digital Course "Connecting Systems and Machines to AWS for Industrial Manufacturing"

#### Courses Section Header
- Changed from: "AWS Skill Builder + SimuLearn (Complete First)"
- To: "AWS Skill Builder & Free Digital Course (Complete First)"

#### Course Content
- Removed: SimuLearn labs section (Manufacturing Data Ingestion, Automotive Telemetry, Equipment Health)
- Added: New course details for "Connecting Systems and Machines to AWS for Industrial Manufacturing" with topics like SiteWise asset models and OPC-UA

---

## Alignment Matrix

| Week | Content | aws_course_content.md | docs/overview.md | docs/aws/*.md | Status |
|------|---------|----------------------|------------------|---------------|--------|
| 10 | Getting Started + Securely Connecting | ✅ 1.5 h | ✅ 1.5 h | ✅ aligned | ✅ OK |
| 11 | Handling AWS IoT Device Data and States | ✅ 2 h | ✅ 2 h | ✅ aligned | ✅ OK |
| 12 | Managing Devices at Scale + SimuLearn OTA | ✅ (3.5 h + 1 h) | ✅ (3.5 h + 1 h) | ✅ aligned | ✅ OK |
| 13 | SimuLearn ETL + Greengrass Lab | ✅ (1 h + 1 h) | ✅ UPDATED | ✅ UPDATED | ✅ Fixed |
| 14 | Analyzing/Visualizing + Free Digital Course | ✅ (45 m + 45 m) | ✅ UPDATED | ✅ UPDATED | ✅ Fixed |

---

## What Was Removed

- ❌ Week 13: SimuLearn "Converting Industrial Protocols"
- ❌ Week 13: SimuLearn "Contextualizing Industrial Equipment Data"
- ❌ Week 14: SimuLearn "Manufacturing and Automotive" labs

## What Was Added

- ✅ Week 13: Explicit mention of AWS Lab "Deploying AWS IoT Greengrass Components"
- ✅ Week 14: Free digital course "Connecting Systems and Machines to AWS for Industrial Manufacturing"

---

## Subscription Impact

### Before (Old):
- Week 13: 3 SimuLearn labs (subscription required)
- Week 14: 3 SimuLearn labs (subscription required)
- **Total:** 6 SimuLearn labs

### After (New/Aligned):
- Week 13: 1 SimuLearn lab + 1 free AWS lab (subscription for 1 lab only)
- Week 14: 1 free AWS digital course (no subscription)
- **Total:** 1 SimuLearn lab + 2 free AWS resources

**Result:** ✅ Significantly reduced subscription dependency while maintaining industrial focus

---

## Files Modified

1. ✅ `/home/murray/Documents/Github/Iot2_new/docs/overview.md`
2. ✅ `/home/murray/Documents/Github/Iot2_new/docs/aws/13.md`
3. ✅ `/home/murray/Documents/Github/Iot2_new/docs/aws/14.md`

---

## Verification

All three materials are now **synchronized**:
- 📋 **Authoritative source:** `aws_course_content.md` ← This is the "source of truth"
- 📄 **Main timeline:** `docs/overview.md` ← Updated to reflect aws_course_content.md
- 📚 **Week sessions:** `docs/aws/13.md` & `docs/aws/14.md` ← Updated to reflect aws_course_content.md

**Course is now internally consistent and aligned to your preferred material.**

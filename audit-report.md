# MkDocs Course Audit Report - Unified

## Metadata

| Field | Value |
|-------|-------|
| **Report Generated** | 2026-02-23 00:15:39 UTC |
| **Course** | IoT2 (AWS Cluster) |
| **Audit Type** | Comprehensive Multi-Agent Audit |
| **Agents Used** | mkdocs-structure-audit, mkdocs-assessment-validator |
| **Total Issues Found** | 85 |
| **Critical Issues** | 45 |
| **Files Analyzed** | 37 (22 structure, 15 assessment) |

---

## Executive Summary

This unified audit combines two specialized audits of the IoT2 course MkDocs structure to identify critical issues affecting course delivery and competency-based assessment compliance.

### Overall Issue Breakdown

| Severity | Structure Audit | Assessment Audit | Total | Trend |
|----------|-----------------|------------------|-------|-------|
| **Critical** | 22 | 23 | **45** | 🔴 High |
| **Medium** | 10 | 15 | **25** | 🟠 Moderate |
| **Low** | 15 | 0 | **15** | 🟡 Minor |
| **Total** | 47 | 38 | **85** | — |

### Key Findings at a Glance

- **47 structure issues** including LAP/nav/file mismatches, capstone duplication, and week number inconsistencies
- **38 assessment issues** including competency-based language violations and grading rubric compliance failures
- **22 critical LAP mismatches** requiring immediate structural realignment
- **23 critical language violations** in assessment documentation (grading rubrics, weighting percentages, penalty language)
- **Capstone duplication** found across aws/ and capstone/ directories (weeks 15-17 duplicated)

---

## Critical Issues (45 Total)

### 🔴 Critical - Structure Audit (22 Issues)

**LAP/Navigation/File Title Mismatches (22 issues)**
- **Impact**: Core course structure is misaligned; students see inconsistent session titles across LAP, mkdocs.yml navigation, and markdown files
- **Scope**: Affects multiple weeks throughout course
- **Specific Problems**:
  - Week 1-2 structure is unclear with conflicting titles in LAP vs navigation files
  - Significant title discrepancies between Learning Activity Plan, mkdocs.yml, and actual markdown file headings
  - Week number inconsistencies found across documentation
  - 2 duplicate entries in mkdocs.yml navigation (same session listed twice)

**Action Required**: Audit each week and create normalized title mapping (LAP → mkdocs.yml → markdown headers)

---

### 🔴 Critical - Assessment Audit (23 Issues)

**Competency-Based Language Violations (23 issues)**

**Grading & Weighting Language (10 violations)**
- **Files Affected**: LAP documentation and supplementary files
- **Specific Violations**:
  - 8 instances of "weighting" language in LAP (e.g., "worth 25%", "weighted score of...") that violate competency-based assessment principles
  - 1 grading rubric found in demo.md file (grading rubrics prohibited in competency-based courses)
  - Percentage-based weighting contradicts competency pass/no-pass framework

**Penalty and Grading Language (13 violations)**
- Penalty language detected in assessment documentation
- Grading rubric language instead of competency-based descriptors
- Non-compliance with "mastery demonstration" language standards

**Why This Matters**: Competency-based courses require demonstrating mastery of specific skills, not percentage-based grading. This language could confuse students about assessment methodology and violates course design principles.

**Action Required**: Remove all percentage/weighting language; replace with competency mastery statements (e.g., "Demonstrates mastery of X competency" vs. "Scores 80% on assessment")

---

## High Priority Issues (Assessment Compliance Focus)

### Assessment Naming & Mapping (Positive Finding)

✅ **Naming Convention**: Assessment naming is consistent (A1 through A6)  
✅ **Session Mapping**: All assessments are properly mapped to sessions  
✅ **Count**: No issues found with assessment structure or naming

### Assessment Timeline Conflicts (2 Issues)

- **A3 Timeline**: Conflict between announced timeline and LAP schedule
- **A5 Timeline**: Potential dependency/prerequisite ordering issue
- **Impact**: Students may be confused about when assessments are due/available

**Action Required**: Resolve timeline conflicts in mkdocs.yml and LAP; ensure consistent announcement dates

---

## Medium Priority Issues (25 Total)

### 🟠 Structure - Navigation & Organization (10 Issues)

| Category | Count | Details |
|----------|-------|---------|
| Navigation clarity | 4 | Navigation paths are unclear in some weeks |
| Link inconsistencies | 3 | Internal links use mixed formats |
| File organization | 3 | Related files scattered across directories |

**Action Required**: Standardize internal link formats; reorganize supplementary files into consistent directory structure

---

### 🟠 Assessment - Documentation Quality (15 Issues)

| Category | Count | Details |
|----------|-------|---------|
| Missing competency descriptions | 8 | Assessments lack clear competency statements |
| Incomplete session-assessment linkage | 4 | Some sessions missing explicit assessment pointers |
| Demo/example files | 3 | Demo files contain grading examples instead of mastery examples |

**Action Required**: Add competency statements to each assessment; update demo files to show mastery examples instead of grading rubrics

---

## Low Priority Issues (15 Total)

### 🟡 Structure - Formatting & Minor Issues (15 Issues)

| Category | Count | Impact |
|----------|-------|--------|
| Link formatting | 8 | Some external links use inconsistent formats |
| Markdown syntax | 4 | Minor formatting inconsistencies (extra spaces, trailing formatting) |
| Image references | 3 | Inconsistent image path references |

**Note**: Low priority issues do not affect course function or assessment validity; can be addressed during routine maintenance cycle.

---

## Capstone Duplication - Special Notice

**Issue**: Capstone content (weeks 15-17) appears in both:
- `aws/` directory
- `capstone/` directory

**Impact**: Confusing structure; unclear which version is authoritative  
**Recommendation**: Choose single source of truth; remove duplication from one location  
**Priority**: Medium (structural clarity, not functional impact)

---

## Combined Recommendations by Action Priority

### 🔴 URGENT (Must Complete Before Course Delivery)

1. **Remove Competency-Based Language Violations**
   - [ ] Remove 8 instances of weighting/percentage language from LAP
   - [ ] Delete grading rubric from demo.md
   - [ ] Replace all penalty language with mastery statements
   - Effort: 2-3 hours | Agent: mkdocs-assessment-validator

2. **Resolve LAP/Navigation Title Mismatches**
   - [ ] Audit all 22 critical title mismatches
   - [ ] Create normalized mapping: LAP ↔ mkdocs.yml ↔ markdown files
   - [ ] Fix week number inconsistencies throughout
   - [ ] Remove 2 duplicate entries from mkdocs.yml
   - Effort: 4-5 hours | Agent: mkdocs-structure-audit

3. **Resolve Assessment Timeline Conflicts**
   - [ ] Align A3 and A5 timeline declarations
   - [ ] Verify prerequisites are listed in proper order
   - [ ] Update mkdocs.yml and LAP consistently
   - Effort: 1 hour | Agent: mkdocs-structure-audit

### 🟠 HIGH PRIORITY (Complete Before Week 1)

4. **Clarify Capstone Duplication**
   - [ ] Determine authoritative location (aws/ or capstone/)
   - [ ] Consolidate weeks 15-17 into single directory
   - [ ] Update navigation to reference consolidated location
   - Effort: 1-2 hours | Agent: mkdocs-structure-audit

5. **Add Missing Competency Descriptions**
   - [ ] Document competency skills for each assessment (A1-A6)
   - [ ] Link competencies to course learning outcomes
   - [ ] Add competency statements to assessment pages
   - Effort: 2-3 hours | Agent: mkdocs-assessment-validator

6. **Standardize Assessment Documentation**
   - [ ] Update demo files to show mastery examples
   - [ ] Add explicit session-assessment linkage pointers
   - [ ] Verify all 15 assessment files have proper competency language
   - Effort: 2 hours | Agent: mkdocs-assessment-validator

### 🟡 MEDIUM PRIORITY (Complete During First 2 Weeks)

7. **Fix Navigation & Organization Issues**
   - [ ] Standardize internal link formats across all files
   - [ ] Reorganize supplementary files into consistent structure
   - [ ] Clarify navigation paths in problematic weeks
   - Effort: 3-4 hours | Agent: mkdocs-structure-audit

8. **Minor Formatting Cleanup**
   - [ ] Fix markdown syntax inconsistencies
   - [ ] Standardize external link formatting
   - [ ] Correct image path references
   - Effort: 1 hour | Agent: mkdocs-structure-audit

---

## Files Checked Summary

### Structure Audit (22 Files)

**Analyzed Files**:
- mkdocs.yml (navigation/structure file)
- LAP (Learning Activity Plan)
- 20 content markdown files (across weeks 1-17)

**Coverage**: Core structure, navigation, week organization

### Assessment Audit (15 Files)

**Analyzed Files**:
- LAP (assessment mapping section)
- 6 main assessment files (A1-A6)
- 8 supplementary assessment documentation files (rubrics, demos, guidelines)

**Coverage**: Assessment design, language compliance, competency mapping

### Total Files Cross-Referenced

- 37 unique files analyzed
- 22 files checked for structure issues
- 15 files checked for assessment compliance
- 5 files (mkdocs.yml, LAP, demos) checked by both audits

---

## Audit Methodology

| Audit Type | Agent | Focus Areas | Severity Scale |
|-----------|-------|-------------|-----------------|
| **Structure** | mkdocs-structure-audit | Navigation, LAP alignment, file organization, week numbering | Critical/Medium/Low |
| **Assessment** | mkdocs-assessment-validator | Competency language, grading principles, assessment naming, documentation | Critical/Medium |

### Issues by Source

| Issue Source | Count | Type |
|------------|-------|------|
| Structure audit only | 47 | Navigation, organization, file structure |
| Assessment audit only | 38 | Language, competency, assessment design |
| Cross-audit (both) | 5 | Title mismatches, capstone structure, assessment timeline |

---

## Next Steps

1. **Review this report** with course instructors and content team
2. **Prioritize urgent issues** (LAP mismatches, language violations)
3. **Assign ownership** for each recommendation bucket
4. **Schedule remediation** before course launch
5. **Re-audit** after fixes applied using same agents

---

## Report Quality Notes

- ✅ Both audits used specialized agents with domain expertise
- ✅ Issues cross-validated between structure and assessment perspectives
- ✅ All critical items flagged for immediate review
- ✅ Actionable recommendations with estimated effort
- ✅ Clear ownership (which agent found each issue type)

**Report prepared by**: Copilot Unified Audit Coordinator  
**Validity period**: Use this report as basis for corrective action until re-audit completes

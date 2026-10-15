# PeopleOps Intelligence – Confirmed Facts & Requirements Matrix

**Document Reference:** Business Requirement Document (BRD) v1.0 (Oct 2026)  
**Product Name:** PeopleOps / PeopleOps Intelligence  
**Business Owner / Developer:** Codework  
**Target Markets:** UK (Primary), USA (Secondary)  
**Target Audience:** Top Management (CEO, MD, CTO, Senior Directors), HR Heads, Delivery / Project Heads  
**Target Company Size / Type:** IT Services, Software Companies, Consulting, BPO / Support (50–500 employees)

---

## 1. Verified Core Value Proposition & Purpose
* **What it is:** A centralized workforce intelligence and operations web application.
* **Core Function:** Consolidates dispersed workforce and operational data from multiple disparate tools into a single, validated, KPI-based interface for management review.
* **Core Philosophy:** Provides clear, objective operational insight for fair human review—**not** automated decision-making or intrusive surveillance.

---

## 2. Confirmed Connected Data Sources
Based on Section 7.2 (Business Process Flow Diagram) and Section 8.1 (Functional Requirements):
1. **Worklogix** (Task and project management)
2. **GreytHR** (HRMS / Employee records)
3. **Biometrics** (Physical attendance / check-in access control)
4. **Microsoft Teams** (Collaboration presence, communication status)
5. **GitHub** (Engineering work activity, pull requests, repository contributions)
6. **Microsoft Planner** (Task assignment and team boards)
7. **Microsoft Calendar** (Meetings, scheduled events, availability)
8. **SharePoint** (Document collaboration and workspace matching)
9. **Microsoft Graph** (Underlying API layer for 365 services and identity mapping)

---

## 3. Confirmed Product Views & Features (Section 8.1 & 9)
1. **Overview Dashboard (FR-01, FR-02, FR-03):**
   * High-level operational and workforce indicators.
   * *Today's Briefing:* Meetings and out-of-office visibility.
   * *Attention Required:* Highlights employees, teams, or projects requiring immediate management attention.
2. **KPI & Performance Dashboard (FR-04, FR-05):**
   * Aggregates productivity, task completion rates, team KPIs, and configurable KPI weightings.
   * *KPI Classification:* Categorizes results using approved business bands (e.g., target ranges, thresholds) rather than arbitrary scores.
3. **Employee Register & Management (FR-06, FR-07, FR-08):**
   * Central employee directory with performance and operational status.
   * Search and filter by name, role, team, or department.
   * Employee drill-down panel displaying individual KPIs, active tasks, team affiliation, status, and attention flags.
4. **Attendance & Work Location Dashboard (FR-09, FR-10, FR-11):**
   * Cross-references biometric logs, HRMS records, and calendar entries.
   * Work-location visibility (office vs. remote/hybrid check-ins).
   * Team-level attendance aggregation and drill-down.
5. **Collaboration & Teams Presence (FR-12):**
   * Presence information from Microsoft Teams to understand current availability and working modes.
6. **Project Monitoring (FR-13, FR-14):**
   * Project health, task completion rates, logged hours vs. budget, team members allocated, and overall delivery progress.
   * Deep drill-down into ownership, milestones, and blockers.
7. **GitHub Engineering Visibility (FR-15):**
   * Tracks engineering workflows, pull request activity, and delivery velocity indicators across connected repositories.
8. **Microsoft Graph & Planner Monitoring (FR-16):**
   * Planner task allocations, meeting load, and cross-application identity matching.
9. **Integration & Sync Health Monitoring (FR-17, FR-18, NFR-06):**
   * Real-time visibility into connection status, sync frequency, data freshness, and integration health.
   * Manual refresh capability with clear timestamps.
10. **"Ask Tara" – AI Workforce Query Interface (FR-20):**
    * Natural-language conversational interface allowing authorized managers to ask operational workforce questions within an approved, secure scope.
11. **Granular Drill-Down Panels (FR-19):**
    * Contextual slide-out/modal panels for deep inspection of any employee, team, project, or integration without losing dashboard context.
12. **Data Integrity & Insufficient Data Handling (FR-21, R-01, R-10):**
    * Explicitly identifies missing, insufficient, or unsynchronized data rather than guessing or displaying inaccurate calculations.

---

## 4. Confirmed Safeguards, Privacy & Responsible Use
* **Strict Role-Based Access Control (RBAC):** Access to workforce data is strictly limited by authorized role and least-privilege permissions (FR-23, NFR-01).
* **Comprehensive Audit Trails:** Every access event to sensitive workforce information and administrative configuration is logged and traceable (FR-24, NFR-10).
* **Management Review, Not Automated Employment Decisions:** PeopleOps strictly serves as decision support for human managers; it **never** determines hiring, firing, promotion, or disciplinary actions (Rule 4.3, R-06).
* **Data Validation & Identity Matching:** Connects employee IDs across disparate tools (e.g., matching GitHub handle with GreytHR ID and Microsoft 365 identity) using approved matching rules (Section 7.2, R-02).
* **No Covert Surveillance / Bossware:** The system does not capture keystrokes, take periodic desktop screenshots, or record video/audio.

---

## 5. Confirmed Out-of-Scope (Deliberately Not Built)
As confirmed in BRD Section 4.5.2:
* **No Payroll Processing or Salary Calculation**
* **No Recruitment or Applicant Tracking (ATS)**
* **No Onboarding / Offboarding Workflow Transactions**
* **No Leave Request / Approval Processing**
* **No Formal Performance Appraisal Administration**
* **No Automated Disciplinary / Termination Decisions**
* **No Two-Way Write-Backs** (does not alter source data in GreytHR, GitHub, or Teams)
* **No Purchasing / Financial Billing Transactions**
* **No Autonomous AI Decision-Making**

# Deliverable 4: Complete Product / Features Page Content

**Page:** Product & Architecture  
**Target URL:** `/product`  
**Target Audience:** CTOs, Operations Directors, HR Heads, and Delivery Heads evaluating software functionality.  
**Tone:** Technical yet accessible, structured, factual, benefit-driven.

---

## 1. Page Header & Hero

### Page Title (H1)
**A single, validated operational lens across your people, projects, and platforms.**

### Introductory Paragraph
PeopleOps Intelligence consolidates workforce data from your attendance systems, HRMS records, Microsoft 365 collaboration tools, and GitHub code repositories into unified, role-based views. Designed specifically for leadership review, PeopleOps equips executives and managers with verifiable operational metrics to balance workloads, address bottlenecks, and make fair, data-informed decisions.

### Primary Hero Action
* `[ Book a 20-Minute Product Demo ]`
* `[ View Supported Data Sources ↓ ]` *(Smooth-scrolls to Section 4)*

---

## 2. Product Architecture & Core Views Overview

The PeopleOps platform is structured into ten synchronized [synchronised] modules, each tailored to answer critical operational questions across the business hierarchy:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PEOPLEOPS INTELLIGENCE                          │
├──────────────────────────────────┬─────────────────────────────────────┤
│ 1. Executive Overview Dashboard  │ 6. Project Health & Delivery        │
│ 2. KPI & Performance Classification│ 7. GitHub Engineering Activity      │
│ 3. Employee Directory & Profile   │ 8. Microsoft Graph & 365 Services   │
│ 4. Attendance & Location Check-In│ 9. Integration Health & Data Quality │
│ 5. Team Presence & Collaboration │ 10. "Ask Tara" Query Assistant      │
└──────────────────────────────────┴─────────────────────────────────────┘
```

---

## 3. Dedicated Feature & Module Breakdown

---

### Module 1: Executive Overview Dashboard
* **Intended User:** CEOs, Managing Directors, CTOs, and COOs.
* **The Question It Answers:** *"What is the overall operational health of our company today, and which areas demand immediate leadership attention?"*
* **Practical Benefit:** Unifies high-level task completion percentages, active project milestones, attendance rates, and data freshness timestamps in a single glance. Features **"Today's Briefing"** (meetings and out-of-office team counts) and **"Attention Required"** (immediate operational alerts).
* **Recommended Dashboard Screenshot (Dummy Data):**
  * *UI Focus:* Wide panoramic view of the Overview Dashboard.
  * *Dummy Data Metrics:* 12 active client projects; 88% overall task completion rate; 94% on-site and remote attendance check-in; "Attention Required" badge highlighting 2 blocked tasks in *Project Alpha*.
* **Module CTA:** `[ Explore Executive Overview in a Live Demo → ]`

---

### Module 2: KPI & Performance Monitoring
* **Intended User:** Department Heads, Operations Managers, and Delivery Directors.
* **The Question It Answers:** *"How are teams and individuals tracking against agreed performance benchmarks and weighted business objectives?"*
* **Practical Benefit:** Replaces arbitrary scoring with transparent **KPI Classifications** based on your company’s approved business bands, weights, and thresholds. Managers can evaluate productivity and task velocity without bias or guesswork.
* **Recommended Dashboard Screenshot (Dummy Data):**
  * *UI Focus:* The KPI Classification view with banded performance distributions.
  * *Dummy Data Metrics:* Department KPI average: 84%; Task completion trend: +4% sprint-over-sprint; Band distribution: 68% in "Target Band", 24% in "High Performing", 8% in "Review Required".
* **Module CTA:** `[ See How KPI Weights Work → ]`

---

### Module 3: Employee Register & Drill-Down Profiles
* **Intended User:** HR Business Partners, Team Leads, and Resource Managers.
* **The Question It Answers:** *"What is an individual team member’s current allocation, attendance history, active tasks, and performance context?"*
* **Practical Benefit:** Offers a searchable employee directory with deep drill-down slide-out panels. Managers can inspect an individual’s assigned tasks, recent attendance status, and KPI indicators without toggling between three separate software windows.
* **Recommended Dashboard Screenshot (Dummy Data):**
  * *UI Focus:* Employee list with an opened slide-out profile panel for dummy employee *"Sarah Jenkins – Senior Systems Engineer"*.
  * *Dummy Data Metrics:* Status: Active; Team: Cloud Infrastructure; Assigned Tasks: 6 (4 completed, 2 in progress); Biometric Check-in: 08:52 AM (Hybrid - Office); Current KPI: 88%.
* **Module CTA:** `[ Inspect Employee Profile Views → ]`

---

### Module 4: Attendance & Work Location Visibility
* **Intended User:** HR Directors, Office Administrators, and People Operations Managers.
* **The Question It Answers:** *"Who is in the office, who is working remotely, and are hybrid attendance expectations being met consistently?"*
* **Practical Benefit:** Connects hardware biometric readers and HRMS records with Microsoft Calendar schedules to display real-time physical check-ins, remote statuses, and team-level attendance rates in one audit-ready view.
* **Recommended Dashboard Screenshot (Dummy Data):**
  * *UI Focus:* Attendance calendar heatmap and daily check-in breakdown.
  * *Dummy Data Metrics:* 142 total employees; 78 in Head Office; 56 Remote / WFH; 8 on Approved Leave; Average check-in time: 08:55 AM.
* **Module CTA:** `[ Review Attendance Capabilities → ]`

---

### Module 5: Microsoft Teams Presence & Collaboration
* **Intended User:** Project Managers, Agile Scrum Masters, and Delivery Leads.
* **The Question It Answers:** *"Are team members experiencing excessive meeting overload, and who is currently available for collaborative problem-solving?"*
* **Practical Benefit:** Pulls Microsoft Teams presence signals into the operational view. Enables leaders to gauge meeting load versus focus time, identifying when teams are too fragmented by calls to complete core deliverable work.
* **Recommended Dashboard Screenshot (Dummy Data):**
  * *UI Focus:* Team availability grid showing presence tags (Available, Busy, In a Meeting, Focusing) alongside daily schedules.
  * *Dummy Data Metrics:* Development Team A: 32% Time in Meetings, 68% Available Focus Time; Zero after-hours meeting flags.
* **Module CTA:** `[ View Collaboration Analytics → ]`

---

### Module 6: Project Health & Milestone Monitoring
* **Intended User:** Delivery Directors, Project Managers, and Client Account Leads.
* **The Question It Answers:** *"Are customer projects progressing on schedule, within allocated hours, and with balanced team resource distribution?"*
* **Practical Benefit:** Surfaces project-level progress indicators, task completions, logged hours versus planned estimates, and assigned member lists. Slide-out drill-down panels allow instant inspection of project blockers and milestone dependencies.
* **Recommended Dashboard Screenshot (Dummy Data):**
  * *UI Focus:* Project portfolio health cards showing status flags (On Track, At Risk, Delayed).
  * *Dummy Data Metrics:* *Project FinTech Modernization*: 74% Complete; 340/400 Hours Logged; 6 Active Members; 2 Open Blockers flagged for review.
* **Module CTA:** `[ See Project Monitoring in Action → ]`

---

### Module 7: GitHub Engineering Activity
* **Intended User:** CTOs, VP of Engineering, and Technical Team Leads.
* **The Question It Answers:** *"How actively is code moving through our development pipelines, and where are pull requests stalling?"*
* **Practical Benefit:** Integrates directly with GitHub repositories to display pull request volume, review participation, and commit patterns alongside high-level project tasks. Bridges the communication barrier between technical teams and business leadership.
* **Recommended Dashboard Screenshot (Dummy Data):**
  * *UI Focus:* GitHub activity view showing pull request cadence, open PRs, and review engagement charts.
  * *Dummy Data Metrics:* 24 PRs merged this week; Average PR review turnaround: 6.2 hours; 18 active contributors across 5 connected repositories.
* **Module CTA:** `[ Inspect Engineering Views → ]`

---

### Module 8: Microsoft Graph, Planner & Calendar Services
* **Intended User:** Operations Directors and Business Unit Leaders.
* **The Question It Answers:** *"How do cross-functional tasks, documents, and meetings interact across our Microsoft 365 ecosystem?"*
* **Practical Benefit:** Leverages Microsoft Graph APIs to reconcile user identities, map Planner task completions, track SharePoint document engagement, and analyze [analyse in UK] organizational [organisational] calendar cadence—eliminating manual API scripting.
* **Recommended Dashboard Screenshot (Dummy Data):**
  * *UI Focus:* Graph data pipeline view correlating Planner tasks with calendar commitments.
  * *Dummy Data Metrics:* 18 Planner buckets synchronized; 94% task-to-employee identity match rate; Zero disconnected endpoints.
* **Module CTA:** `[ Check Microsoft 365 Capabilities → ]`

---

### Module 9: Integration Health & Data Quality Monitoring
* **Intended User:** IT Administrators, Systems Integrators, and Operations Leads.
* **The Question It Answers:** *"Are all connected data sources synchronized and fresh, and is our reporting based on complete information?"*
* **Practical Benefit:** Provides full visibility into every connected API and file feed. Shows synchronization frequency, connection health, and exact timestamps. If a system goes offline or data is insufficient, PeopleOps flags it prominently so calculations remain untainted.
* **Recommended Dashboard Screenshot (Dummy Data):**
  * *UI Focus:* Integration management dashboard listing connected services with green/amber status indicators.
  * *Dummy Data Metrics:* GreytHR: Synchronized (12 mins ago); GitHub: Active Webhook (Live); Biometrics: Synchronized (Hourly); Overall Data Health: 99.4%.
* **Module CTA:** `[ View Integrations Dashboard → ]`

---

### Module 10: "Ask Tara" Conversational Workforce Query
* **Intended User:** C-Suite Executives, HR Heads, and Delivery Directors.
* **The Question It Answers:** *"How can I get immediate operational answers without writing custom database queries or configuring complex spreadsheet filters?"*
* **Practical Benefit:** "Ask Tara" is an integrated conversational interface operating strictly within approved workforce data boundaries. Leaders can query operational data using plain English (e.g., *"Which teams have the highest meeting load this sprint?"* or *"List all projects due for delivery in the next 14 days"*) and receive instant, verifiable answers.
* **Recommended Dashboard Screenshot (Dummy Data):**
  * *UI Focus:* Conversational query drawer showing an executive prompt and Tara’s structured data reply.
  * *Dummy Data Example:* 
    * *User:* "Which projects have tasks past due this week?"
    * *Tara:* "Found 2 projects with overdue tasks: Project Atlas (1 task: Database Migration) and Project Beacon (2 tasks: API Integration). Click here to view details."
* **Module CTA:** `[ Experience Ask Tara Live → ]`

---

## 4. Supported Data Sources & Systems

PeopleOps Intelligence integrates with your existing business toolchain without requiring replacement of your core applications:

| Category | Supported System / Platform | Type of Data Integrated |
| :--- | :--- | :--- |
| **HRMS & People Data** | **GreytHR** | Official employee directory, department structures, role titles. |
| **Physical Attendance** | **Biometric Check-In Systems** | Hardware punch logs, office turnstile entries, check-in timestamps. |
| **Collaboration & Calls**| **Microsoft Teams** | Presence states (Available, Busy, In a Meeting), collaboration cadence. |
| **Code & Engineering** | **GitHub** | Commits, pull request reviews, repository activity, velocity signals. |
| **Task Management** | **Microsoft Planner & Worklogix** | Task boards, completion states, ownership assignments, due dates. |
| **Schedule & Meetings** | **Microsoft Calendar** | Meeting hours, calendar density, scheduled availability. |
| **Document Collaboration**| **SharePoint** | Team workspace associations and cross-tool identity mapping. |
| **Unified Identity Layer**| **Microsoft Graph** | Secure API mapping of Microsoft 365 identities and user metadata. |

---

## 5. What PeopleOps Deliberately Does NOT Do (Product Boundaries)

To maintain trust and clear product focus, PeopleOps is engineered with strict boundaries. As confirmed in our Business Requirements Document (Section 4.5.2), PeopleOps explicitly **excludes**:

1. **No Payroll Processing or Salary Calculations:** We do not compute net pay, taxes, deductions, or execute payroll disbursements. We surface operational attendance data for review.
2. **No Recruitment or Applicant Tracking (ATS):** We do not manage job requisitions, candidate pipelines, resume screening, or interview scheduling.
3. **No Transactional Onboarding or Offboarding:** We do not process employee contracts, hardware provisioning, or IT account creation/deletion.
4. **No Formal Performance Appraisal Administration:** We provide objective operational data for manager review; we do not replace annual 360-review appraisal software.
5. **No Leave Approval Workflows:** Leave requests and approvals remain inside your primary HRMS (e.g., GreytHR); PeopleOps simply reflects approved leave in attendance views.
6. **No Automated Disciplinary Actions:** The platform will never issue warnings, trigger penalties, or automate terminations.
7. **No Two-Way Data Modification:** PeopleOps operates in read-only synchronized mode for analytics; it will never overwrite or corrupt records in your source systems.
8. **No Invasive Surveillance:** Zero keystroke tracking, zero desktop screen captures, and zero stealth camera monitoring.

---

## 6. Strategic Guidance on Sensitive Dashboard Labels

> [!IMPORTANT]
> ### Strategic Recommendation for Public Website & Product Labeling
> In internal prototypes and raw data views, labels such as **"Ghost worker"**, **"Present but idle"**, or **"Disengaged"** occasionally appear.
> 
> **Our Recommendation:**
> 1. **Do NOT display these labels on the public website.** Showing terms like "Ghost worker" or "Present but idle" contradicts the brand's core message of *fair, respectful management review* and immediately triggers fears of "bossware" and punitive monitoring.
> 2. **Rename in Public Mockups & Production UI:**
>    * Replace *"Ghost worker"* with **"Unassigned / Inactive Account"** or **"Identity Reconciliation Required"**.
>    * Replace *"Present but idle"* with **"Available Focus Time"** or **"Unallocated Capacity"**.
>    * Replace *"Disengaged"* with **"Review Needed"** or **"Check-in Recommended"**.
> 
> *Flagged for final executive decision prior to public asset publication.*

---

## 7. Recommended Site Navigation & Page Architecture

To ensure the website remains clean, easy to navigate, and high-converting, we recommend expanding the site architecture into the following logical structure:

```
[ Homepage: / ]
   ├── [ Product Overview: /product ]
   │      ├── [ Integrations & Connectors: /product/integrations ] (Recommended dedicated page)
   │      └── [ "Ask Tara" Query Demo: /product/ask-tara ] (Interactive demo tour)
   ├── [ Trust, Privacy & Safeguards: /trust ] (Dedicated governance & security page)
   ├── [ About Us: /about ] (Codework background, mission, leadership principles)
   └── [ Book a Demo / Contact: /contact ] (Direct conversion hub)
```

---

## 8. Closing Product Call-to-Action

### Section Heading (H2)
### See how PeopleOps Intelligence fits into your current stack.

### Supporting Text
Schedule a live 20-minute product walkthrough. Our specialists will walk you through live dashboard views, explain cross-tool identity matching, and show you how to configure your company’s approved KPI weights.

### Action Buttons
* **Primary CTA:** `[ Book a Live Demo ]` *(Links to `/contact`)*
* **Secondary Action:** `[ Speak with Our Technical Solutions Team ]`

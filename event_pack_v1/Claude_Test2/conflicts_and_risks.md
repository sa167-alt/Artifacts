# Barcelona AI Summit 2026 — Conflicts, Missing Information & Coordination Risks

**Prepared:** 7 April 2026 | **Classification:** Internal — Ops Team Only
**Sources cross-referenced:** Programme Schedule (v0.4), Venue Constraints Register, Operator Coordination Brief (.eml), Calendar Export (.ics)

---

## CROSS-SOURCE DISCREPANCIES (Action Required)

### DISCREPANCY 1 — Room Assignment Conflict for Day 2 Breakouts
- **Severity: HIGH (data integrity)**
- The programme schedule table (line item) and the .ics calendar both assign **Breakout D to Room A1** (Hall 5).
- However, the programme schedule inline note states: *"Breakouts D & E run concurrently in adjacent rooms B2/C1."*
- The venue constraints document flags the noise bleed risk specifically between **rooms B2 and C1** (shared partition).
- **Conflict:** If Breakout D is in Room A1 (as the table and .ics show), then the noise issue between B2/C1 does not apply to Breakouts D & E — only Breakout E (B2) would be adjacent to an empty C1. If D should actually be in C1, then the table and .ics are wrong.
- **Impact:** The EUR 1,800 foam seal decision, the operator brief risk item, and attendee wayfinding all depend on which room assignment is correct.
- **Action:** Programme team to confirm the correct room for Breakout D (A1 or C1) and update all documents consistently.

### DISCREPANCY 2 — Overflow Room Reference Does Not Exist
- **Severity: MEDIUM**
- The .ics entry for Breakout A (Day 1) states overflow will be *"live-streamed to Room C2."*
- The venue constraints document lists rooms **A1, B2, and C1** in Hall 5. There is no Room C2.
- The programme schedule says Room C1 *"also serves as overflow live-stream room"* and requires a separate streaming encoder.
- **Likely correct reference:** C1 (not C2). The .ics file contains a typo.
- **Action:** Correct .ics to reference Room C1. Confirm streaming encoder is included in AV supplier RFP.

### DISCREPANCY 3 — Breakout E Room Assignment Mismatch in Programme Note
- **Severity: LOW-MEDIUM**
- The programme schedule note says D & E are in "adjacent rooms B2/C1" — implying E is in C1. But both the table and .ics place Breakout E in **Room B2**.
- If E is in B2 and D is resolved to A1 (per table), then the noise issue note is incorrect.
- If D should be in C1, then D and E would be in C1 and B2 respectively — both adjacent — and the noise note is correct.
- **Action:** Resolves with Discrepancy 1 above.

---

## CRITICAL RISKS (Consolidated from All Sources)

### RISK 1 — Gala Dinner Venue Contract Unsigned
- **Risk Level: CRITICAL** | **Decision Deadline: 15 May 2026 (target: 22 April)**
- Palau de Congressos de Catalunya contract not signed. Competing booking on same date.
- Delay is on internal contracts team capacity, not legal issues.
- **Cascade if lost:**
  - Fallback Fira Hall 4 capacity: 350 vs. 450 Palau = ~100 tickets reallocated/refunded
  - Coach transport RFP blocked until venue confirmed
  - Gala details cannot be published to attendees
  - Dietary pre-reg deadline (20 Aug) requires venue confirmation well in advance
- **Sources:** Programme schedule, operator brief, venue constraints, .ics — all consistent
- **Owner:** Contracts team | **Escalation due:** 22 April ops sync

### RISK 2 — Keynote 1 Speaker Visa (Dr. Elena Vasquez)
- **Risk Level: HIGH** | **Decision Point: 15 July 2026**
- Schengen visa application status unknown. Invitation letter issued 20 March.
- Backup speaker Prof. James Okoro on standby but **has not been briefed as active speaker** (per operator brief).
- **Coordination risk:** If switch happens after programme publication, requires comms update to all attendees.
- **Sources:** All four documents consistent
- **Owner:** Programme team | **Next check:** 15 April (visa status update)

### RISK 3 — Keynote 3 Speaker (European Commission)
- **Risk Level: HIGH** | **Clearance Expected: 1 June 2026**
- Commissioner-level speaker pending DG CNECT clearance. Published abstract references this level.
- Fallback: policy paper panel format — operator brief notes this has "significantly lower attendee value."
- If not confirmed by 1 June, abstract must be rewritten to avoid attendee disappointment.
- **Sources:** Programme schedule, operator brief, .ics — consistent
- **Owner:** Programme Chair via Brussels contact | **Escalation:** 15 April

### RISK 4 — Rooftop Terrace Permit (Welcome Reception)
- **Risk Level: HIGH** | **Decision Expected: 1 July 2026**
- Municipal permit (Barcelona Decree 2022/47) pending. Application submitted 15 March.
- Contingency: Hall 6 indoor reception (capacity 250 vs. 300 = 50 fewer guests).
- Noise ordinance limit: 85 dB after 21:00. Reception ends 20:00 so within limits, but any overrun risks enforcement.
- Weather contingency: retractable canopy covers only 60% of terrace. Full indoor trigger at >30% rain probability at T-72hrs.
- **Coordination risk:** Day 1 collateral must not name "Rooftop" until permit confirmed.
- Lift shared with catering (6 persons/450 kg) — delegates needing lift access must be pre-identified.
- **Sources:** All four documents consistent
- **Owner:** Venue team | **Next check:** 22 April (council liaison update)

### RISK 5 — Fireside Chat Speaker 2 (Day 2)
- **Risk Level: MEDIUM-HIGH** | **Decision Expected: 15 June 2026**
- Speaker weighing competing summit invitation on same dates.
- If lost, fireside format collapses — must convert to solo interview or merge into panel.
- **Action:** Programme team to prepare shortlist of 3 alternatives by 1 May.
- **Sources:** Programme schedule, operator brief, .ics — consistent
- **Owner:** Programme team

### RISK 6 — Sara Mendes Panel Conflict (Day 1)
- **Risk Level: MEDIUM** | **Resolution Deadline: 1 May 2026**
- Board meeting conflict on 14 September. Her team attempting reschedule.
- She is a "headline name on Day 1 marketing" — removal requires comms coordination.
- **Sources:** Programme schedule, operator brief, .ics — consistent
- **Owner:** Programme team

---

## MEDIUM RISKS & OPEN ITEMS

| # | Item | Risk | Deadline | Owner | Source |
|---|------|------|----------|-------|--------|
| 7 | Hall 5 partition foam seal (EUR 1,800) not budgeted | Delegate experience | 10 May | Budget owner | Venue + Brief |
| 8 | Workshop Hall W1 HVAC noise — written servicing confirmation needed | Session quality | 1 Aug | Venue team | Venue constraints |
| 9 | VIP Room V1 catering surcharge (EUR 1,350) not in P&L | Budget accuracy | 30 Apr | Finance | Operator brief |
| 10 | Anonymous panellist (Day 2) — AV team NDA briefing required | Operational | 1 Jun | AV team | Programme + .ics |
| 11 | Arabic/Mandarin interpretation for VIP delegations — temp booth EUR 3,500/day | Delegate experience | 15 Jun | Programme | Venue + Brief |
| 12 | Live stream CDN contract not started | Remote attendee delivery | 1 May (bundle w/ AV RFP) | AV/Streaming | Venue + Brief |
| 13 | Fire marshal certification not started | Compliance | 15 Aug | Venue team | Venue constraints |
| 14 | GDPR data processing agreement in draft review | Compliance | 1 Jun | Legal | Venue constraints |
| 15 | Live stream broadcast rights not started | Legal | 1 Aug | Legal | Venue constraints |
| 16 | 2 speakers informally requested no recording — must be formalised | Compliance/AV | Pre-1 Sep | Programme | Operator brief |
| 17 | Coach transport licence not started (blocked on Gala venue) | Logistics | TBD | Transport | Venue + Brief |
| 18 | Projection screen for W1 — written confirmation pending | Session delivery | Pre-event | Venue team | Venue constraints |

---

## MISSING INFORMATION REGISTER

| # | Item | Required By | Impact if Not Resolved |
|---|------|-------------|----------------------|
| M1 | AV supplier identity (RFP responses due 1 May) | 1 May | Blocks streaming, recording, anonymous panellist setup, demo showcase AV |
| M2 | Fira Barcelona Account Manager name | Post-contract | Operational liaison gap |
| M3 | Catering Coordinator (Grupo Areas) contact | Post-contract | Catering coordination for dietary needs |
| M4 | Fireside Chat Speaker 1 identity (embargoed until 1 Jul) | 1 Jul | Cannot publish in marketing until embargo lifts |
| M5 | Day 2 Panel (Workforce) — 4 panellists in Speaker Mgmt System only | N/A | Not visible in provided docs; verify roster separately |
| M6 | Summit app provider — bandwidth requirements due 1 Jul | 1 Jul | Wi-Fi capacity planning |
| M7 | NFC badge IT supplier — delivery timeline | 20 Apr vendor call | VIP room access control |
| M8 | Exhibitor higher-draw power requirements | 10 Aug | Electrical supply drops |
| M9 | Demo showcase — 6 company names not provided | Pre-publication | Cannot list in attendee programme |
| M10 | Hall 6 indoor contingency — full cost estimate needed | 1 Jun | Budget planning if rooftop denied |

---

## COMMS PUBLICATION BLOCKERS (Summary)

The following items **must not** be included in public attendee communications until resolved:

| Item | Blocked Until | Workaround |
|------|---------------|------------|
| Keynote 1 speaker name | Visa confirmed (~15 Jul) | Use "Speaker to be announced" |
| Keynote 3 speaker name | EC clearance (~1 Jun) | Use "Speaker to be announced" |
| Fireside Chat Speaker 1 name | Embargo lifts 1 Jul | Use "Speaker to be announced" |
| Fireside Chat Speaker 2 name | Decision by 15 Jun | Use "Speaker to be announced" |
| Gala Dinner venue/location | Contract signed (target 22 Apr) | Use "Off-site venue — details to follow" |
| Welcome Reception location | Permit confirmed (~1 Jul) | Use "Venue subject to confirmation" |
| Sara Mendes on Day 1 panel | Conflict resolved by 1 May | Omit from marketing until confirmed |

---

## COORDINATION TIMELINE (Critical Path)

```
APR 2026
  15 Apr — Follow up Dr. Vasquez visa; escalate EC speaker to Brussels
  20 Apr — IT supplier NFC badge timeline (vendor call)
  22 Apr — Ops team sync; target Gala venue contract signing
  30 Apr — Finance: add VIP catering to P&L; Comms: dietary reminders in reg flows

MAY 2026
  01 May — AV supplier RFP responses due; Sara Mendes conflict deadline;
           Fireside Chat replacement shortlist due; CDN RFP
  10 May — Budget owner: approve/reject Hall 5 partition seal
  15 May — HARD DEADLINE: Gala Dinner venue contract decision

JUN 2026
  01 Jun — EC speaker clearance expected; GDPR sign-off; AV NDA brief for anon panellist;
           Speaker management review; Hall 6 contingency fully costed
  10 Jun — Venue walkthrough (on-site Fira)
  15 Jun — Fireside Speaker 2 decision; Interpretation needs clarified

JUL 2026
  01 Jul — Rooftop permit decision; Fireside Speaker 1 embargo lifts;
           Summit app bandwidth requirements due
  15 Jul — Keynote 1 visa decision point

AUG 2026
  01 Aug — HVAC written confirmation; Live stream broadcast rights; Final programme lock
  10 Aug — Exhibitor power requirements declared
  15 Aug — Fire marshal certification
  20 Aug — Gala Dinner dietary pre-registration closes
  25 Aug — Main event allergen meal pre-registration closes

SEP 2026
  01 Sep — Speaker recording consent forms deadline
  07 Sep — Slide submission deadline (all speakers)
  12-13 Sep — Exhibitor move-in; AV rigging
  14 Sep 06:00-08:00 — AV/speaker technical rehearsals
  14-16 Sep — EVENT
  16 Sep 08:30 — Demo technical rehearsal deadline
  16 Sep 17:00 — All delegates vacate
  17 Sep — Full derig and venue handback
```

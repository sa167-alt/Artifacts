# Axiom Photonics Executive Weekly Brief

Week 14 | 7-11 April 2026  
Prepared from the seeded calendar, Slack export, email, release notes, and issues register.  
Status as of end of source material: Thursday 10 April 2026.

## Overall Status

**AMBER.** The business is carrying one major operational risk and two execution-critical dependencies, but the immediate plan remains intact. The week is defined by three linked priorities: shipping the LuminCore `v1.2.1` firmware patch and Axiom SDK `v0.9.3` on Friday 11 April, preserving AstraZeneca Milestone 3 on 18 April, and closing the DSV Series A extension structure without letting the TSMC yield issue derail fundraising momentum.  
Sources: `ceo_weekly_update_outbound_apr7.eml`, `axiom_slack_export_w14_2026.txt`, `axiom_open_issues_w14_2026.md`

## Leadership Summary

1. **Friday's two releases are still on track and are the immediate operational priority.** SDK `v0.9.3` passed QA on Thursday 10 April at 14:55 BST, and hardware confirmed `v1.2.1-rc3` is go from the firmware side pending the formal Friday 11 April 14:00 BST go/no-go gate. There were no blockers in the latest release status.  
   Sources: `axiom_slack_export_w14_2026.txt`, `axiom_sdk_v0.9.3_release_notes.md`, `lumincore_v1.2.1_release_notes.md`, `axiom_photonics_calendar_w14_2026.ics`

2. **AstraZeneca remains "at risk but on track" and cannot tolerate slippage.** The SDK batch-timeout incident from Friday 4 April was stabilized with a workaround on Saturday 5 April, but AstraZeneca made clear the permanent fix must be deployed by Monday 14 April to protect the 18 April Milestone 3 target. Milestone 3 is explicitly the gate to procurement-panel review and commercial-terms discussion.  
   Sources: `az_pilot_escalation_inbound_apr5.eml`, `ceo_weekly_update_outbound_apr7.eml`, `axiom_slack_export_w14_2026.txt`

3. **TSMC yield is the most material company risk this week.** Batch `#7` came in at `72%` yield versus an `85%` target, after batch `#6` had already missed at `78%`. Internal analysis now points to a TSMC chamber-uniformity issue rather than an Axiom design defect. A corrective-action request has been submitted, and batch `#8` has been frozen pending recalibration confirmation.  
   Sources: `axiom_open_issues_w14_2026.md`, `ceo_weekly_update_outbound_apr7.eml`, `axiom_slack_export_w14_2026.txt`

4. **The DSV term sheet is attractive, but two items need active management: legal language and the yield-linked closing condition.** Management aligned on Thursday 10 April to push back on the anti-dilution language toward narrow-based weighted average, to offer Amadeus pro-rata participation, and to accept the DSV observer seat. The harder unresolved point is the closing condition tied to `>=85%` yield on two consecutive batches, which is not currently on track.  
   Sources: `dsv_term_sheet_inbound_apr7.eml`, `ceo_weekly_update_outbound_apr7.eml`, `axiom_slack_export_w14_2026.txt`, `axiom_open_issues_w14_2026.md`

5. **The Head of Partnerships hire has moved onto the commercial critical path.** Amara Diallo is the panel's selected candidate and the offer is being finalized for Friday 11 April. This role is now urgent because Siemens needs both Milestone 2 sign-off and a commercial proposal by 15 May to stay inside its procurement cycle.  
   Sources: `ceo_weekly_update_outbound_apr7.eml`, `axiom_photonics_calendar_w14_2026.ics`, `axiom_slack_export_w14_2026.txt`

## What Changed This Week

### Confirmed Decisions

- **SDK `v0.9.3` is approved for Friday release.** QA passed `412/412` tests, including `800`-sample and `1200`-sample batch scheduler validation and AstraZeneca model-pipeline testing.  
  Source: `axiom_slack_export_w14_2026.txt`

- **`v1.2.1` remains on schedule for Friday release.** Rahul Singh's soak-test data showed thermal-drift degradation reduced from `7.4%` to `0.3%` across `20` units at `70C` over `8` hours, satisfying the patch's core success metric.  
  Sources: `lumincore_v1.2.1_release_notes.md`, `axiom_slack_export_w14_2026.txt`

- **Management's DSV negotiating position is set.** Priya Nair and Marcus Webb agreed on Thursday 10 April to push for narrow-based weighted-average anti-dilution and to offer Amadeus participation on the same terms.  
  Sources: `ceo_weekly_update_outbound_apr7.eml`, `axiom_slack_export_w14_2026.txt`

- **Amara Diallo is the preferred Head of Partnerships candidate.** Panel consensus was reached after the Wednesday 9 April interview, and Lena Braun drafted the offer letter for Priya's review.  
  Sources: `axiom_slack_export_w14_2026.txt`, `ceo_weekly_update_outbound_apr7.eml`

- **The board deck is nearly locked.** By Thursday 10 April, the deck was complete except for Rahul Singh's TSMC write-up, with the IP appendix approved asynchronously and the broken slide-14 model link fixed. Final review is scheduled for Friday 11 April at 10:00 BST.  
  Sources: `axiom_slack_export_w14_2026.txt`, `axiom_photonics_calendar_w14_2026.ics`

### Open Issues That Still Matter

- **BUG-0047 thermal drift:** operationally mitigated in `v1.2.1`, but still awaiting the formal Friday go/no-go decision and OTA deployment.  
  Sources: `lumincore_v1.2.1_release_notes.md`, `axiom_open_issues_w14_2026.md`

- **BUG-0052 AstraZeneca pipeline timeout:** workaround is live; permanent resolution depends on Monday 14 April customer deployment of SDK `v0.9.3`.  
  Sources: `az_pilot_escalation_inbound_apr5.eml`, `axiom_open_issues_w14_2026.md`

- **BUG-0055 SDK memory leak:** root cause is now identified in `ModelMetadataCache`, but the fix is deferred to `v0.9.4` because changing the compiler in `v0.9.3` was judged too risky.  
  Sources: `axiom_slack_export_w14_2026.txt`, `axiom_open_issues_w14_2026.md`

- **RISK-0003 TSMC yield:** unresolved and potentially capable of pushing Siemens Milestone 2 by roughly three weeks if TSMC does not confirm correction by about 21 April.  
  Sources: `axiom_open_issues_w14_2026.md`, `ceo_weekly_update_outbound_apr7.eml`, `axiom_slack_export_w14_2026.txt`

## Risks And Implications

### 1. AstraZeneca Milestone 3 Is A Near-Term Revenue Gate

The operational problem is no longer whether Axiom has a path to fix the technical issues; it does. The risk is schedule compression. Friday 11 April firmware release, Friday 11 April SDK release, and Monday 14 April AstraZeneca deployment all have to land on time to protect the Friday 18 April Milestone 3 target. AstraZeneca has not asked for an extension or raised an SLA-credit discussion, but Henry Marsh explicitly stated that a repeat failure in a production-like run would breach internal SLA commitments.  
Sources: `az_pilot_escalation_inbound_apr5.eml`, `ceo_weekly_update_outbound_apr7.eml`, `axiom_slack_export_w14_2026.txt`

### 2. TSMC Yield Is Now A Cross-Functional Company Risk

This issue is no longer only a manufacturing concern. It affects Q2 shipment assumptions, Siemens unit availability, the board deck's financial model, and DSV financing conditions. The most important positive fact is that the latest internal view attributes the failure pattern to TSMC chamber drift rather than to Axiom's waveguide geometry. The most important negative fact is that no confirmed fab correction has yet been received.  
Sources: `axiom_open_issues_w14_2026.md`, `ceo_weekly_update_outbound_apr7.eml`, `axiom_slack_export_w14_2026.txt`

### 3. Siemens Has Shifted From "Good Upside" To A Timed Commercial Window

Siemens is still operationally on track, but Thursday's update introduced a new deadline: Axiom needs a commercial proposal to Siemens by Thursday 15 May 2026, in addition to Milestone 2 sign-off, to stay inside Siemens's procurement cycle. This makes the Head of Partnerships hire and the TSMC yield recovery materially more urgent than they appeared at the start of the week.  
Sources: `ceo_weekly_update_outbound_apr7.eml`, `axiom_slack_export_w14_2026.txt`

## Recommended Actions

### Immediate Actions For Friday 11 April

- Hold the `v1.2.1` go/no-go at 14:00 BST using the already-agreed five release criteria and do not blur "scheduled" and "completed" status in board communications.  
  Sources: `axiom_photonics_calendar_w14_2026.ics`, `axiom_slack_export_w14_2026.txt`

- Release SDK `v0.9.3` at 15:00 BST and execute the staged OTA plan for `9` AstraZeneca units and `5` Siemens units.  
  Sources: `axiom_photonics_calendar_w14_2026.ics`, `lumincore_v1.2.1_release_notes.md`

- Finalize and circulate the board deck after confirming that the TSMC framing, yield sensitivity, and legal language match the latest Thursday decisions.  
  Sources: `axiom_photonics_calendar_w14_2026.ics`, `axiom_slack_export_w14_2026.txt`

- Send the Amara Diallo offer letter if Priya's review is complete.  
  Sources: `ceo_weekly_update_outbound_apr7.eml`, `axiom_slack_export_w14_2026.txt`

### Actions For Week 15

- **Priya Nair + Marcus Webb:** speak with Oliver Chen at DSV early in Week 15 to proactively address the TSMC-yield closing condition before it becomes a diligence surprise.  
  Sources: `dsv_term_sheet_inbound_apr7.eml`, `ceo_weekly_update_outbound_apr7.eml`, `axiom_open_issues_w14_2026.md`

- **Lena Braun + Rahul Singh:** confirm to AstraZeneca that Friday's firmware OTA completed successfully and that the Monday 14 April SDK deployment remains on plan; send Henry Marsh the promised written thermal-fix summary.  
  Sources: `az_pilot_escalation_inbound_apr5.eml`, `axiom_slack_export_w14_2026.txt`

- **Rahul Singh:** escalate to TSMC process engineering if no firm recalibration response is received by mid-week.  
  Sources: `axiom_open_issues_w14_2026.md`, `axiom_slack_export_w14_2026.txt`

- **Commercial leadership:** begin Siemens proposal preparation now rather than waiting for Milestone 2 sign-off, because the 15 May deadline is already close.  
  Sources: `ceo_weekly_update_outbound_apr7.eml`, `axiom_slack_export_w14_2026.txt`

- **Andrei Popescu + Tomás Reyes:** keep `v0.9.4` planning tight around BUG-0055 and avoid scope creep beyond the hotfix unless AstraZeneca usage indicates additional urgency.  
  Sources: `axiom_slack_export_w14_2026.txt`, `axiom_open_issues_w14_2026.md`

## Dates To Watch

- **Friday 11 April 2026, 10:00 BST:** board deck final review  
- **Friday 11 April 2026, 14:00 BST:** `v1.2.1` go/no-go  
- **Friday 11 April 2026, 15:00 BST:** SDK `v0.9.3` public release  
- **Friday 11 April 2026, 15:00-17:00 BST:** pilot OTA deployment windows  
- **Monday 14 April 2026:** AstraZeneca SDK upgrade window and Head of Partnerships target acceptance date  
- **Friday 18 April 2026:** AstraZeneca Milestone 3 target  
- **Friday 25 April 2026:** Siemens Milestone 2 target  
- **Thursday 15 May 2026:** Siemens commercial proposal deadline  
- **Monday 30 June 2026:** DSV long-stop date  
Sources: `axiom_photonics_calendar_w14_2026.ics`, `ceo_weekly_update_outbound_apr7.eml`, `dsv_term_sheet_inbound_apr7.eml`

## Evidence Notes And Ambiguities

- The source pack contains a **timeline conflict** on SDK QA. The CEO update dated Monday 7 April says QA sign-off was already complete, but the calendar, release notes, and Slack export show QA sign-off was scheduled for Thursday 10 April and completed at `14:55 BST` that day. This brief uses the later operational sources.

- The issues register says BUG-0055 root cause was still unconfirmed as of its last update, but Slack on Thursday 10 April identifies the leak mechanism and a candidate fix. This brief treats Slack as the latest status.

- The DSV term-sheet PDF itself is **not included** in readable form in the bundle. Any legal commentary here is grounded in the cover email and internal discussions, not in a direct read of the attachment.

- Friday 11 April outcomes are **scheduled events**, not confirmed completions, because the latest message export ends on Thursday 10 April.

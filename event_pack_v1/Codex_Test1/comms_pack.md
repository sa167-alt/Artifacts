# Barcelona AI Summit 2026 — Comms Pack and Operator Flags

Current as of 2026-04-07. This pack separates safe-to-send attendee communications from operator-only issues that still block publication.

## 1. Recommended Comms Rules

- Do not publish any speaker name marked tentative, embargoed, or TBC in the source files.
- Do not publicly lock the Welcome Reception to the Rooftop Terrace until the permit decision due 2026-07-01.
- Do not publicly lock the Gala Dinner venue or transport plan until the external venue contract is signed.
- Include both dietary deadlines in attendee messaging:
  - Gala Dinner dietary requests: 20 August 2026
  - Main event dietary requests: 25 August 2026
- Treat the programme schedule export as the primary attendee schedule source, but keep the conflicts in Section 5 below visible to operations.

## 2. Attendee Email Draft — Registration Confirmation / Programme Overview

Subject: Barcelona AI Summit 2026: Your event overview and key deadlines

Hello,

Thank you for registering for Barcelona AI Summit 2026, taking place 14-16 September 2026 at Fira Barcelona Gran Via in Barcelona.

Registration opens at 08:00 on Monday, 14 September in the Main Lobby, Hall 1 Foyer. Across the three-day programme, attendees can expect keynote sessions, panels, breakouts, a hands-on workshop, live demos, and networking events.

Please note these key deadlines now:

- Gala Dinner dietary requests close on 20 August 2026.
- Main event dietary requests close on 25 August 2026.
- Kosher meal requests require at least 10 days' notice and should be submitted separately.

Accessibility notes:

- All main event spaces are step-free accessible.
- Hearing loop support is available in the Auditorium and Room A1.
- If you need hearing support in other rooms or priority lift access for the Welcome Reception, please contact the event team in advance.

Some programme elements are still being finalized, including selected keynote speaker confirmations, the Day 1 reception location, and the Day 2 Gala Dinner venue. We will send a final logistics update closer to the event.

We look forward to welcoming you to Barcelona.

Barcelona AI Summit Team

## 3. Attendee Email Draft — Final Logistics Update

Subject: Barcelona AI Summit 2026: Final logistics and on-site information

Hello,

Barcelona AI Summit 2026 is approaching. Here is your key on-site information for 14-16 September at Fira Barcelona Gran Via.

- Registration opens at 08:00 on Monday, 14 September in the Main Lobby, Hall 1 Foyer.
- Food and beverages are not permitted inside the Auditorium.
- The Day 1 workshop in Workshop Hall W1 requires pre-registration and is capacity-limited.
- The Day 2 Investor Roundtable is invite-only.
- All delegates must vacate the venue by 17:00 on Wednesday, 16 September.

Please review the latest programme in the summit app for any session, room, or speaker updates. If you have dietary or accessibility needs not yet submitted, contact the event team immediately.

If you are attending the Gala Dinner, watch for a separate message confirming venue and coach-transfer details once finalized.

Barcelona AI Summit Team

## 4. Summit App / Push Drafts

### In-app banner

Barcelona AI Summit 2026 runs 14-16 September at Fira Barcelona Gran Via. Check the latest programme here for room updates, dietary deadlines, and final event logistics.

### Push notification — dietary reminder

Reminder: Gala Dinner dietary requests close 20 Aug. Main event dietary requests close 25 Aug. Update your preferences in time.

### Push notification — arrival reminder

Registration opens 08:00 on 14 Sep in Hall 1 Foyer. Please arrive early for badge collection and opening sessions.

### Push notification — cautionary event update

Please check the summit app before arrival for the latest Welcome Reception and Gala Dinner logistics.

## 5. Website / Landing Page Copy

Barcelona AI Summit 2026 takes place 14-16 September 2026 at Fira Barcelona Gran Via in Barcelona. The programme features keynotes, policy and industry panels, breakout sessions, a hands-on workshop, live demos, and curated networking.

Selected speaker announcements and social-event details are still being finalized. Attendees should refer to the summit app and official email updates for the latest logistics, rooming, and event notices.

## 6. Operator-Only Risk and Conflict Log

### Publication blockers

| Item | Why blocked | Source basis |
|------|-------------|--------------|
| Keynote 1 speaker name as final | Visa status unknown until decision point 2026-07-15 | programme schedule, operator brief, venue register |
| Keynote 3 speaker name as final | EC clearance pending, expected 2026-06-01 | programme schedule, operator brief, venue register |
| Fireside Chat full speaker list | Speaker 2 unresolved; Speaker 1 embargo lifts 2026-07-01 | programme schedule, operator brief |
| Welcome Reception fixed rooftop wording | Permit decision pending until 2026-07-01 | programme schedule, operator brief, venue register |
| Gala Dinner venue/location details | External contract not signed; fallback capacity is lower | programme schedule, operator brief, venue register |

### Source conflicts and missing information

| Issue | Detail | Operational risk |
|------|--------|------------------|
| No attendee list in workspace | Seeded prompt mentions attendee list, but no attendee roster file is present in `event_pack_v1` | Cannot produce named attendee roster, segmentation, or personalized outreach |
| Day 2 room conflict note does not match schedule | Programme schedule places Breakout D in Room A1 and Breakout E in Room B2, but the warning says Breakouts D and E are the adjacent-room noise risk in B2/C1 | Ops may approve mitigation for the wrong concurrent rooms or publish an incorrect caveat |
| `.ics` references Room C2 overflow | Calendar file says Breakout A overflow streams to `Room C2`, while venue register only lists A1, B2, and C1 in Hall 5 | Attendee wayfinding and room setup may fail if calendar data is used directly |
| Speaker list incomplete for some attendee-facing sessions | Day 2 workforce panel says four panellists are confirmed, but names are only in another system not included here | Website/app copy cannot safely list full panel roster from this workspace alone |
| Welcome Reception accessibility handling is not attendee-ready | Rooftop lift access is limited and requires pre-identification, but no intake or contact workflow is included here | Mobility support may fail unless comms and registration fields are added |
| Gala transport details are incomplete | Coach transfers are noted, but operator brief says provider is not assigned and venue is not yet fixed | Risk of premature attendee comms on transport timing and departure points |

### Coordination actions to push next

- Confirm whether the Day 2 Hall 5 noise risk is really `B2/C1` and which session is in `C1`.
- Correct the calendar export if `Room C2` is invalid.
- Supply the missing attendee list if a named attendee sheet or segmented comms are required.
- Add a clear attendee contact path for accessibility requests tied to rooftop lift priority and portable hearing support.
- Hold Gala Dinner attendee comms until venue and coach plan are contractually confirmed.

# Onboarding Message Bundle for April 13, 2026 Cohort

Source basis: `new_hire_roster.csv`, `onboarding_calendar.ics`, `welcome_email_draft.txt`, `slack_message_scripts.txt`, `onboarding_checklist.md`

This bundle is limited to the hires whose start date is `2026-04-13`, because the source templates place their pre-Day 1 communications in the active execution window on `2026-04-07`.

## Shared Data Gaps to Resolve Before Sending

- `[[MISSING: COMPANY_NAME]]`
- `[[MISSING: HR_OR_PEOPLE_OPS_NAME]]` and `[[MISSING: HR_OR_PEOPLE_OPS_EMAIL]]`
- `[[MISSING: IT_CONTACT_NAME]]` and `[[MISSING: IT_CONTACT_EMAIL]]`
- `[[MISSING: NOTION_ONBOARDING_DOC_URL]]`
- `[[MISSING: ENGINEERING_HANDBOOK_URL]]`
- `[[MISSING: GITHUB_REPO_URL]]`
- `[[MISSING: LINEAR_BOARD_URL]]`
- `[[MISSING: SECURITY_POLICY_URL]]`
- `[[MISSING: COMPANY_DIRECTORY_URL]]`
- `[[MISSING: 1PASSWORD_VAULT_URL]]`
- `[[MISSING: CICD_DASHBOARD_URL]]`
- `[[MISSING: COMPANY_WEBSITE]]`
- `[[MISSING: FOUNDING_YEAR]]`

## Hire 1: Jane Doe

Status: Ready for final fill-in once missing contacts and links are provided.

### Source-Backed Profile

- Employee ID: `EMP-001`
- Role: `Senior Backend Engineer`
- Team: `Platform`
- Start date: `Monday, April 13, 2026`
- Location: `Austin, TX`
- Roster timezone: `CT (UTC-6)`
- Manager: `Sarah Johnson`
- Onboarding buddy listed in roster: `Alex Smith`
- Personal email: `jane.doe@gmail.com`
- Company email: `jane.doe@company.com`
- Calendar owner timezone in `.ics`: `America/New_York`
- First live session from `.ics`: `Monday, April 13, 2026 at 8:00 AM CT / 9:00 AM ET`

### Welcome Email

```text
TO:       jane.doe@gmail.com
CC:       [[MISSING: HR_OR_PEOPLE_OPS_EMAIL]], [[MISSING: ALEX_SMITH_EMAIL]]
SUBJECT:  Welcome to [[MISSING: COMPANY_NAME]], Jane! Your Week 1 Guide Inside

Hi Jane,

We are so excited to have you joining [[MISSING: COMPANY_NAME]] as our new Senior Backend Engineer starting Monday, April 13, 2026. On behalf of the entire engineering team, welcome!

We know starting a new role remotely can feel like a lot at once, so this email is your one-stop reference for everything you need before and during your first week.

Before your first day, please:

1. Accept your calendar invites
   You should have received a calendar file (.ics) with all Week 1 sessions. The calendar is authored in Eastern Time and should localize automatically. Your first live session is Monday, April 13 at 8:00 AM CT / 9:00 AM ET.

2. Set up your company email
   Your [[MISSING: COMPANY_NAME]] email address is: jane.doe@company.com
   Instructions to activate it should arrive separately from IT.

3. Confirm your equipment has arrived
   Your laptop should arrive by [[MISSING: EQUIPMENT_ARRIVAL_DATE]].
   If it has not arrived, contact [[MISSING: IT_CONTACT_NAME]] at [[MISSING: IT_CONTACT_EMAIL]] immediately.

4. Join Slack
   Accept the Slack invite in your personal inbox and set up your profile (photo, timezone, role).
   Key channels to join:
   - #general
   - #engineering
   - #onboarding
   - #dev-setup
   - #random

5. Read the Engineering onboarding doc
   Link: [[MISSING: NOTION_ONBOARDING_DOC_URL]]

Your Week 1 at a glance:

Monday: Welcome call, dev environment setup, virtual team lunch, tools walkthrough, end-of-day check-in
Tuesday: Architecture and codebase deep dive, first pull request
Wednesday: Product and roadmap overview, security and compliance training
Thursday: Sprint ceremonies, first real ticket
Friday: Week 1 retro with your manager, company all-hands

You have been paired with Alex Smith as your onboarding buddy for Week 1.
[[MISSING: ALEX_SMITH_ROLE]]
[[MISSING: ALEX_SMITH_TENURE]]
[[MISSING: ALEX_SMITH_SLACK_HANDLE]]

Key contacts during your first week:
Hiring Manager: Sarah Johnson — [[MISSING: SARAH_JOHNSON_SLACK]]
People Ops/HR: [[MISSING: HR_OR_PEOPLE_OPS_NAME]] — [[MISSING: HR_OR_PEOPLE_OPS_SLACK]]
IT Support: [[MISSING: IT_CONTACT_NAME]] — [[MISSING: IT_CONTACT_EMAIL]]
Onboarding Buddy: Alex Smith — [[MISSING: ALEX_SMITH_SLACK_HANDLE]]
Engineering Lead: [[MISSING: ENGINEERING_LEAD_NAME]] — [[MISSING: ENGINEERING_LEAD_SLACK]]

Jane, we did not hire you because you know everything already. We hired you because of how you think and what you bring to the team. Week 1 is a judgment-free zone. Ask every question and flag every blocker.

See you Monday!

Sarah Johnson
[[MISSING: SARAH_JOHNSON_TITLE]]
[[MISSING: COMPANY_NAME]]
[[MISSING: SARAH_JOHNSON_EMAIL]]
Slack: [[MISSING: SARAH_JOHNSON_SLACK]]
```

### Slack: Pre-Arrival Announcement

```text
Hey team! 👋

Exciting news — Jane Doe is joining [[MISSING: COMPANY_NAME]] as our new Senior Backend Engineer this Monday, April 13, 2026! 🎉

[[MISSING: BACKGROUND_BLURB_FOR_JANE]]

A few things to know:
• She'll be based in Austin, TX (CT) 🌍
• Her onboarding buddy is [[MISSING: @ALEX_SMITH_SLACK_HANDLE]] — thanks in advance, buddy!
• Her first week is fully structured, and after that she'll be picking up tickets with the Platform team

Please give Jane a warm welcome when she lands in Slack on Monday, April 13.
Feel free to drop a 👋 in this thread so she sees some friendly faces right away!

— Sarah
```

### Slack: Day 1 Welcome

```text
🎊 Welcome to [[MISSING: COMPANY_NAME]], [[MISSING: @JANE_DOE_SLACK_HANDLE]]!

Today is Day 1 and we are so glad you're here. Here's everything you need to hit the ground running:

📅 Your Week 1 schedule
→ All sessions are in your calendar (.ics file from your welcome email)
→ Your first call starts at 8:00 AM CT / 9:00 AM ET

🛠️ Key channels to join now
→ #engineering
→ #dev-setup
→ #onboarding
→ #random

🤝 Your onboarding buddy
→ Say hi to [[MISSING: @ALEX_SMITH_SLACK_HANDLE]]! They'll be your go-to human for questions all week.

📖 Your onboarding checklist
→ [[MISSING: NOTION_CHECKLIST_URL]]

🙋 First tip
→ There are zero bad questions here. If something is confusing, broken, or unclear, say something in this channel.

React with 🚀 when you're online and ready for your first call!
```

### Slack DM: Buddy Intro

```text
Hey Jane! 👋 I'm Alex — your onboarding buddy this week.

Really glad you're here. My job is to make sure Week 1 doesn't feel overwhelming.

You can ask me literally anything, and Slack DM is the fastest way to reach me.
[[MISSING: ALEX_SMITH_WORKING_HOURS]]

Today's plan together:
We have a dev environment setup session from 9:00 AM to 11:00 AM CT / 10:00 AM to 12:00 PM ET.
I'll walk you through everything step by step. No prep needed on your end beyond having your laptop ready.

Looking forward to working with you. See you soon!

— Alex
```

### Slack: End-of-Week Wrap-Up

```text
Week 1: DONE. 🎉

Give it up for [[MISSING: @JANE_DOE_SLACK_HANDLE]] for wrapping their first week at [[MISSING: COMPANY_NAME]]!

Confirm before posting:
✅ [[VERIFY: Dev environment fully operational]]
✅ [[VERIFY: First PR opened and merged]]
✅ [[VERIFY: First real ticket picked up]]
✅ [[VERIFY: Security training completed]]
✅ [[VERIFY: Company all-hands intro completed]]

[[MISSING: WEEK_2_TEAM_OR_SPRINT]]
[[MISSING: WEEK_2_FOCUS_AREA]]
[[MISSING: SARAH_JOHNSON_SLACK_HANDLE]]
```

## Hire 2: Marcus Lee

Status: Hold buddy-dependent comms until buddy assignment is corrected or Priya Nair's start date is verified.

### Source-Backed Profile

- Employee ID: `EMP-002`
- Role: `Software Engineer II`
- Team: `Frontend`
- Start date: `Monday, April 13, 2026`
- Location: `Brooklyn, NY`
- Roster timezone: `ET (UTC-5)`
- Manager: `Sarah Johnson`
- Onboarding buddy listed in roster: `Priya Nair`
- Personal email: `marcus.lee@gmail.com`
- Company email: `marcus.lee@company.com`
- Calendar owner timezone in `.ics`: `America/New_York`
- First live session from `.ics`: `Monday, April 13, 2026 at 9:00 AM ET`
- Data issue: Priya Nair appears in the same roster with start date `2026-04-27`, which is after Marcus Lee's `2026-04-13` start date

### Welcome Email

```text
TO:       marcus.lee@gmail.com
CC:       [[MISSING: HR_OR_PEOPLE_OPS_EMAIL]], [[VERIFY: ONBOARDING_BUDDY_EMAIL_AFTER_BUDDY_CONFIRMATION]]
SUBJECT:  Welcome to [[MISSING: COMPANY_NAME]], Marcus! Your Week 1 Guide Inside

Hi Marcus,

We are so excited to have you joining [[MISSING: COMPANY_NAME]] as our new Software Engineer II starting Monday, April 13, 2026. On behalf of the entire engineering team, welcome!

We know starting a new role remotely can feel like a lot at once, so this email is your one-stop reference for everything you need before and during your first week.

Before your first day, please:

1. Accept your calendar invites
   You should have received a calendar file (.ics) with all Week 1 sessions. The calendar is authored in Eastern Time. Your first live session is Monday, April 13 at 9:00 AM ET.

2. Set up your company email
   Your [[MISSING: COMPANY_NAME]] email address is: marcus.lee@company.com

3. Confirm your equipment has arrived
   Your laptop should arrive by [[MISSING: EQUIPMENT_ARRIVAL_DATE]].
   If it has not arrived, contact [[MISSING: IT_CONTACT_NAME]] at [[MISSING: IT_CONTACT_EMAIL]] immediately.

4. Join Slack
   Accept the Slack invite in your personal inbox and set up your profile (photo, timezone, role).
   Key channels to join:
   - #general
   - #engineering
   - #onboarding
   - #dev-setup
   - #random

5. Read the Engineering onboarding doc
   Link: [[MISSING: NOTION_ONBOARDING_DOC_URL]]

Your Week 1 at a glance:

Monday: Welcome call, dev environment setup, virtual team lunch, tools walkthrough, end-of-day check-in
Tuesday: Architecture and codebase deep dive, first pull request
Wednesday: Product and roadmap overview, security and compliance training
Thursday: Sprint ceremonies, first real ticket
Friday: Week 1 retro with your manager, company all-hands

Important: the roster currently lists Priya Nair as your onboarding buddy, but the same roster gives Priya a later start date of April 27, 2026. Please confirm the correct buddy before sending a buddy-specific intro.

Key contacts during your first week:
Hiring Manager: Sarah Johnson — [[MISSING: SARAH_JOHNSON_SLACK]]
People Ops/HR: [[MISSING: HR_OR_PEOPLE_OPS_NAME]] — [[MISSING: HR_OR_PEOPLE_OPS_SLACK]]
IT Support: [[MISSING: IT_CONTACT_NAME]] — [[MISSING: IT_CONTACT_EMAIL]]
Onboarding Buddy: [[VERIFY: CONFIRMED_BUDDY_NAME]] — [[VERIFY: CONFIRMED_BUDDY_SLACK]]
Engineering Lead: [[MISSING: ENGINEERING_LEAD_NAME]] — [[MISSING: ENGINEERING_LEAD_SLACK]]

Marcus, we did not hire you because you know everything already. We hired you because of how you think and what you bring to the team. Week 1 is a judgment-free zone. Ask every question and flag every blocker.

See you Monday!

Sarah Johnson
[[MISSING: SARAH_JOHNSON_TITLE]]
[[MISSING: COMPANY_NAME]]
[[MISSING: SARAH_JOHNSON_EMAIL]]
Slack: [[MISSING: SARAH_JOHNSON_SLACK]]
```

### Slack: Pre-Arrival Announcement

```text
Hey team! 👋

Exciting news — Marcus Lee is joining [[MISSING: COMPANY_NAME]] as our new Software Engineer II this Monday, April 13, 2026! 🎉

[[MISSING: BACKGROUND_BLURB_FOR_MARCUS]]

A few things to know:
• He'll be based in Brooklyn, NY (ET) 🌍
• [[VERIFY: CONFIRMED_BUDDY_SLACK_HANDLE]] will be his onboarding buddy
• His first week is fully structured, and after that he'll be picking up tickets with the Frontend team

Please give Marcus a warm welcome when he lands in Slack on Monday, April 13.
Feel free to drop a 👋 in this thread so he sees some friendly faces right away!

— Sarah
```

### Slack: Day 1 Welcome

```text
🎊 Welcome to [[MISSING: COMPANY_NAME]], [[MISSING: @MARCUS_LEE_SLACK_HANDLE]]!

Today is Day 1 and we are so glad you're here. Here's everything you need to hit the ground running:

📅 Your Week 1 schedule
→ All sessions are in your calendar (.ics file from your welcome email)
→ Your first call starts at 9:00 AM ET

🛠️ Key channels to join now
→ #engineering
→ #dev-setup
→ #onboarding
→ #random

🤝 Your onboarding buddy
→ Say hi to [[VERIFY: CONFIRMED_BUDDY_SLACK_HANDLE]] once the buddy assignment is confirmed.

📖 Your onboarding checklist
→ [[MISSING: NOTION_CHECKLIST_URL]]

🙋 First tip
→ There are zero bad questions here. If something is confusing, broken, or unclear, say something in this channel.

React with 🚀 when you're online and ready for your first call!
```

### Slack DM: Buddy Intro

```text
DO NOT SEND UNTIL THE BUDDY ASSIGNMENT IS CONFIRMED.

Hey Marcus! 👋 I'm [[VERIFY: CONFIRMED_BUDDY_FIRST_NAME]] — your onboarding buddy this week.

Really glad you're here. My job is to make sure Week 1 doesn't feel overwhelming.

You can ask me literally anything, and Slack DM is the fastest way to reach me.
[[VERIFY: CONFIRMED_BUDDY_WORKING_HOURS]]

Today's plan together:
We have a dev environment setup session from 10:00 AM to 12:00 PM ET.
I'll walk you through everything step by step. No prep needed on your end beyond having your laptop ready.

Looking forward to working with you. See you soon!

— [[VERIFY: CONFIRMED_BUDDY_FIRST_NAME]]
```

### Slack: End-of-Week Wrap-Up

```text
Week 1: DONE. 🎉

Give it up for [[MISSING: @MARCUS_LEE_SLACK_HANDLE]] for wrapping their first week at [[MISSING: COMPANY_NAME]]!

Confirm before posting:
✅ [[VERIFY: Dev environment fully operational]]
✅ [[VERIFY: First PR opened and merged]]
✅ [[VERIFY: First real ticket picked up]]
✅ [[VERIFY: Security training completed]]
✅ [[VERIFY: Company all-hands intro completed]]

[[MISSING: WEEK_2_TEAM_OR_SPRINT]]
[[MISSING: WEEK_2_FOCUS_AREA]]
[[MISSING: SARAH_JOHNSON_SLACK_HANDLE]]
```

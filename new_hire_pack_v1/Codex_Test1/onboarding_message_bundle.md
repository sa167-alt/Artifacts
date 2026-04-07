# Onboarding Message Bundle

This bundle is grounded in the seeded roster, checklist, email template, Slack scripts, and calendar file in this workspace.

## Ops Notes

- The provided calendar file is dated for the cohort starting Monday, April 13, 2026. Later cohorts need the same event sequence shifted by `+7`, `+14`, `+21`, or `+28` days before sending.
- The roster provides names, dates, roles, managers, buddies, and emails, but it does not provide company name, website, HR/IT contacts, Slack handles, manager emails, background blurbs, or Notion/GitHub/Linear/security URLs.
- `Alex Smith` appears as a buddy for Jane Doe and Carlos Mendez but does not appear in the seeded roster, so buddy email, Slack handle, and role remain unresolved for those two hires.
- The roster timezone labels are fixed-offset labels, while the calendar is tied to `America/New_York`. The tracker converts the Monday 9:00 AM ET kickoff into each hire's local time using timezone-aware conversion for April/May 2026.
- The Week 1 wrap-up drafts below include `VERIFY` markers because completion data is not present in the bundle.

## EMP-001 - Jane Doe

Source snapshot: Senior Backend Engineer, Platform team, manager Sarah Johnson, buddy Alex Smith, start date Monday, April 13, 2026, Austin, TX.

### Welcome Email

```text
TO: jane.doe@gmail.com
CC: [TODO_HR_OR_PEOPLE_OPS_EMAIL], [TODO_ALEX_SMITH_EMAIL]
SUBJECT: Welcome to [TODO_COMPANY_NAME], Jane! Your Week 1 Guide Inside

Hi Jane,

We’re excited to have you joining [TODO_COMPANY_NAME] as Senior Backend Engineer on Monday, April 13, 2026.

Before your first day, please:
- Activate your company email: jane.doe@company.com
- Accept your Week 1 calendar invites from the attached .ics file
- Join Slack and the key channels: #general, #engineering, #onboarding, #dev-setup, #random
- Confirm your laptop and equipment arrived
- Review the onboarding checklist: [TODO_NOTION_ONBOARDING_URL]

Your onboarding buddy is Alex Smith. Please introduce yourself over Slack once your account is active. [TODO_ADD_BUDDY_ROLE_TENURE_HANDLE]

Your Week 1 follows the standard engineering onboarding schedule:
- Monday: welcome call, dev setup, virtual lunch, tools walkthrough, manager check-in
- Tuesday: architecture deep dive and first PR
- Wednesday: product overview and security training
- Thursday: sprint ceremonies and first real ticket
- Friday: Week 1 retro and company all-hands

Your first live session starts at 9:00 AM America/New_York, which is 8:00 AM local time in Austin.

For questions, use these contacts once filled in:
- Hiring manager: Sarah Johnson ([TODO_MANAGER_EMAIL], @[TODO_MANAGER_SLACK])
- People Ops: [TODO_HR_NAME] ([TODO_HR_EMAIL], @[TODO_HR_SLACK])
- IT support: [TODO_IT_NAME] ([TODO_IT_EMAIL])
- Buddy: Alex Smith (@[TODO_BUDDY_SLACK])

We’re glad you’re here and excited to get Week 1 started.

Sarah Johnson
[TODO_MANAGER_TITLE]
[TODO_COMPANY_NAME]
[TODO_MANAGER_EMAIL]
```

### Slack: Pre-Arrival Announcement

```text
Hey team! Jane Doe is joining [TODO_COMPANY_NAME] as our new Senior Backend Engineer this Monday, April 13, 2026.

Jane will be joining the Platform team from Austin, TX (CT). Her onboarding buddy is @[TODO_ALEX_SMITH_SLACK].

[TODO_ADD_BACKGROUND_BLURB]

Please give Jane a warm welcome when she lands in Slack on Monday.

- Sarah
```

### Slack: Day 1 Welcome

```text
Welcome to [TODO_COMPANY_NAME], @[TODO_JANE_SLACK]!

Today is Day 1, and we’re glad you’re here.

- Your first call starts at 9:00 AM ET / 8:00 AM Austin time
- Your Week 1 sessions should already be in your calendar from the .ics file
- Your onboarding buddy is @[TODO_ALEX_SMITH_SLACK]
- Your checklist is here: [TODO_NOTION_CHECKLIST_URL]

Join or confirm access to #engineering, #dev-setup, #onboarding, and #random, then react with a rocket when you’re online.
```

### Slack: Buddy DM

```text
Hey Jane - I’m Alex, your onboarding buddy this week.

I’m your first stop for setup questions, process questions, and the unwritten stuff. We’ll work through dev environment setup together during the Day 1 session from 10:00 AM to 12:00 PM ET.

Once your Slack is live, send me a note anytime. [TODO_ADD_BUDDY_HOURS_AND_HANDLE]
```

### Slack: End-of-Week Wrap-Up

```text
Week 1 wrap-up for @[TODO_JANE_SLACK].

Before posting, verify:
- [VERIFY_DEV_ENV_READY]
- [VERIFY_FIRST_PR_MERGED]
- [VERIFY_FIRST_REAL_TICKET_IN_PROGRESS]
- [VERIFY_SECURITY_TRAINING_COMPLETE]

Jane wrapped her first week on the Platform team today. Please drop a welcome for her as she heads into Week 2 with Sarah Johnson.
```

## EMP-002 - Marcus Lee

Source snapshot: Software Engineer II, Frontend team, manager Sarah Johnson, buddy Priya Nair, start date Monday, April 13, 2026, Brooklyn, NY.

### Welcome Email

```text
TO: marcus.lee@gmail.com
CC: [TODO_HR_OR_PEOPLE_OPS_EMAIL], priya.nair@company.com
SUBJECT: Welcome to [TODO_COMPANY_NAME], Marcus! Your Week 1 Guide Inside

Hi Marcus,

We’re excited to have you joining [TODO_COMPANY_NAME] as Software Engineer II on Monday, April 13, 2026.

Before Day 1, please activate marcus.lee@company.com, accept the Week 1 calendar invites, join Slack, confirm your equipment arrived, and review the onboarding checklist here: [TODO_NOTION_ONBOARDING_URL].

Your onboarding buddy is Priya Nair, a Senior Software Engineer on the Data team. [TODO_ADD_BUDDY_TENURE_AND_SLACK]

Your first session begins at 9:00 AM ET, which is 9:00 AM local time in Brooklyn.

Week 1 will cover onboarding, dev setup, architecture, your first PR, product overview, security training, sprint ceremonies, and a Week 1 retro.

For help during the week:
- Hiring manager: Sarah Johnson ([TODO_MANAGER_EMAIL], @[TODO_MANAGER_SLACK])
- People Ops: [TODO_HR_NAME] ([TODO_HR_EMAIL])
- IT support: [TODO_IT_NAME] ([TODO_IT_EMAIL])
- Buddy: Priya Nair (@[TODO_PRIYA_SLACK])

We’re glad you’re joining us.

Sarah Johnson
[TODO_MANAGER_TITLE]
[TODO_COMPANY_NAME]
```

### Slack: Pre-Arrival Announcement

```text
Marcus Lee is joining [TODO_COMPANY_NAME] as Software Engineer II this Monday, April 13, 2026.

Marcus will be based in Brooklyn, NY (ET) and will start on the Frontend team. His onboarding buddy is @[TODO_PRIYA_SLACK].

[TODO_ADD_BACKGROUND_BLURB]

Please give Marcus a warm welcome when he joins Slack on Monday.
```

### Slack: Day 1 Welcome

```text
Welcome to [TODO_COMPANY_NAME], @[TODO_MARCUS_SLACK]!

Your first call starts at 9:00 AM ET today.

- Week 1 calendar: sent via .ics
- Buddy: @[TODO_PRIYA_SLACK]
- Checklist: [TODO_NOTION_CHECKLIST_URL]
- Key channels: #engineering, #dev-setup, #onboarding, #random

If anything is blocked, post in this channel and we’ll help quickly.
```

### Slack: Buddy DM

```text
Hey Marcus - Priya here. I’m your onboarding buddy this week.

I’ll be your go-to for dev setup, first PR questions, and team context. We’ll work through setup together during the Day 1 session from 10:00 AM to 12:00 PM ET.

Ping me anytime once you’re online. [TODO_ADD_BUDDY_HOURS]
```

### Slack: End-of-Week Wrap-Up

```text
Week 1 wrap-up for @[TODO_MARCUS_SLACK].

Before posting, verify:
- [VERIFY_DEV_ENV_READY]
- [VERIFY_FIRST_PR_MERGED]
- [VERIFY_FIRST_REAL_TICKET_IN_PROGRESS]
- [VERIFY_SECURITY_TRAINING_COMPLETE]

Marcus completed his first week with the Frontend team. Please drop a welcome as he heads into Week 2 with Sarah Johnson.
```

## EMP-003 - Aisha Okafor

Source snapshot: Staff Engineer, Infrastructure team, manager David Kim, buddy Tom Rivera, start date Monday, April 20, 2026, London, UK.

### Welcome Email

```text
TO: aisha.okafor@gmail.com
CC: [TODO_HR_OR_PEOPLE_OPS_EMAIL], tom.rivera@company.com
SUBJECT: Welcome to [TODO_COMPANY_NAME], Aisha! Your Week 1 Guide Inside

Hi Aisha,

We’re excited to have you joining [TODO_COMPANY_NAME] as Staff Engineer on Monday, April 20, 2026.

Before Day 1, please activate aisha.okafor@company.com, accept your Week 1 calendar invites, join Slack, confirm your equipment arrival, and review the onboarding checklist: [TODO_NOTION_ONBOARDING_URL].

Your onboarding buddy is Tom Rivera, a DevOps Engineer. [TODO_ADD_BUDDY_TENURE_AND_SLACK]

Important scheduling note: the provided calendar template in this workspace is dated for the April 13 cohort, so your invites need to be shifted by 7 days before sending.

Your first session begins at 9:00 AM ET, which is 2:00 PM local time in London.

David Kim
[TODO_MANAGER_TITLE]
[TODO_COMPANY_NAME]
```

### Slack: Pre-Arrival Announcement

```text
Aisha Okafor is joining [TODO_COMPANY_NAME] as Staff Engineer on Monday, April 20, 2026.

She’ll be based in London, UK and join the Infrastructure team. Her onboarding buddy is @[TODO_TOM_SLACK].

[TODO_ADD_BACKGROUND_BLURB]
```

### Slack: Day 1 Welcome

```text
Welcome to [TODO_COMPANY_NAME], @[TODO_AISHA_SLACK]!

Your first live session starts at 9:00 AM ET / 2:00 PM London time today.

- Buddy: @[TODO_TOM_SLACK]
- Checklist: [TODO_NOTION_CHECKLIST_URL]
- Key channels: #engineering, #dev-setup, #onboarding, #random

If your calendar still shows April 13 dates, use the rescheduled invite set for your cohort.
```

### Slack: Buddy DM

```text
Hey Aisha - Tom here. I’m your onboarding buddy this week.

I’ll help with setup, access, and the path through your first PR. We’ll work together during the Day 1 dev setup session from 10:00 AM to 12:00 PM ET.

Slack is the fastest way to reach me. [TODO_ADD_BUDDY_HOURS]
```

### Slack: End-of-Week Wrap-Up

```text
Week 1 wrap-up for @[TODO_AISHA_SLACK].

Before posting, verify:
- [VERIFY_DEV_ENV_READY]
- [VERIFY_FIRST_PR_MERGED]
- [VERIFY_FIRST_REAL_TICKET_IN_PROGRESS]
- [VERIFY_SECURITY_TRAINING_COMPLETE]
```

## EMP-004 - Carlos Mendez

Source snapshot: Junior Software Engineer, Platform team, manager Sarah Johnson, buddy Alex Smith, start date Monday, April 20, 2026, Denver, CO, note: New grad hire.

### Welcome Email

```text
TO: carlos.mendez@gmail.com
CC: [TODO_HR_OR_PEOPLE_OPS_EMAIL], [TODO_ALEX_SMITH_EMAIL]
SUBJECT: Welcome to [TODO_COMPANY_NAME], Carlos! Your Week 1 Guide Inside

Hi Carlos,

We’re excited to have you joining [TODO_COMPANY_NAME] as Junior Software Engineer on Monday, April 20, 2026.

Before Day 1, please activate carlos.mendez@company.com, accept your Week 1 calendar invites, join Slack, confirm your equipment arrival, and review the onboarding checklist: [TODO_NOTION_ONBOARDING_URL].

Your onboarding buddy is Alex Smith. [TODO_ADD_BUDDY_ROLE_TENURE_HANDLE]

Important scheduling note: the provided calendar template in this workspace is dated for the April 13 cohort, so your invites need to be shifted by 7 days before sending.

Your first session begins at 9:00 AM ET, which is 7:00 AM local time in Denver.

Because this is a new grad hire, consider adding a short line in the final send about asking every question early and often.
```

### Slack: Pre-Arrival Announcement

```text
Carlos Mendez is joining [TODO_COMPANY_NAME] as Junior Software Engineer on Monday, April 20, 2026.

Carlos will be based in Denver, CO and join the Platform team. His onboarding buddy is @[TODO_ALEX_SMITH_SLACK].

Note for sender: source notes label Carlos as a new grad hire.

[TODO_ADD_BACKGROUND_BLURB]
```

### Slack: Day 1 Welcome

```text
Welcome to [TODO_COMPANY_NAME], @[TODO_CARLOS_SLACK]!

Your first call starts at 9:00 AM ET / 7:00 AM Denver time.

- Buddy: @[TODO_ALEX_SMITH_SLACK]
- Checklist: [TODO_NOTION_CHECKLIST_URL]
- Key channels: #engineering, #dev-setup, #onboarding, #random
```

### Slack: Buddy DM

```text
Hey Carlos - I’m Alex, your onboarding buddy this week.

I’ll help you through setup, access, and your first PR. We’ll tackle the Day 1 dev environment session together from 10:00 AM to 12:00 PM ET.

Ask me anything, especially the small stuff. [TODO_ADD_BUDDY_HOURS_AND_HANDLE]
```

### Slack: End-of-Week Wrap-Up

```text
Week 1 wrap-up for @[TODO_CARLOS_SLACK].

Before posting, verify:
- [VERIFY_DEV_ENV_READY]
- [VERIFY_FIRST_PR_MERGED]
- [VERIFY_FIRST_REAL_TICKET_IN_PROGRESS]
- [VERIFY_SECURITY_TRAINING_COMPLETE]
```

## EMP-005 - Priya Nair

Source snapshot: Senior Software Engineer, Data team, manager David Kim, buddy Marcus Lee, start date Monday, April 27, 2026, San Francisco, CA.

### Welcome Email

```text
TO: priya.nair@gmail.com
CC: [TODO_HR_OR_PEOPLE_OPS_EMAIL], marcus.lee@company.com
SUBJECT: Welcome to [TODO_COMPANY_NAME], Priya! Your Week 1 Guide Inside

Hi Priya,

We’re excited to have you joining [TODO_COMPANY_NAME] as Senior Software Engineer on Monday, April 27, 2026.

Before Day 1, please activate priya.nair@company.com, accept your rescheduled Week 1 calendar invites, join Slack, confirm equipment arrival, and review the onboarding checklist: [TODO_NOTION_ONBOARDING_URL].

Your onboarding buddy is Marcus Lee, a Software Engineer II on the Frontend team. [TODO_ADD_BUDDY_TENURE_AND_SLACK]

Your cohort needs the provided calendar template shifted by 14 days before sending.

Your first session begins at 9:00 AM ET, which is 6:00 AM local time in San Francisco.
```

### Slack: Pre-Arrival Announcement

```text
Priya Nair is joining [TODO_COMPANY_NAME] as Senior Software Engineer on Monday, April 27, 2026.

She’ll be based in San Francisco, CA and join the Data team. Her onboarding buddy is @[TODO_MARCUS_SLACK].

[TODO_ADD_BACKGROUND_BLURB]
```

### Slack: Day 1 Welcome

```text
Welcome to [TODO_COMPANY_NAME], @[TODO_PRIYA_SLACK]!

Your first call starts at 9:00 AM ET / 6:00 AM San Francisco time.

- Buddy: @[TODO_MARCUS_BUDDY_SLACK]
- Checklist: [TODO_NOTION_CHECKLIST_URL]
- Key channels: #engineering, #dev-setup, #onboarding, #random
```

### Slack: Buddy DM

```text
Hey Priya - Marcus here. I’m your onboarding buddy this week.

I’ll help with setup, team context, and your first PR path. We’ll work together during the Day 1 dev environment session from 10:00 AM to 12:00 PM ET.

Ping me anytime once your Slack is active. [TODO_ADD_BUDDY_HOURS]
```

### Slack: End-of-Week Wrap-Up

```text
Week 1 wrap-up for @[TODO_PRIYA_SLACK].

Before posting, verify:
- [VERIFY_DEV_ENV_READY]
- [VERIFY_FIRST_PR_MERGED]
- [VERIFY_FIRST_REAL_TICKET_IN_PROGRESS]
- [VERIFY_SECURITY_TRAINING_COMPLETE]
```

## EMP-006 - Tom Rivera

Source snapshot: DevOps Engineer, Infrastructure team, manager David Kim, buddy Jane Doe, start date Monday, April 27, 2026, Miami, FL.

### Welcome Email

```text
TO: tom.rivera@gmail.com
CC: [TODO_HR_OR_PEOPLE_OPS_EMAIL], jane.doe@company.com
SUBJECT: Welcome to [TODO_COMPANY_NAME], Tom! Your Week 1 Guide Inside

Hi Tom,

We’re excited to have you joining [TODO_COMPANY_NAME] as DevOps Engineer on Monday, April 27, 2026.

Before Day 1, please activate tom.rivera@company.com, accept your rescheduled Week 1 calendar invites, join Slack, confirm equipment arrival, and review the onboarding checklist: [TODO_NOTION_ONBOARDING_URL].

Your onboarding buddy is Jane Doe, a Senior Backend Engineer on the Platform team. [TODO_ADD_BUDDY_TENURE_AND_SLACK]

Your cohort needs the provided calendar template shifted by 14 days before sending.

Your first session begins at 9:00 AM ET, which is 9:00 AM local time in Miami.
```

### Slack: Pre-Arrival Announcement

```text
Tom Rivera is joining [TODO_COMPANY_NAME] as DevOps Engineer on Monday, April 27, 2026.

He’ll be based in Miami, FL and join the Infrastructure team. His onboarding buddy is @[TODO_JANE_SLACK].

[TODO_ADD_BACKGROUND_BLURB]
```

### Slack: Day 1 Welcome

```text
Welcome to [TODO_COMPANY_NAME], @[TODO_TOM_SLACK]!

Your first call starts at 9:00 AM ET today.

- Buddy: @[TODO_JANE_SLACK]
- Checklist: [TODO_NOTION_CHECKLIST_URL]
- Key channels: #engineering, #dev-setup, #onboarding, #random
```

### Slack: Buddy DM

```text
Hey Tom - Jane here. I’m your onboarding buddy this week.

I’ll help you with setup, access, and onboarding questions. We’ll work through the Day 1 dev environment session together from 10:00 AM to 12:00 PM ET.

Message me anytime once you’re online. [TODO_ADD_BUDDY_HOURS]
```

### Slack: End-of-Week Wrap-Up

```text
Week 1 wrap-up for @[TODO_TOM_SLACK].

Before posting, verify:
- [VERIFY_DEV_ENV_READY]
- [VERIFY_FIRST_PR_MERGED]
- [VERIFY_FIRST_REAL_TICKET_IN_PROGRESS]
- [VERIFY_SECURITY_TRAINING_COMPLETE]
```

## EMP-007 - Yuki Tanaka

Source snapshot: Software Engineer II, Platform team, manager Sarah Johnson, buddy Aisha Okafor, start date Monday, May 4, 2026, Tokyo, Japan, employment type Contract, note: Contract - 6 months.

### Welcome Email

```text
TO: yuki.tanaka@gmail.com
CC: [TODO_HR_OR_PEOPLE_OPS_EMAIL], aisha.okafor@company.com
SUBJECT: Welcome to [TODO_COMPANY_NAME], Yuki! Your Week 1 Guide Inside

Hi Yuki,

We’re excited to have you joining [TODO_COMPANY_NAME] as Software Engineer II on Monday, May 4, 2026.

Before Day 1, please activate yuki.tanaka@company.com, accept your rescheduled Week 1 calendar invites, join Slack, confirm equipment arrival, and review the onboarding checklist: [TODO_NOTION_ONBOARDING_URL].

Your onboarding buddy is Aisha Okafor, a Staff Engineer on the Infrastructure team. [TODO_ADD_BUDDY_TENURE_AND_SLACK]

Your cohort needs the provided calendar template shifted by 21 days before sending.

Your first session begins at 9:00 AM ET, which is 10:00 PM local time in Tokyo.

Source note: employment type is Contract, with a six-month note in the roster. Review whether any contractor-specific access or policy language is required before sending.
```

### Slack: Pre-Arrival Announcement

```text
Yuki Tanaka is joining [TODO_COMPANY_NAME] as Software Engineer II on Monday, May 4, 2026.

Yuki will be based in Tokyo, Japan and join the Platform team. Their onboarding buddy is @[TODO_AISHA_SLACK].

Note for sender: source notes mark this hire as a six-month contract.

[TODO_ADD_BACKGROUND_BLURB]
```

### Slack: Day 1 Welcome

```text
Welcome to [TODO_COMPANY_NAME], @[TODO_YUKI_SLACK]!

Your first live session starts at 9:00 AM ET / 10:00 PM Tokyo time today.

- Buddy: @[TODO_AISHA_SLACK]
- Checklist: [TODO_NOTION_CHECKLIST_URL]
- Key channels: #engineering, #dev-setup, #onboarding, #random
```

### Slack: Buddy DM

```text
Hey Yuki - Aisha here. I’m your onboarding buddy this week.

I’ll help with setup, team context, and the path through your first PR. We’ll work together during the Day 1 dev environment session from 10:00 AM to 12:00 PM ET.

Feel free to send async questions anytime. [TODO_ADD_BUDDY_HOURS]
```

### Slack: End-of-Week Wrap-Up

```text
Week 1 wrap-up for @[TODO_YUKI_SLACK].

Before posting, verify:
- [VERIFY_DEV_ENV_READY]
- [VERIFY_FIRST_PR_MERGED]
- [VERIFY_FIRST_REAL_TICKET_IN_PROGRESS]
- [VERIFY_SECURITY_TRAINING_COMPLETE]
```

## EMP-008 - Fatima Al-Hassan

Source snapshot: Senior Backend Engineer, Data team, manager David Kim, buddy Carlos Mendez, start date Monday, May 4, 2026, Dubai, UAE.

### Welcome Email

```text
TO: fatima.alhassan@gmail.com
CC: [TODO_HR_OR_PEOPLE_OPS_EMAIL], carlos.mendez@company.com
SUBJECT: Welcome to [TODO_COMPANY_NAME], Fatima! Your Week 1 Guide Inside

Hi Fatima,

We’re excited to have you joining [TODO_COMPANY_NAME] as Senior Backend Engineer on Monday, May 4, 2026.

Before Day 1, please activate fatima.alhassan@company.com, accept your rescheduled Week 1 calendar invites, join Slack, confirm equipment arrival, and review the onboarding checklist: [TODO_NOTION_ONBOARDING_URL].

Your onboarding buddy is Carlos Mendez, a Junior Software Engineer on the Platform team. [TODO_ADD_BUDDY_TENURE_AND_SLACK]

Your cohort needs the provided calendar template shifted by 21 days before sending.

Your first session begins at 9:00 AM ET, which is 5:00 PM local time in Dubai.
```

### Slack: Pre-Arrival Announcement

```text
Fatima Al-Hassan is joining [TODO_COMPANY_NAME] as Senior Backend Engineer on Monday, May 4, 2026.

She’ll be based in Dubai, UAE and join the Data team. Her onboarding buddy is @[TODO_CARLOS_SLACK].

[TODO_ADD_BACKGROUND_BLURB]
```

### Slack: Day 1 Welcome

```text
Welcome to [TODO_COMPANY_NAME], @[TODO_FATIMA_SLACK]!

Your first live session starts at 9:00 AM ET / 5:00 PM Dubai time today.

- Buddy: @[TODO_CARLOS_SLACK]
- Checklist: [TODO_NOTION_CHECKLIST_URL]
- Key channels: #engineering, #dev-setup, #onboarding, #random
```

### Slack: Buddy DM

```text
Hey Fatima - Carlos here. I’m your onboarding buddy this week.

I’ll help with setup, team process, and your first PR path. We’ll work together during the Day 1 dev environment session from 10:00 AM to 12:00 PM ET.

Slack me anytime. [TODO_ADD_BUDDY_HOURS]
```

### Slack: End-of-Week Wrap-Up

```text
Week 1 wrap-up for @[TODO_FATIMA_SLACK].

Before posting, verify:
- [VERIFY_DEV_ENV_READY]
- [VERIFY_FIRST_PR_MERGED]
- [VERIFY_FIRST_REAL_TICKET_IN_PROGRESS]
- [VERIFY_SECURITY_TRAINING_COMPLETE]
```

## EMP-009 - Liam O'Brien

Source snapshot: Software Engineer I, Frontend team, manager Sarah Johnson, buddy Tom Rivera, start date Monday, May 11, 2026, Dublin, Ireland.

### Welcome Email

```text
TO: liam.obrien@gmail.com
CC: [TODO_HR_OR_PEOPLE_OPS_EMAIL], tom.rivera@company.com
SUBJECT: Welcome to [TODO_COMPANY_NAME], Liam! Your Week 1 Guide Inside

Hi Liam,

We’re excited to have you joining [TODO_COMPANY_NAME] as Software Engineer I on Monday, May 11, 2026.

Before Day 1, please activate liam.obrien@company.com, accept your rescheduled Week 1 calendar invites, join Slack, confirm equipment arrival, and review the onboarding checklist: [TODO_NOTION_ONBOARDING_URL].

Your onboarding buddy is Tom Rivera, a DevOps Engineer on the Infrastructure team. [TODO_ADD_BUDDY_TENURE_AND_SLACK]

Your cohort needs the provided calendar template shifted by 28 days before sending.

Your first session begins at 9:00 AM ET, which is 2:00 PM local time in Dublin.
```

### Slack: Pre-Arrival Announcement

```text
Liam O'Brien is joining [TODO_COMPANY_NAME] as Software Engineer I on Monday, May 11, 2026.

He’ll be based in Dublin, Ireland and join the Frontend team. His onboarding buddy is @[TODO_TOM_SLACK].

[TODO_ADD_BACKGROUND_BLURB]
```

### Slack: Day 1 Welcome

```text
Welcome to [TODO_COMPANY_NAME], @[TODO_LIAM_SLACK]!

Your first live session starts at 9:00 AM ET / 2:00 PM Dublin time today.

- Buddy: @[TODO_TOM_SLACK]
- Checklist: [TODO_NOTION_CHECKLIST_URL]
- Key channels: #engineering, #dev-setup, #onboarding, #random
```

### Slack: Buddy DM

```text
Hey Liam - Tom here. I’m your onboarding buddy this week.

I’ll help with setup, access, and getting through your first PR. We’ll work together during the Day 1 dev environment session from 10:00 AM to 12:00 PM ET.

Drop me a message anytime. [TODO_ADD_BUDDY_HOURS]
```

### Slack: End-of-Week Wrap-Up

```text
Week 1 wrap-up for @[TODO_LIAM_SLACK].

Before posting, verify:
- [VERIFY_DEV_ENV_READY]
- [VERIFY_FIRST_PR_MERGED]
- [VERIFY_FIRST_REAL_TICKET_IN_PROGRESS]
- [VERIFY_SECURITY_TRAINING_COMPLETE]
```

## EMP-010 - Zara Ahmed

Source snapshot: Engineering Manager, Platform team, manager Sarah Johnson, buddy Priya Nair, start date Monday, May 11, 2026, Chicago, IL, note: Transitioning from IC.

### Welcome Email

```text
TO: zara.ahmed@gmail.com
CC: [TODO_HR_OR_PEOPLE_OPS_EMAIL], priya.nair@company.com
SUBJECT: Welcome to [TODO_COMPANY_NAME], Zara! Your Week 1 Guide Inside

Hi Zara,

We’re excited to have you joining [TODO_COMPANY_NAME] as Engineering Manager on Monday, May 11, 2026.

Before Day 1, please activate zara.ahmed@company.com, accept your rescheduled Week 1 calendar invites, join Slack, confirm equipment arrival, and review the onboarding checklist: [TODO_NOTION_ONBOARDING_URL].

Your onboarding buddy is Priya Nair, a Senior Software Engineer on the Data team. [TODO_ADD_BUDDY_TENURE_AND_SLACK]

Your cohort needs the provided calendar template shifted by 28 days before sending.

Your first session begins at 9:00 AM ET, which is 8:00 AM local time in Chicago.

Source note: the roster says Zara is transitioning from IC. Consider adding manager-specific onboarding items before sending.
```

### Slack: Pre-Arrival Announcement

```text
Zara Ahmed is joining [TODO_COMPANY_NAME] as Engineering Manager on Monday, May 11, 2026.

She’ll be based in Chicago, IL and join the Platform team. Her onboarding buddy is @[TODO_PRIYA_SLACK].

Note for sender: source notes indicate Zara is transitioning from IC.

[TODO_ADD_BACKGROUND_BLURB]
```

### Slack: Day 1 Welcome

```text
Welcome to [TODO_COMPANY_NAME], @[TODO_ZARA_SLACK]!

Your first call starts at 9:00 AM ET / 8:00 AM Chicago time.

- Buddy: @[TODO_PRIYA_SLACK]
- Checklist: [TODO_NOTION_CHECKLIST_URL]
- Key channels: #engineering, #dev-setup, #onboarding, #random
```

### Slack: Buddy DM

```text
Hey Zara - Priya here. I’m your onboarding buddy this week.

I’ll help with setup, team context, and onboarding flow. We’ll work through the Day 1 dev environment session together from 10:00 AM to 12:00 PM ET.

Send me a message anytime once your Slack is active. [TODO_ADD_BUDDY_HOURS]
```

### Slack: End-of-Week Wrap-Up

```text
Week 1 wrap-up for @[TODO_ZARA_SLACK].

Before posting, verify:
- [VERIFY_DEV_ENV_READY]
- [VERIFY_FIRST_PR_MERGED]
- [VERIFY_FIRST_REAL_TICKET_IN_PROGRESS]
- [VERIFY_SECURITY_TRAINING_COMPLETE]

If Week 2 scope will include management-specific onboarding, add that note before posting.
```

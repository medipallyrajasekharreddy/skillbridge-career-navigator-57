# SkillBridge Path

Create a complete, modern, responsive web frontend for an AI-powered career platform called “SkillBridge – Skill-Gap-to-Job Matching Agent”.

CORE USER FLOW

The application must follow this exact order:

Login → Upload Resume → Extract Resume Information → Review Profile → Job Matches → Skill Gap Analysis → Training Recommendations → Time-to-Ready → Final Career Roadmap

Do NOT show the main dashboard before login.

1. LOGIN PAGE — FIRST SCREEN

Create a professional login page.

Left side:

SkillBridge logo

Product name: Skill-Gap-to-Job Matching Agent

Short tagline: “Find the skills. Find the job. Become ready.”

3–4 simple benefits:

Find local job opportunities

Identify skill gaps

Get personalized courses

Know your time-to-ready

Right side:

Email / Username

Password

Show/hide password icon

Remember me

Forgot password

Login button

“Don't have an account? Sign Up”

Optional Google login

After clicking Login, navigate to the Resume Upload page.

2. RESUME UPLOAD PAGE — FIRST PAGE AFTER LOGIN

This is the main starting point after authentication.

Page title:
“Upload Your Resume”

Subtitle:
“We’ll analyze your resume and create your personalized career profile.”

Large drag-and-drop upload area:

Upload icon

“Drag & drop your resume here”

“or choose a file”

Supported formats: PDF, DOC, DOCX

File size information

Upload button

Below upload:
“Or enter your details manually”
with a button for manual profile entry.

On the right side, show:

What happens next?

Extract your education, skills and experience

Match your profile with local jobs

Identify missing skills

Recommend relevant training

Estimate your time-to-ready

Add a Process Resume button after a file is selected.

3. RESUME PROCESSING SCREEN

After upload, show a clean processing animation.

Display:

“Analyzing your resume…”

Progress stages:

✓ Reading resume
✓ Extracting education
✓ Extracting technical skills
✓ Identifying projects and experience
✓ Creating your skill profile
○ Finding suitable jobs

Use a progress bar and subtle AI/document animation.

After completion, automatically move to Profile page.

4. PROFILE PAGE — EXTRACTED INFORMATION

Title:
“Your Profile”

Subtitle:
“We extracted this information from your resume. Review and edit anything if needed.”

Display extracted information in clear cards.

Basic Details

Name

Email

Location

Experience

Education

Degree

Branch

College

Graduation year

CGPA / Percentage

Skills

Display skills as chips/tags.

Examples:

Java

Python

C

SQL

HTML

CSS

JavaScript

Git

DSA

DBMS

Separate skills into:

Programming

Web

Database

Tools

Other

Projects

Show project title, short description and technologies.

Certifications

Show certification cards.

Interests

Examples:

Software Development

Backend Development

AI/ML

Data Analytics

Buttons:

Edit Profile

Continue to Job Matching

5. MAIN NAVIGATION AFTER PROFILE CREATION

After profile creation, show a consistent application layout.

Use:

Dark navy/purple left sidebar

White main content

Purple/blue accent colors

Rounded cards

Modern icons

Responsive design

Sidebar menu:

SkillBridge

Dashboard

My Profile

Job Matches

Skill Gaps

Training & Courses

Time-to-Ready

Career Roadmap

Voice Assistant

Settings

Logout

Top bar:

Current location

Notifications

User profile avatar

6. DASHBOARD

Create a personalized dashboard.

Greeting:
“Hello! Let’s build your career path.”

Show summary cards:

Jobs Found

Best Match

Skills Identified

Skill Gaps

Recommended Courses

Estimated Time-to-Ready

Add:

Skill Match Overview

Circular progress chart showing overall match percentage.

Example:
72% Overall Match

Breakdown:

Strong Skills

Partial Skills

Missing Skills

Top Local Opportunities

Show 3–5 jobs with:

Job title

Company

Location

Match %

Required skills

View Details button

Quick Actions

Upload New Resume

Explore Jobs

View Skill Gaps

Start Learning Plan

7. JOB MATCHING PAGE

Title:
“Local Job Matches”

Subtitle:
“Jobs matched to your skills, interests and location.”

Add:

Location filter

Job role filter

Experience filter

Required skill filter

Each job card should show:

Company

Job title

Location

Experience

Match percentage

Required skills

Matched skills

Missing skills

View Details button

Example jobs:

Backend Developer Intern

Python Developer

Software Engineer Intern

Data Analyst

Make each job card visually clear.

8. JOB DETAILS + SKILL COMPARISON

When user opens a job:

Show:

Job Information

Company

Role

Location

Experience

Responsibilities

Skill Comparison

Use a table:

| Skill | Your Level | Required Level | Status |
| Python | Strong | Strong | Matched |
| SQL | Strong | Strong | Matched |
| REST API | Basic | Intermediate | Partial |
| Docker | Missing | Intermediate | Missing |
| Git | Basic | Basic | Matched |

Use:

Green = matched

Yellow = partial

Red = missing

Then show:

Why this match?

Provide an AI-generated explanation using simple language.

Example:
“You already have Python, SQL and Git. Your main gaps are REST API development and Docker.”

Add button:
“Analyze My Skill Gaps”

9. SKILL GAP PAGE

Title:
“Your Skill Gaps”

Show skills in three sections:

Strong Skills

✓ Python
✓ SQL
✓ Java

Partial Skills

⚠ REST API
⚠ Git

Missing Skills

✕ Docker
✕ FastAPI

For every missing/partial skill show:

Why the skill is required

Where it is required

Current level

Required level

Priority

Use labels:
Critical / High / Medium / Low

10. TRAINING & COURSE RECOMMENDATIONS

Title:
“Your Personalized Learning Path”

For every skill gap, recommend real learning resources.

Each course card should contain:

Course name

Provider

Skill covered

Beginner/Intermediate/Advanced

Duration

Course URL

Free/Paid indicator

Enroll/View button

Providers:

Coursera

NPTEL

Skill India

Group courses according to skill:

REST API

Course 1...
Course 2...

Docker

Course 1...
Course 2...

Also show:

Why this course?

Explain which job requirement the course helps satisfy.

11. TIME-TO-READY — COMPULSORY FEATURE

Create a dedicated page called:

“Time-to-Ready”

Show prominently:

Estimated Time to Ready: 4–6 Weeks

Also show:

Current skill level

Required skill level

Total learning hours

Weekly study commitment

Number of courses

Practice/project hours

Assessment hours

Example:

REST API — 10 hrs
FastAPI — 15 hrs
Docker — 8 hrs
Project — 15 hrs
Assessment — 5 hrs

Total = 53 hours

If user studies 10 hours/week:

Estimated time-to-ready = ~5 weeks

Show a timeline:

Week 1 → REST API
Week 2 → FastAPI
Week 3 → Docker
Week 4 → Project
Week 5 → Assessment

Clearly state:
“Time-to-ready is an estimate based on learning effort; it does not guarantee employment.”

12. JOBS UNLOCKED / OPPORTUNITY ANALYSIS

Add a strong feature:

“Potential Opportunities Unlocked”

Example:

Before training:
8 matching local jobs

After closing REST API gap:
12 matching jobs

After completing Docker:
15 matching jobs

Show:
+7 potential matching opportunities

Also show which skills increase job coverage.

This should connect:

Skill → Course → Learning Time → Additional Job Opportunities

13. CAREER ROADMAP / FINAL RESULT

Create a final summary page.

Title:
“Your Career Roadmap”

Show:

Target Role

Backend Developer

Current Match

82%

Top Skill Gaps

REST API

Docker

FastAPI

Recommended Courses

3 courses

Estimated Time-to-Ready

5 weeks

Potential Local Opportunities

+7 matching opportunities based on the curated job dataset

Action Plan

Learn REST API

Learn FastAPI

Learn Docker

Build one backend project

Take skill assessment

Re-check job matches

Add progress tracking.

14. VOICE ASSISTANT

Include a Voice Assistant page but keep it relevant to the career workflow.

Large microphone button.

User can speak:

“Find backend jobs for me”

“What skills am I missing?”

“Explain my biggest skill gap”

“How long will I take to become ready?”

“Recommend a course for Docker”

Show:
Voice → Speech-to-Text → AI Response

Add both:

microphone button

text input

15. MANUAL PROFILE ENTRY

Create a backup form in case the user does not upload a resume.

Fields:

Name

Education

Degree

Location

Skills

Experience

Interests

Preferred Job Roles

Allow adding multiple skills using chips.

Button:
Create My Profile

16. SETTINGS PAGE

Include:

Edit profile

Change password

Location

Preferred job roles

Notification settings

Privacy settings

Logout

17. DESIGN SYSTEM

Use one consistent visual language throughout the application.

Colors

Primary:

Deep navy

Indigo

Purple

Blue

Background:

Very light gray/white

Use green for matched skills, yellow/orange for partial skills, red for missing skills.

UI Style

Modern SaaS dashboard

Rounded cards

Soft shadows

Clean spacing

Professional typography

Minimal gradients

Simple line icons

Clear CTA buttons

Responsive layout

Avoid:

Excessive animations

Overly bright colors

Clutter

Unnecessary decorations

18. IMPORTANT USER EXPERIENCE RULE

The user journey must be:

LOGIN
↓
UPLOAD RESUME
↓
RESUME ANALYSIS
↓
PROFILE REVIEW
↓
JOB MATCHES
↓
SKILL GAP
↓
TRAINING
↓
TIME-TO-READY
↓
CAREER ROADMAP

Do not confuse the user with all features at once.

The next recommended action should always be clearly visible.

19. TECHNOLOGY ASSUMPTION

Build the frontend so it can later connect to:

Python FastAPI backend

LangGraph agents

LLM API

Sentence Transformers

Resume/PDF parser

PostgreSQL/SQLite

Job dataset

Course dataset

Speech-to-text service

Use realistic placeholder data for now, but structure the UI and components so real API data can easily replace it.

20. FINAL QUALITY REQUIREMENT

The final product should look like a real AI career platform, not a college form or simple CRUD website.

The most important product message is:

“Upload your resume → discover local jobs → understand your exact skill gaps → get training → know your estimated time-to-ready → see the opportunities those skills can unlock.”

Make the complete frontend coherent, professional, responsive, and presentation-ready for an AI hackathon.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e56ee39f-8425-4901-907e-6b850ea462a6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

export const skills = { Programming: ["Java", "Python", "C"], Web: ["HTML", "CSS", "JavaScript"], Database: ["SQL", "DBMS"], Tools: ["Git"], Other: ["DSA", "Problem Solving"] };
export const jobs = [
 { id:"backend-intern", title:"Backend Developer Intern", company:"TechNova Labs", location:"Hyderabad", experience:"0–1 years", match:82, required:["Python","SQL","REST API","Docker"], matched:["Python","SQL","Git"], missing:["REST API","Docker"] },
 { id:"python-developer", title:"Python Developer", company:"CloudArc Systems", location:"Hyderabad", experience:"0–2 years", match:76, required:["Python","FastAPI","SQL","Git"], matched:["Python","SQL","Git"], missing:["FastAPI"] },
 { id:"software-engineer", title:"Software Engineer Intern", company:"Vistara Digital", location:"Secunderabad", experience:"Fresher", match:72, required:["Java","DSA","Git","REST API"], matched:["Java","DSA","Git"], missing:["REST API"] },
 { id:"data-analyst", title:"Data Analyst", company:"MetricLoop", location:"Hyderabad", experience:"0–2 years", match:68, required:["Python","SQL","Excel","Power BI"], matched:["Python","SQL"], missing:["Power BI","Excel"] },
];
export const gaps = [
 { skill:"REST API", current:"Basic", required:"Intermediate", priority:"Critical", why:"Core to building services used by web and mobile products.", where:"Backend Developer and Software Engineer roles", hours:10 },
 { skill:"FastAPI", current:"Missing", required:"Intermediate", priority:"High", why:"Used to create production-ready Python APIs quickly.", where:"Python Developer roles", hours:15 },
 { skill:"Docker", current:"Missing", required:"Intermediate", priority:"High", why:"Teams use containers to ship reliable applications.", where:"Backend and cloud engineering roles", hours:8 },
];
export const courses = [
 { skill:"REST API", name:"APIs with Python", provider:"Coursera", level:"Beginner", duration:"10 hours", price:"Free audit", url:"https://www.coursera.org/search?query=python%20api", why:"Builds the API design skills requested by backend roles." },
 { skill:"REST API", name:"Web Development with Python", provider:"NPTEL", level:"Intermediate", duration:"4 weeks", price:"Free", url:"https://nptel.ac.in/courses", why:"Strengthens practical server-side web development." },
 { skill:"Docker", name:"Docker Essentials", provider:"Skill India", level:"Beginner", duration:"8 hours", price:"Free", url:"https://www.skillindiadigital.gov.in/", why:"Closes the containerization gap in three top matches." },
 { skill:"Docker", name:"Introduction to Containers", provider:"Coursera", level:"Beginner", duration:"6 hours", price:"Paid", url:"https://www.coursera.org/search?query=docker", why:"Adds deployment fundamentals needed for backend roles." },
 { skill:"FastAPI", name:"Build APIs with FastAPI", provider:"Coursera", level:"Intermediate", duration:"15 hours", price:"Free audit", url:"https://www.coursera.org/search?query=fastapi", why:"Directly prepares you for Python API development requirements." },
];

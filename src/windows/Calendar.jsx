import { WindowControls, TimelineSection } from "#components"
import WindowWrapper from "#components/hoc/WindowWrapper"

const experience = [
  {
    year: "May 2026 - August 2026",
    company: "Sonicboom Solutions Sdn Bhd, Kuala Lampur, Malayasia",
    title: "Software Engineer Intern",
    highlights: ["Built user-facing features", "Worked across frontend and backend", "Improved performance and reliability"],
    stack: ["React", "TypeScript", "Tailwind", "Node.js"],
    location: "Kuala Lumpur",
    backgroundColor: "#ff6b8b"
  },
  {
    year:"Jan 2026 - May 2026",
    company: "National Universit of Singapore, School of Computing",
    title: "Teaching Assistant - CS2030S (Programming Methodology II)",
    highlights: ["Developed interactive prototypes", "Collaborated with design and product teams", "Shipped polished experiences"],
    stack: ["Java", "JUnit", "Git", "VS Code"],
    location: "Singapore",
    backgroundColor: "#ff6b8b"
  },
  {
    year: "June 2025 - August 2025",
    company: "Placeholder Lab",
    title: "Intern / Junior Builder",
    highlights: ["Learned core engineering practices", "Explored new technologies", "Contributed to team projects"],
    stack: ["HTML", "CSS", "JavaScript", "Vue.js"],
    location: "Remote",
  },
   {
    year: "July 2023 - August 2023",
    company: "Placeholder Lab",
    title: "Intern / Junior Builder",
    highlights: ["Learned core engineering practices", "Explored new technologies", "Contributed to team projects"],
    stack: ["Python", "Flask", "SQL", "Git"],
    location: "Remote",
  },
]

const Calendar = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="calendar"/>
                <h2>Timeline</h2>
            </div>
            <div className="calendar-body">
                <TimelineSection title="Experience" items={experience} />
            </div>
        </>
    )
}

const CalendarWindow = WindowWrapper(Calendar, 'calendar')
export default CalendarWindow
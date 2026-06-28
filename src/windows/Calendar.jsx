import { WindowControls, TimelineSection } from "#components"
import WindowWrapper from "#components/hoc/WindowWrapper"

const experience = [
  {
    year: "May 2026 - August 2026",
    company: "Sonicboom Solutions Sdn Bhd",
    title: "Software Engineer Intern",
    highlights: ["Built user-facing features", "Worked across frontend and backend", "Improved performance and reliability"],
    stack: [".NET", "C#", "SQL Server", "WPF", "AvaloniaUI", "PowerShell", "XAML", "HTML", "CSS"],
    location: "Kuala Lumpur, Malaysia",
    backgroundColor: "#ff6b8b"
  },
  {
    year:"Jan 2026 - May 2026",
    company: "National University of Singapore, School of Computing",
    title: "Teaching Assistant: CS2030S (Programming Methodology)",
    highlights: ["Developed interactive prototypes", "Collaborated with design and product teams", "Shipped polished experiences"],
    stack: ["Java", "Vim", "Git"],
    location: "Singapore",
    backgroundColor: "#ff6b8b"
  },
  {
    year: "June 2025 - August 2025",
    company: "EdPulse (subsidiary of XSEED Education Pvt Ltd)",
    title: "AI Research Intern",
    highlights: ["Learned core engineering practices", "Explored new technologies", "Contributed to team projects"],
    stack: ["Python", "Ollama", "LangChain", "OpenAI API", "ChromaDB", "Streamlit"],
    location: "Remote",
  },
   {
    year: "July 2023 - August 2023",
    company: "XSEED Education Pvt Ltd",
    title: "Web Developer Intern",
    highlights: ["Learned core engineering practices", "Explored new technologies", "Contributed to team projects"],
    stack: ["Javascript", "Node.js", "Vue.js", "MongoDB", "Git"],
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
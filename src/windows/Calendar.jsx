import { WindowControls, TimelineSection } from "#components"
import WindowWrapper from "#components/hoc/WindowWrapper"

const experience = [
  {
    year: "May 2026 - August 2026",
    company: "Sonicboom Solutions Sdn Bhd",
    title: "Software Engineer Intern",
    highlights: ["Designed and implemented a web-based SSRS reporting system with caching to optimize report parameter loading from snapshots", "Automated SSL/TLS certificate renewal workflows, improving server security and reducing manual maintenance overhead ", "Explored integration of AI-assisted tools (e.g Replit AI) to prototype UI redesigns and modernize legacy product interfaces"],
    stack: [".NET", "C#", "SQL Server", "WPF", "AvaloniaUI", "PowerShell", "XAML", "HTML", "CSS"],
    location: "Kuala Lumpur, Malaysia",
    backgroundColor: "#ff6b8b"
  },
  {
    year:"Jan 2026 - May 2026",
    company: "National University of Singapore, School of Computing",
    title: "Teaching Assistant: CS2030S (Programming Methodology)",
    highlights: [" Facilitated weekly labs on object-oriented programming, functional programming and software engineering principles in Java", "Reviewed 20+ students’ code weekly with feedback on design & correctness"],
    stack: ["Java", "Vim", "Git"],
    location: "Singapore",
    backgroundColor: "#ff6b8b"
  },
  {
    year: "June 2025 - August 2025",
    company: "EdPulse Technologies",
    title: "AI Research Intern",
    highlights: ["Built a production chatbot using Ollama and  Streamlit for querying and interacting with student academic reports ", "Implemented a RAG pipeline with LangChain and ChromaDB with memory-enabled dialogue for context-aware multi-turn interactions", "Developed a multi-agent LLM system that analyzes student behaviour through AI conversations"],
    stack: ["Python", "Ollama", "LangChain", "OpenAI API", "ChromaDB", "Streamlit"],
    location: "Remote",
  },
   {
    year: "July 2023 - August 2023",
    company: "XSEED Education Pte Ltd",
    title: "Web Developer Intern",
    highlights: ["Developed and maintained features for web applications using Node.js, and Vue.js, resolving critical bugs to enhance user experience and system reliability", "Managed and resolved assigned Jira tickets while contributing in daily standups and weekly sprints, and code reviews within an agile environment"],
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
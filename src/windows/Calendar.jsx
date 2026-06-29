import { WindowControls, TimelineSection } from "#components"
import WindowWrapper from "#components/hoc/WindowWrapper"

const experience = [
  {
    year: "May 2026 - August 2026",
    company: "Sonicboom Solutions Sdn Bhd",
    title: "Software Engineer Intern",
    highlights: ["Built a CRUD system in C#/.NET with SQL Server integration and  complex query support ", "Developed a multi-client chat application using TCP/IP sockets and a custom client-server architecture ", "Automated SSL/TLS certificate renewal lifecycle for servers"],
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
    highlights: ["Built a production-ready chatbot using Ollama LLMs and Streamlit", "Applied prompt engineering principles to improve user retention", "Developed a RAG pipeline with LangChain & ChromaDB for domain specific responses"],
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
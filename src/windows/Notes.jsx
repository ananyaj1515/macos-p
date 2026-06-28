import { useState } from "react"
import { WindowControls } from "#components"
import WindowWrapper from "#components/hoc/WindowWrapper"
import { Plus } from "lucide-react"

const noteItems = [
  {
    id: "welcome",
    title: "Welcome note",
    subtitle: "Quick intro",
    updated: "Today",
    body: "Welcome to your Notes window. Click a note title on the left to view the content here. This layout is built to feel clean, simple, and similar to Apple Notes.",
  },
  {
    id: "project-plan",
    title: "Project plan",
    subtitle: "Portfolio refresh",
    updated: "Yesterday",
    body: "Outline your project milestones, features, and next steps in this note. Use the sidebar to switch between entries and keep everything easy to find.",
  },
  {
    id: "ideas",
    title: "Ideas",
    subtitle: "Design and interaction ideas",
    updated: "Jun 27",
    body: "Capture your ideas here for homepage interactions, layout improvements, and new components. Each note can store quick inspiration or long-form content.",
  },
]

const Notes = () => {
  const [activeNoteId, setActiveNoteId] = useState(noteItems[0].id)
  const activeNote = noteItems.find((note) => note.id === activeNoteId)

  return (
    <>
      <div id="window-header">
        <WindowControls target="notes" />
        <h2>Notes</h2>
      </div>
      <div className="notes-window">
        <aside className="notes-sidebar">
          <div className="notes-sidebar-header">
            <h3>Notes</h3>
            <Plus color="white"/>
          </div>
          <div className="notes-list">
            {noteItems.map((note) => (
              <button
                key={note.id}
                type="button"
                className={`notes-list-item ${note.id === activeNoteId ? "active" : ""}`}
                onClick={() => setActiveNoteId(note.id)}
              >
                <span className="notes-item-title">{note.title}</span>
                <div className="flex flex-row justify-between gap-y-1/8">
                    <span className="notes-item-date">{note.updated}</span>
                   
                </div>
                
              </button>
            ))}
          </div>
        </aside>

        <main className="notes-content">
          <div className="notes-content-header">
            <div>
              <h3>{activeNote.title}</h3>
            </div>
          </div>
          <div className="notes-body">
            <p>{activeNote.body}</p>
          </div>
        </main>
      </div>
    </>
  )
}

const NotesWindow = WindowWrapper(Notes, "notes")
export default NotesWindow

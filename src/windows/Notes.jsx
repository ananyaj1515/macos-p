import { useState } from "react"
import { WindowControls } from "#components"
import WindowWrapper from "#components/hoc/WindowWrapper"
import { Plus } from "lucide-react"

const noteItems = [
  {
    id: "welcome",
    title: "Welcome Note",
    updated: "Today",
    body: "A collection of thoughts, lessons, project ramblings, and things I wanted to remember. \n It's a little messy, but so is life. \n\nRead at your own caution :)",
  },
  {
    id: "project-plan",
    title: "Thoughts About Teaching",
    updated: "Yesterday",
    body: ""
  },
  {
    id: "ideas",
    title: "Ideas",
    updated: "Jun 27",
    body: "",
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
            <p style={{ whiteSpace: "pre-line" }}>
                {activeNote.body}
            </p>
          </div>
        </main>
      </div>
    </>
  )
}

const NotesWindow = WindowWrapper(Notes, "notes")
export default NotesWindow

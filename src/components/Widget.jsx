import { ImageWidget, NoteWidget } from "#components"

const Widget = () => {
    return (
        <div className="widget-stack">
            <div className="group">
                <ImageWidget/>
            </div>
            <div className="group">
                <NoteWidget/>
            </div>
        </div>
    )
}

export default Widget;
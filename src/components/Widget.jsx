import { ImageWidget, NoteWidget } from "#components"

const Widget = () => {
    return (
        <div className="flex flex-col justify-between gap-4 p-5">
            <ImageWidget/>
            <NoteWidget/>
            
        </div>
    )
}

export default Widget;
import { WindowControls } from "#components"
import WindowWrapper from "#components/hoc/WindowWrapper"
import useWindowStore from "#store/window"


const Video = () => {
    const {windows} = useWindowStore()
    const data = windows.video?.data
    if (!data) return null

    const {name, videoUrl} = data

    return (
        <>
            <div id ="window-header">
                <WindowControls target="video" />
                <h2>{name}</h2>
            </div>
            <div className="p-5 bg-white">
                {videoUrl && (
                    <div className="w-full">
                       <video controls width="600"  className="w-full h-auto max-h-[70vh] object-contain rounded">
                            <source src={videoUrl} type="video/mp4"/>
                        </video>
                    </div>
                )}
            </div>
        </>
    )
}

const VideoWindow = WindowWrapper(Video, 'video')
export default VideoWindow
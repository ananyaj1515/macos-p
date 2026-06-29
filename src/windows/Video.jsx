import { WindowControls } from "#components"
import WindowWrapper from "#components/hoc/WindowWrapper"
import useWindowStore from "#store/window"


const Video = () => {
    const {windows} = useWindowStore()
    const data = windows.video?.data
    const {name, videoUrl, link} = data ?? {}

    return (
        <>
            <div id="window-header">
                <WindowControls target="video" />
                <h2>{name}</h2>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">Learn more</a>
            </div>
            <div className="p-5 bg-white">
                {videoUrl ? (
                    <div className="w-full">
                        <video controls className="w-full h-auto max-h-[70vh] object-contain rounded">
                            <source src={videoUrl} type="video/mp4"/>
                        </video>
                    </div>
                ) : (
                    <p>No video selected.</p>
                )}
            </div>
        </>
    )
}
const VideoWindow = WindowWrapper(Video, 'video')
export default VideoWindow
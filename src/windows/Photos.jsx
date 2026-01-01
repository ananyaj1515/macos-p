import WindowWrapper from "#components/hoc/WindowWrapper"
import { WindowControls } from "#components"
import { photos } from "#constants"
import clsx from "clsx"
import usePhotosStore from "#store/photos"
import useWindowStore from "#store/window"

const Photos = () => {
    const {openWindow} = useWindowStore()
    const {activeLocation, setActiveLocation} = usePhotosStore()
    const renderList = (items) => items.map((item) => (
                                    <li key={item.id} onClick={() => 
                                        setActiveLocation(item)}
                                        className={clsx(item.id === activeLocation.id ? "active": "not-active")}
                                    >
                                        <img src={item.icon} className="w-4" alt={item.name}/>
                <p className="text-sm font-medium truncate">{item.name}</p>
        </li>
    ))

    // const openItem = (item) => {
    //     if (item.fileType === 'pdf'){
    //         return openWindow('resume')
    //     }
    //     if (item.kind === "folder") {
    //         return setActiveLocation(item)
    //     }
    //     if (item.fileType === 'video') {
    //         return openWindow('video', item)
    //     }
    //     if (['fig', 'url'].includes(item.fileType) && item.href) {
    //         return window.open(item.href, "_blank")
    //     }
    //     openWindow(`${item.fileType}${item.kind}`, item)
    // }
     return (
        <>
            <div id="window-header">
                <WindowControls target='photos'/>
            </div>
            <div className="flex h-full"> 
                <div className="sidebar">
                    <div>
                        <h3>Photo Albums</h3>
                        <ul>
                            {renderList(Object.values(photos))}
                        </ul>
                        
                    </div>

                </div>
                <ul className="content">
                {activeLocation?.children.map((item) => (
                    <li key={item.id} className={item.position}>
                        <img src={item.imageUrl} alt={item.name} />
                        <p> {item.name}</p>
                    </li>
                ))}
                </ul>
            </div>
        </>
    )
}

const PhotosWindow = WindowWrapper(Photos, 'photos')

export default PhotosWindow;
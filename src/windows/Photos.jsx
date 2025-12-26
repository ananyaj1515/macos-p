import WindowWrapper from "#components/hoc/WindowWrapper"
import { WindowControls } from "#components"

const Photos = () => {
     return (
        <>
            <div id="window-header">
                <WindowControls target='photos'/>
            </div>
            <div className="bg-white flex h-full"> 
                <div className="sidebar">
                    <div>
                        <h3>Photos</h3>
                        
                    </div>
                    <div>
                        <h3>Favourites</h3>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

const PhotosWindow = WindowWrapper(Photos, 'photos')

export default PhotosWindow;
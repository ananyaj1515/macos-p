import { WindowControls } from "#components"
import WindowWrapper from "#components/hoc/WindowWrapper"
import { blogPosts } from "#constants"
import { ChevronLeft, ChevronRight, PanelLeft, SearchIcon, Share, ShieldHalf, Plus, Copy, MoveRight } from "lucide-react"

const Safari = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="safari"/>
                <PanelLeft className="ml-10 icon"></PanelLeft>
                <div className="flex items-center gap-1 ml-5">
                    <ChevronLeft className="icon"></ChevronLeft>
                    <ChevronRight className="icon"/>
                </div>
                <div className="flex-1 flex-center gap-3">
                    <ShieldHalf className="icon"/>
                    <div className="search">
                        <SearchIcon className="icon">

                        </SearchIcon>
                        <input type='text' placeholder="search or enter website name" className="flex-1"/>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <Share className="icon"/>
                    <Plus className="icon"/>
                    <Copy className="icon"/>
                </div>
            </div>
            <div className="blog">
                <h2>My Developer Blog</h2>
                <div className="space-y-8">
                    {blogPosts.map(({id, image, title, date, link}) => (
                        <div key={id} className="blog-post">
                            <div className="col-span-2">
                                <img src={image} alt={title}/>
                            </div>
                            <div className="content">
                                <p>{date}</p>
                                <h3>{title}</h3>
                                <a href={link} target="_blank" rel="noopener noreferrer">Checkout the full post
                                    <MoveRight className="icon-hover"/>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

const SafariWindow = WindowWrapper(Safari, 'safari')
export default SafariWindow
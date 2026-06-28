import { WindowControls, ProjectCard } from "#components"
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
                        <input type='text' placeholder="https://www.ananyajain/projects" className="flex-1"/>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <Share className="icon"/>
                    <Plus className="icon"/>
                    <Copy className="icon"/>
                </div>
            </div>
            <div className="safari-body">
    <div className="safari-grid">

        <ProjectCard
            title="Wavelength"
            description="Summarises long email threads into actionable insights."
            src="/images/wavelength-preview.png"
            tech={["React", "Node", "OpenAI"]}
            onClick={() =>
                window.open("https://github.com/Project-Sothea", "_blank", "noopener,noreferrer")
            }
        />

        <ProjectCard
            title="MIDI Waterfall"
            description="Summarises long email threads into actionable insights."
            src="/images/midi-roll.png"
            tech={["React", "Node", "OpenAI"]}
            onClick={() =>
                window.open("https://github.com/ananyaj1515/midi-roll", "_blank", "noopener,noreferrer")
            }
        />

        <ProjectCard
            title="Project Sothea"
            description="Summarises long email threads into actionable insights."
            src="/images/sothea.png"
            tech={["React", "Node", "OpenAI"]}
            onClick={() =>
                window.open("https://github.com/Project-Sothea", "_blank", "noopener,noreferrer")
            }
        />

        <ProjectCard
            title="Project Sothea"
            description="Summarises long email threads into actionable insights."
            src="/images/sothea.png"
            tech={["React", "Node", "OpenAI"]}
            onClick={() =>
                window.open("https://github.com/Project-Sothea", "_blank", "noopener,noreferrer")
            }
        />

<ProjectCard
            title="Project Sothea"
            description="Summarises long email threads into actionable insights."
            src="/images/sothea.png"
            tech={["React", "Node", "OpenAI"]}
            onClick={() =>
                window.open("https://github.com/Project-Sothea", "_blank", "noopener,noreferrer")
            }
        />


    </div>
</div>
        </>
    )
}

const SafariWindow = WindowWrapper(Safari, 'safari')
export default SafariWindow
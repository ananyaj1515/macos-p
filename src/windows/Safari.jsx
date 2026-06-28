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
            description="A cross-platform co-living app that helps housemates stay organized and in sync. Track chores, split expenses, manage groceries, handle guests, plan activities, and coordinate schedules, all in one shared space."
            src="/images/wavelength-preview.png"
            tech={["React Native", "Typescript", "TailwindCSS", "Expo", "Appwrite", "TanStack Query"]}
            onClick={() =>
                window.open("https://github.com/Project-Sothea", "_blank", "noopener,noreferrer")
            }
        />

        <ProjectCard
            title="MIDI Waterfall"
            description="A terminal-based MIDI visualizer written in Rust that turns .mid files into a Synthesia-style falling note waterfall with a live piano keyboard in your terminal. No audio setup required, just run it and watch the notes play out visually"
            src="/images/midi-roll.png"
            tech={["Rust"]}
            onClick={() =>
                window.open("https://github.com/ananyaj1515/midi-roll", "_blank", "noopener,noreferrer")
            }
        />

        <ProjectCard
            title="Project Sothea"
            description="Asset mapping app that helps medical teams collect field data in rural villages. Record community assets, complete on-site assessments, and map critical health/infrastructure information.
"
            src="/images/sothea.png"
            tech={["React Native", "Node.js", "Expo", "Drizzle", "Typescript"]}
            onClick={() =>
                window.open("https://github.com/Project-Sothea", "_blank", "noopener,noreferrer")
            }
        />


        <ProjectCard
            title="NUS LastBus"
            description="2D platformer inspired by everyday life at NUS: Navigate iconic hills, dodge rage-inducing obstacles like FASS chickens and the Bell Curve God, and see if you can survive to catch the last bus home"
            src="/images/nus-lastbus.png"
            tech={["Unity", "C#"]}
            onClick={() =>
                window.open("https://devpost.com/software/nus-lastbus", "_blank", "noopener,noreferrer")
            }
        />

        <ProjectCard
            title="RePair"
            description="A sustainability-focused social media platform that promotes eco-friendly habits and a circular way of living. Discover nearby repair specialists and small businesses to fix, reuse, and extend the life of everyday items instead of replacing"
            src="/images/repair.png"
            tech={["React Native", "Nativewind", "Supabase", "Google Maps API"]}
            onClick={() =>
                window.open("https://github.com/Avishi-Gupta/RePair", "_blank", "noopener,noreferrer")
            }
        />

        <ProjectCard
            title="Hall Ledger"
            description="Desktop application designed for Resident Assistants to keep hall administration organized and efficient. Manage resident profiles, track remarks and demerits, and quickly find information through a keyboard-first workflow"
            src="/images/hall-legder.png"
            tech={["Java", "JavaFX", "JUnit", "Gradle"]}
            onClick={() =>
                window.open("https://ay2526s2-cs2103t-t15-1.github.io/tp/index.html", "_blank", "noopener,noreferrer")
            }
        />

        <ProjectCard
            title="Astrid Sees"
            description="Astrid is an astrology-obsssed task management CATbot. She helps you organize todos, deadlines, and events through a fun conversational interface that makes staying productive a little less mundane"
            src="/images/astrid.png"
            tech={["Java", "JUnit", "Gradle", "JavaFX"]}
            onClick={() =>
                window.open("https://ananyaj1515.github.io/ip/", "_blank", "noopener,noreferrer")
            }
        />

         <ProjectCard
            title="Course Review Summarizer"
            description={"Work In Progress...\nAI-powered course review dashboard, transforming lengthy student reviews into concise, actionable insights. Search module to quickly grasp workload, praises & complaints"}
            src="/images/loading.png"
            tech={["FastAPI", "Next.js", "PostgresSQL", "OpenAI API"]}
            onClick={() =>
                window.open("https://ay2526s2-cs2103t-t15-1.github.io/tp/index.html", "_blank", "noopener,noreferrer")
            }
        />


    

    </div>
</div>
        </>
    )
}

const SafariWindow = WindowWrapper(Safari, 'safari')
export default SafariWindow
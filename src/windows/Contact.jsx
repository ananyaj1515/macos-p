import { WindowControls } from "#components"
import WindowWrapper from "#components/hoc/WindowWrapper"
import { socials } from "#constants"
import { Camera, CookingPot, Brush, Moon } from "lucide-react"

const funFacts = [
    {
        id: 1,
        icon: Camera,
        value: "Always documenting life with my DigiCam",
        color: "#f17170"
    },
    {
        id: 2,
        icon: CookingPot,
        value: "Cooking random cravings during evenings",
        color: "#a1727a"
    },
    {
        id: 3,
        icon: Brush,
        value: "Making random voxel art on Blender",
        color: "#7a3948"
    },
    {
        id: 4,
        icon: Moon,
        value: "Dark mode always ON",
        color: "#2f1d20"
    }
]

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target='contact'/>
                <h2>Contact Me</h2>
            </div>
            <div className="p-5 space-y-5 bg-black">
                <div className="flex items-center gap-6">
                    <div>
                        <h3 className="text-white">Let's connect</h3>
                        <p className="text-white">ananyaj1515@gmail.com</p>
                        <p className="text-white">ananya.jain@u.nus.edu</p>
                    </div>
                    <img src="/images/ananya.jpg" alt="adrian" className="w-20 rounded-full"/>
                    
                </div>
                
               
                <ul>
                    {socials.map(({id, bg, link, icon, text}) => (
                        <li key={id} style={{backgroundColor: bg}}>
                            <a href={link} target="_blank" rel = "noopener noreferrer" title={text} className="text-white">
                                <img src={icon} alt={text} className="size-5">
                                </img>
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
                <hr style={{ border: '0', height: '1px', backgroundColor: '#ccc', margin: '20px 0' }} />
                <ul className="grid grid-cols-1">
                    {funFacts.map(({id, icon: Icon, value, color}) => (
                        <li key={id} style={{backgroundColor: color}} className="flex flex-row justify-between gap-3 w-full h-full">
                            <Icon size={20} color="white"/>
                            <p >{value}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

const ContactWindow = WindowWrapper(Contact, 'contact')
export default ContactWindow
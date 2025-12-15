import { WindowControls } from "#components"
import WindowWrapper from "#components/hoc/WindowWrapper"
import { socials } from "#constants"

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
                        <p className="text-white">Got an idea or a bug to squash? I'm in!</p>
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
            </div>

        </>
    )
}

const ContactWindow = WindowWrapper(Contact, 'contact')
export default ContactWindow
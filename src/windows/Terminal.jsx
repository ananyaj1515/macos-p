import { WindowControls } from "#components";
import WindowWrapper from "#components/hoc/WindowWrapper"
import { techStack } from "#constants";
import { CheckIcon, FlagIcon } from "lucide-react";

const Terminal = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="terminal"/>
                <h2 className="text-black">Tech Stack</h2>
            </div>
            <div className="techstack">
                <p className="flex-col">
                    Last login: Mon 15 May on 00:00:00 <br></br>
                    <span className="font-bold"> ananyajain@Ananyas-MacBook-Air %</span>
                    show tech stack
                </p>
                <div className="label">
                    <p className="w-32">
                        Category
                    </p>
                    <p>Technologies</p>
                </div>
                <ul className="content ">
                    {techStack.map(({category, items}) => (
                        <li className="flex items-center" key="Category">
                            <CheckIcon className="check" size={20}/>
                            <h3>{category}</h3>
                            <ul>
                                {items.map((item, i) => (
                                    <li key={i}>{item}{i < items.length - 1 ? ',': ''}</li>
                                ))}
                            </ul>
                           
                        </li>
                    ))}
                </ul>
                 <div className="footnote">
                    <p>
                        <CheckIcon size={20} /> 5/5 stacks loaded successfully (100%)
                    </p>
                    <p className="text-white">
                        <FlagIcon size={15} fill="red" />
                        Render time: 6 ms
                    </p>
                </div>
            </div>
        </>
    )
}

const TerminalWindow = WindowWrapper(Terminal, 'terminal')

export default TerminalWindow;
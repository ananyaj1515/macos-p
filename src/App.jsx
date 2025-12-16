import { Navbar, Welcome, Dock, LiquidGradientBackground } from "#components";
import { Safari, Terminal, Resume, Finder, Text, Image, Contact, Video, } from "#windows";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";


gsap.registerPlugin(Draggable);

const App  = () => {
  return (
    <main>
      <LiquidGradientBackground />
      <Navbar></Navbar>
      <Welcome></Welcome>
      <Dock></Dock>
      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Contact/>
      <Video/>
    </main>
  )
}

export default App;
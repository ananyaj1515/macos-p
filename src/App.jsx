import { Navbar, Welcome, Dock, LiquidGradientBackground, Widget } from "#components";
import { Safari, Terminal, Resume, Finder, Text, Image, Contact, Video, Photos, Calendar, Notes } from "#windows";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";


gsap.registerPlugin(Draggable);

const App  = () => {
  return (
    <main>
      <LiquidGradientBackground />
      
      <Navbar></Navbar>
      <Widget/>
      <Welcome></Welcome>
      <Dock></Dock>
      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Contact/>
      <Calendar/>
      <Video/>
      <Photos/>
      <Notes/>
    </main>
  )
}

export default App;
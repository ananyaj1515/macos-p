import { Navbar, Welcome, Dock } from "#components";
import { Terminal } from "#windows";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const App  = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <Dock></Dock>
      
      <Terminal/>
    </main>
  )
}

export default App;
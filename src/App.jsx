import { Navbar, Welcome, Dock } from "#components";
import { Safari, Terminal } from "#windows";
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
      <Safari/>
    </main>
  )
}

export default App;
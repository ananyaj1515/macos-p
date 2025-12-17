import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
const FONT_WEIGHTS = {
    subtitle: {min: 100, max: 400, default: 100},
    title: {min: 400, max: 900, default: 400},
    text: {min: 100, max: 400, default: 100},
}

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span key = {i} className={className} style={{
            fontVariationSettings: `'wght' ${baseWeight}`
        }}>
            {char == "" ? '\u00A0': char}
        </span>
    ))
}

const setupTextHover = (container, type) => {
    if (!container) {return () => {}}
    const letters = container.querySelectorAll("span");
    const {min, max, default: base} = FONT_WEIGHTS[type]

    const animateLetter = (letter, weight, duration= 0.25) => {
        return gsap.to(letter, {duration, ease: 'power2.out', fontVariationSettings: `'wght' ${weight}`})
    }

    const handleMouseMove = (e) => {
        const {left} = container.getBoundingClientRect()
        const mouseX = e.clientX - left;
        letters.forEach((letter) => {
            const {left: l, width: w, } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + (w / 2)))
            const intensity = Math.exp(-(distance ** 2) / 2000)

            animateLetter(letter, min + (max - min) * intensity);
        })
    }

    const handleMouseLeave = (e) => letters.forEach((letter) => animateLetter(letter, base, 0.3))
    

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseleave", handleMouseLeave)
    }
}

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const textRef = useRef(null);
      
    useGSAP(() => {
        const titleCleanup = setupTextHover(titleRef.current, 'title')
        const subtitleCleanup = setupTextHover(subtitleRef.current, 'subtitle')
        const textCleanup = setupTextHover(textRef.current, 'text')

        return () => {
            subtitleCleanup();
            titleCleanup();
            textCleanup();
        }
    }, [])

    return <section id="welcome">
        <h2 ref={subtitleRef}>
            {renderText("Hey, I'm Ananya! Welcome to my", 'text-2xl font-georama', 100)}
        </h2>
        <h1 ref={titleRef} className="mt-7"> {renderText("portfolio", "text-9xl font-georama italic")}</h1>
        <h2 className="p-10"ref={textRef}>
            {renderText("Click the icons below to find out more!", 'text-2xl font-georama', 100)}
        </h2>
        <div className="small-screen">
            <p>This portfolio is designed for desktop/tablet sreens only!</p>
        </div>
    </section>
}

export default Welcome
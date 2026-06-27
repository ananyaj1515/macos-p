import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ImageWidget, NoteWidget } from "#components"
import { MoveDown } from "lucide-react"

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
      
    useEffect(() => {
        const titleCleanup = setupTextHover(titleRef.current, 'title')
        const subtitleCleanup = setupTextHover(subtitleRef.current, 'subtitle')
        const textCleanup = setupTextHover(textRef.current, 'text')

        return () => {
            subtitleCleanup();
            titleCleanup();
            textCleanup();
        }
    }, [])

    return (
    <div className="flex min-h-screen items-start justify-center px-10 pt-40">
            <div className="flex w-full max-w-7xl items-start justify-between gap-20">
                <ImageWidget />
                <section id="welcome" className="flex-1 text-center">
                    <h2 ref={subtitleRef}>
                        {renderText("Welcome to my Desktop! \n I'm", 'text-2xl font-georama bold', 100)}
                    </h2>
                    <h1 ref={titleRef} className="mt-7"> {renderText("Ananya", "text-9xl font-georama ")}</h1>
                    <h2 className="p-10"ref={textRef}>
                        {renderText("Click the icons below to find out more", 'text-2xl font-georama', 100)}
                    </h2>
                    <MoveDown/>
                    
                    <div className="small-screen">
                        <p>This portfolio is designed for desktop/tablet sreens only!</p>
                    </div>
                    
                </section>
                <NoteWidget/>
            </div>
    </div>
    )

}

export default Welcome
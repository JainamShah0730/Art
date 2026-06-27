import { useState } from "react"


export default function TextScrambler({ text }) {
    const [display, setDisplay] = useState(text)

    const scrambleChars =
        "!<>-_\\[]{}-=+*^?#@"

    const scramble = () => {
        let iteration = 0;

        const interval = setInterval(() => {

            setDisplay(
                text
                    .split("")
                    .map((char, index) => {

                        if (index < iteration) {
                            return text[index]
                        }
                        return scrambleChars[
                            Math.floor(
                                Math.random() * scrambleChars.length
                            )
                        ]
                    })

                    .join("")
            )

            iteration += 0.4

            if (iteration >= text.length) {
                clearInterval(interval)
                setDisplay(text)
            }

        }, 50)
    }

    return (
        <span onMouseEnter={scramble}
            className='cursor-pointer font-mono tracking-widest'>
            {display}
        </span>
    )
}
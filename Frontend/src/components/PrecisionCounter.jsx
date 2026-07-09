import { useState, useEffect } from "react"


export default function PrecisionCounter() {
    const startDate = new Date("2023-08-01T00:00:00")

    const [years, setYears] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date()

            const difference = now - startDate;

            const millisecondsInYear =
                1000 * 60 * 60 * 24 * 365.25

            const calculatedYears =
                difference / millisecondsInYear;

            setYears(calculatedYears)


        }, 50)

        return () => clearInterval(interval)
    }, [])
    return (
        <div className="font-mono text-[10px] tracking-tight opacity-40 dark:opacity-60 uppercase text-[#1A1A1A] dark:text-[#E8E8E8]">
            In the Arena for{" "}
            <span className="font-bold text-[#1A1A1A] dark:text-white tabular-nums">
                {years.toFixed(9)}
            </span>{" "}
            years
        </div>
    )
}

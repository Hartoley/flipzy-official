import { useState, useEffect } from "react";

export default function useTypingText(text, speed = 30) {
    const [display, setDisplay] = useState("");

    useEffect(() => {
        setDisplay(""); // restart typing when text changes
        let i = 0;

        const interval = setInterval(() => {
            setDisplay((prev) => prev + text.charAt(i));
            i++;

            if (i >= text.length) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return display;
}

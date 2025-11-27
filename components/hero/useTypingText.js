import { useState, useEffect, useRef } from "react";

export default function useTypingText(text = "", speed = 30) {
    const [display, setDisplay] = useState("");
    const indexRef = useRef(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        setDisplay("");
        indexRef.current = 0;

        // clear any previous timeout
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        const tick = () => {
            const i = indexRef.current;

            if (i < text.length) {
                setDisplay(text.slice(0, i + 1));
                indexRef.current = i + 1;

                timeoutRef.current = setTimeout(tick, speed);
            } else {
                timeoutRef.current = null;
            }
        };

        tick(); // start immediately

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [text, speed]);

    return display;
}

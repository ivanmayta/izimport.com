import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export function highlightedText(text, keywords, styles) {
    return text.split(" ").map((word, index) => {
        const isKeyword = keywords.includes(word)
        return (
            <span
                key={index}
                className={cn(isKeyword && styles, index > 0 && "ml-1")}
            >
                {word}{" "}
            </span>
        )
    })
}

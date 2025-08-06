import React from "react"
import type { SVGProps } from "react"

export function DetailsIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="currentColor"
                d="M3 9a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"
            ></path>
        </svg>
    )
}

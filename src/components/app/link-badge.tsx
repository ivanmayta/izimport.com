import { getFrontEndUrl } from "@/lib/utils"
import { ArrowUpRightFromSquareIcon } from "lucide-react"
import Link from "next/link"
const BASE_URL = getFrontEndUrl()
export const LinkBadgeBusiness = ({ username }: { username: string }) => {
    return (
        <Link
            className=""
            href={`${BASE_URL}/${username}`}
            target="_blank"
            hidden={!username}
        >
            <button className="flex py-1  justify-center items-center   hover:scale-105 transition-transform px-4 border rounded-md font-semibold">
                {username}
                <ArrowUpRightFromSquareIcon className="ml-2 size-4" />
            </button>
        </Link>
    )
}

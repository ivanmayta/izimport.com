import { redirect } from "next/navigation"
import { APP_URLS } from "@/config"

export default function Page() {
    redirect(`${APP_URLS.base}/terminos-y-condiciones`)
}

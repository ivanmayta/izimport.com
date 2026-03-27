import { Facebook } from "@/icons/facebook"
import { Instagram } from "@/icons/instagram"
import { Tiktok } from "@/icons/tiktok"
import { Whatsapp } from "@/icons/whatsapp"
import { MapPin, Phone, Truck } from "lucide-react"
import { Profile } from "@/types/profile"
import ProfileRoot from "@/app/business/_components/ui/profile"
import { DetailsIcon } from "@/icons/details-icon"
import { WHATSAPP_COUNTRY_CODE } from "@/config"

export default async function ProfileHero({ data }: { data: Profile }) {
    const {
        username,
        name,
        description,
        address,
        whatsapp,
        image_url,
        social_urls,
    } = data

    const potentialSocialLinks = [
        {
            platform: "facebook",
            username: social_urls?.facebook,
            href: social_urls?.facebook
                ? `https://www.facebook.com/${social_urls.facebook}`
                : undefined,
            icon: <Facebook className="size-4" />,
        },
        {
            platform: "instagram",
            username: social_urls?.instagram,
            href: social_urls?.instagram
                ? `https://www.instagram.com/${social_urls.instagram}`
                : undefined,
            icon: <Instagram className="size-4" />,
        },
        {
            platform: "tiktok",
            username: social_urls?.tiktok,
            href: social_urls?.tiktok
                ? `https://www.tiktok.com/${social_urls.tiktok}`
                : undefined,
            icon: <Tiktok className="size-4" />,
        },
    ]

    const socialLinks = [
        ...potentialSocialLinks.filter(
            (link) => link.username && link.username.trim() !== "" && link.href
        ),
        {
            href: `https://wa.me/${WHATSAPP_COUNTRY_CODE}${whatsapp}?text=Hola%20${name}%20me%20interesa%20un%20producto`,
            icon: <Whatsapp className="size-4" />,
            label: "WhatsApp",
        },
    ]

    const contactItems = [
        { icon: <MapPin />, text: address },
        { icon: <Phone />, text: whatsapp },
        { icon: <Truck />, text: "Envíos nacionales" },
    ]

    return (
        <ProfileRoot>
            <ProfileRoot.CartButton />

            {/* Main info area */}
            <div className="p-6 sm:p-8 pr-32 sm:pr-44">
                <div className="flex gap-5 sm:gap-6 items-start">
                    <ProfileRoot.Image
                        src={image_url}
                        alt={name}
                        width={140}
                        height={140}
                    />
                    <div className="flex-1 min-w-0 space-y-3 pt-1">
                        <ProfileRoot.Title username={username}>
                            {name}
                        </ProfileRoot.Title>
                        <ProfileRoot.SocialLinks links={socialLinks} />
                        {description && (
                            <ProfileRoot.Description icon={<DetailsIcon />}>
                                {description}
                            </ProfileRoot.Description>
                        )}
                    </div>
                </div>
            </div>

            {/* Contact strip */}
            <div className="border-t border-zinc-100 bg-zinc-50/60 px-6 sm:px-8 py-4">
                <ProfileRoot.ContactInfo items={contactItems} />
            </div>
        </ProfileRoot>
    )
}

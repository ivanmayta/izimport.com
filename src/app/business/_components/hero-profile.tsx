import { Facebook } from "@/icons/facebook"
import { Instagram } from "@/icons/instagram"
import { Tiktok } from "@/icons/tiktok"
import { Whatsapp } from "@/icons/whatsapp"
import { MapPin, Phone, Truck } from "lucide-react"
import { Profile } from "@/types/profile"
import ProfileRoot from "@/app/business/_components/ui/profile"
import { DetailsIcon } from "@/icons/details-icon"

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
    console.log("social_urls from profile hero", social_urls)

    // Create an array of potential social links
    const potentialSocialLinks = [
        {
            platform: "facebook",
            username: social_urls?.facebook,
            href: social_urls?.facebook
                ? `https://www.facebook.com/${social_urls.facebook}`
                : undefined,
            icon: (
                <Facebook className="size-8 hover:text-blue-400 transition-colors cursor-pointer" />
            ),
        },
        {
            platform: "instagram",
            username: social_urls?.instagram,
            href: social_urls?.instagram
                ? `https://www.instagram.com/${social_urls.instagram}`
                : undefined,
            icon: (
                <Instagram className="size-8 hover:text-rose-400 transition-colors cursor-pointer" />
            ),
        },
        {
            platform: "tiktok",
            username: social_urls?.tiktok,
            href: social_urls?.tiktok
                ? `https://www.tiktok.com/${social_urls.tiktok}`
                : undefined,
            icon: (
                <Tiktok className="size-8 hover:text-gray-400 transition-colors cursor-pointer" />
            ),
        },
    ]

    // Filter out social links with empty or undefined usernames and always include WhatsApp
    const socialLinks = [
        ...potentialSocialLinks.filter(
            (link) => link.username && link.username.trim() !== "" && link.href
        ),
        {
            href: `https://wa.me/51${whatsapp}?text=Hola%20${name}%20me%20interesa%20un%20producto`,
            icon: <Whatsapp className="size-7 " />,
            label: "Mensaje",
        },
    ]

    const contactItems = [
        { icon: <MapPin />, text: address },
        { icon: <Phone />, text: whatsapp },
        { icon: <Truck />, text: "Envíos nacionales" },
    ]

    return (
        <>
            <ProfileRoot>
                <ProfileRoot.CartButton />
                <ProfileRoot.Image
                    src={image_url}
                    alt="logo"
                    width={125}
                    height={125}
                />
                <div className="flex-1">
                    <div className="flex gap-2 w-full flex-col items-center md:items-start md:flex-row text-center md:text-left ">
                        <div className="flex-1 space-y-2">
                            <ProfileRoot.Title username={username}>
                                {name}
                            </ProfileRoot.Title>
                            <ProfileRoot.SocialLinks links={socialLinks} />
                        </div>
                        <div className="flex-1 flex justify-center">
                            <ProfileRoot.ContactInfo items={contactItems} />
                        </div>
                    </div>
                    <ProfileRoot.Description
                        icon={
                            <DetailsIcon className="size-7 md:self-start self-center" />
                        }
                    >
                        {description}
                    </ProfileRoot.Description>
                </div>
            </ProfileRoot>
        </>
    )
}

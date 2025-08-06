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
        socials,
    } = data

    const socialLinks = [
        {
            href: socials?.facebook,
            icon: (
                <Facebook className="size-8 hover:text-blue-400 transition-colors cursor-pointer" />
            ),
        },
        {
            href: socials?.instagram,
            icon: (
                <Instagram className="size-8 hover:text-rose-400 transition-colors cursor-pointer" />
            ),
        },
        {
            href: socials?.tiktok,
            icon: (
                <Tiktok className="size-8 hover:text-gray-400 transition-colors cursor-pointer" />
            ),
        },
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
                            <ProfileRoot.Title username={username}>{name}</ProfileRoot.Title>
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

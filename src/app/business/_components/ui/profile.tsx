// components/Profile/index.tsx
import { cn } from "@/lib/utils"
import { Building2, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { ReactNode } from "react"
import CartSheet from "../cart-sheet"

interface ProfileProps {
    children: ReactNode
    className?: string
}

interface ProfileComponent extends React.FC<ProfileProps> {
    Image: typeof ProfileImage
    Title: typeof ProfileTitle
    SocialLinks: typeof ProfileSocialLinks
    ContactInfo: typeof ProfileContactInfo
    Description: typeof ProfileDescription
    CartButton: typeof ProfileCartButton
}

const Profile: ProfileComponent = ({ children, className = "" }) => {
    return (
        <section
            className={cn(
                "mt-4 relative flex items-center py-10 max-w-5xl mx-auto border-t-1 border-zinc-400 dark:border-rose-200/20 md:gap-14 gap-4 flex-col md:flex-row sm:px-0 px-4 ",
                className
            )}
        >
            {children}
        </section>
    )
}

// Image Component
interface ProfileImageProps {
    src: string
    alt: string
    width?: number
    height?: number
    className?: string
}

const ProfileImage = ({
    src,
    alt,
    width = 100,
    height = 100,
    className = "",
}: ProfileImageProps) => (
    <div className={`flex border rounded-xl p-2 aspect-square ${className}`}>
        {src !== "" ? (
            <Image
                className="aspect-square w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover"
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        ) : (
            <div className="flex items-center justify-center aspect-square w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gray-300 text-muted-foreground">
                <Building2 className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32" />
            </div>
        )}
    </div>
)

// Title Component
interface ProfileTitleProps {
    children: ReactNode
    className?: string
    username?: string
}

const ProfileTitle = ({
    children,
    className = "",
    username,
}: ProfileTitleProps) => (
    <h1 className={`text-3xl font-semibold ${className}`}>
        {children}
        {username && (
            <p className="text-sm text-muted-foreground">@{username}</p>
        )}
    </h1>
)

// Social Links Component
interface SocialLink {
    href: string | undefined
    icon: ReactNode
    label?: string
}

interface ProfileSocialLinksProps {
    links: SocialLink[]
    className?: string
}

const ProfileSocialLinks = ({
    links,
    className = "",
}: ProfileSocialLinksProps) => (
    <div className={`group flex gap-2 items-center ${className}`}>
        {links.map((link, index) => (
            <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                    link.label
                        ? " flex items-center gap-2 px-4 py-0.5 border  rounded-lg text-green-500 border-green-500  hover:text-white hover:bg-green-600 ease-in-out transition-all"
                        : ""
                }
            >
                {link.icon}
                {link.label && <span>{link.label}</span>}
            </a>
        ))}
    </div>
)

// Contact Info Component
interface ContactItem {
    icon: ReactNode
    text: string
}

interface ProfileContactInfoProps {
    items: ContactItem[]
    className?: string
}

const ProfileContactInfo = ({
    items,
    className = "",
}: ProfileContactInfoProps) => (
    <ul className={`flex text-xs  gap-2 md:flex-col flex-row  ${className}`}>
        {items.map((item, index) => (
            <li key={index} className="flex gap-2 items-center">
                {item.icon}
                <span>{item.text}</span>
            </li>
        ))}
    </ul>
)

// Description Component
interface ProfileDescriptionProps {
    children: ReactNode
    className?: string
    icon?: ReactNode
}

const ProfileDescription = ({
    children,
    icon,
    className = "",
}: ProfileDescriptionProps) => (
    <div className={cn("flex flex-col text-center md:text-left", className)}>
        {icon && icon}
        <p className="max-w-[64ch] text-sm flex-1 text-pretty">{children}</p>
    </div>
)

// Cart Button Component
interface ProfileCartButtonProps {
    onClick?: () => void
    className?: string
    icon?: ReactNode
}

const ProfileCartButton = ({
    className = "",
    icon,
}: ProfileCartButtonProps) => (
    <div className={`absolute top-4 right-3 cursor-pointer ${className}`}>
        <CartSheet>
            {icon || (
                <ShoppingCart className="size-6 hover:text-rose-300 transition-colors cursor-pointer" />
            )}
        </CartSheet>
    </div>
)

// Assign compound components
Profile.Image = ProfileImage
Profile.Title = ProfileTitle
Profile.SocialLinks = ProfileSocialLinks
Profile.ContactInfo = ProfileContactInfo
Profile.Description = ProfileDescription
Profile.CartButton = ProfileCartButton

export default Profile

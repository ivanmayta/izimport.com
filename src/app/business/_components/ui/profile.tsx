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
        <section className={cn("max-w-5xl mx-auto px-4 sm:px-6 py-8", className)}>
            <div className="relative bg-white border border-zinc-100 rounded-2xl shadow-sm overflow-hidden">
                {children}
            </div>
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
    <div className={cn("shrink-0", className)}>
        {src !== "" ? (
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden ring-1 ring-zinc-200 bg-zinc-100">
                <Image
                    className="w-full h-full object-cover"
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                />
            </div>
        ) : (
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl bg-zinc-100 ring-1 ring-zinc-200 flex items-center justify-center">
                <Building2 className="w-10 h-10 text-zinc-400" />
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
    <div className={cn("space-y-1", className)}>
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight leading-tight">
            {children}
        </h1>
        {username && (
            <span className="inline-block text-sm font-semibold text-zinc-400 tracking-wide">
                @{username}
            </span>
        )}
    </div>
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
    <div className={cn("flex flex-wrap gap-2 items-center", className)}>
        {links.map((link, index) =>
            link.label ? (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold transition-colors shadow-sm"
                >
                    {link.icon}
                    <span>{link.label}</span>
                </a>
            ) : (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-500 transition-colors"
                >
                    {link.icon}
                </a>
            )
        )}
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
    <div className={cn("flex flex-wrap items-center gap-x-6 gap-y-2", className)}>
        {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-zinc-500">
                <span className="text-zinc-400 shrink-0 [&>svg]:w-4 [&>svg]:h-4">{item.icon}</span>
                <span>{item.text}</span>
            </div>
        ))}
    </div>
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
    <div className={cn("flex gap-2 items-start", className)}>
        {icon && <span className="text-zinc-400 shrink-0 mt-0.5 [&>svg]:w-4 [&>svg]:h-4">{icon}</span>}
        <p className="text-base text-zinc-500 leading-relaxed text-pretty">
            {children}
        </p>
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
    <div className={cn("absolute top-5 right-5 sm:top-6 sm:right-6 z-10", className)}>
        <CartSheet>
            {icon || (
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50 transition-all cursor-pointer shadow-sm">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="text-sm font-bold hidden sm:inline">Carrito</span>
                </div>
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

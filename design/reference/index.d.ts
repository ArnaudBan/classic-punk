// Classic Punk — window.ClassicPunk. Types as documentation. Wrap pages in an element with class "cp-root".
import type { ReactNode, CSSProperties, ChangeEventHandler, MouseEventHandler } from "react";

export type IconName = "mail" | "arrow-right" | "external" | "mac" | "iphone" | "lock" | "check" | "chevron-down" | "menu" | "close" | "alert";
export type Status = "available" | "soon" | "dev" | "neutral";

export interface LogoProps { variant?: "horizontal" | "symbol" | "square"; tone?: "light" | "dark" | "black" | "white"; height?: number; title?: string; className?: string }
export interface IconProps { name: IconName; size?: number; title?: string; className?: string }
export interface ButtonProps { variant?: "primary" | "secondary" | "accent" | "inverse"; size?: "md" | "lg"; href?: string; target?: string; type?: "button" | "submit"; icon?: IconName; iconAfter?: IconName; soon?: boolean; disabled?: boolean; onClick?: MouseEventHandler; className?: string; children: ReactNode }
export interface ButtonGroupProps { children: ReactNode; className?: string }
export interface TextLinkProps { href: string; external?: boolean; className?: string; children: ReactNode }
export interface BadgeProps { status?: Status; className?: string; children?: ReactNode }
export interface CreditsProps { items: ReactNode[]; className?: string }
export interface SectionHeadProps { number?: string; eyebrow?: ReactNode; title: ReactNode; intro?: ReactNode; as?: "h1" | "h2" | "h3"; id?: string; className?: string }
export interface AppCardProps { catalog: string; side?: string; platform: string; name: string; endorsement?: string; tagline?: ReactNode; description?: ReactNode; status?: Status; statusLabel?: string; href?: string; linkLabel?: string; guestColor?: string; className?: string }
export interface Track { title: ReactNode; text?: ReactNode; number?: string }
export interface TrackListProps { items: Track[]; side?: string; columns?: number; className?: string }
export interface ManifestoProps { left: { title: string; items: Track[] }; right: { title: string; items: Track[] }; outro?: ReactNode; className?: string }
export interface StatsProps { items: { value: ReactNode; label: ReactNode }[]; className?: string }
export interface SloganBannerProps { tone?: "inverse" | "accent"; className?: string; children: ReactNode }
export interface AplatProps { width?: number; height?: number; style?: CSSProperties; className?: string }
export interface HighlightProps { children: ReactNode; className?: string }
export interface MarkerProps { children: ReactNode; style?: CSSProperties; className?: string }
export interface StrikeProps { children: ReactNode; className?: string }
export interface FieldProps { name: string; label: ReactNode; type?: "text" | "email" | "select" | "textarea"; id?: string; options?: (string | { value: string; label: string })[]; required?: boolean; help?: ReactNode; error?: ReactNode; placeholder?: string; value?: string; defaultValue?: string; onChange?: ChangeEventHandler; disabled?: boolean; className?: string }
export interface NoticeProps { tone?: "success" | "error"; title?: ReactNode; className?: string; children?: ReactNode }
export interface FaqProps { items: { q: ReactNode; a: ReactNode; open?: boolean }[]; className?: string }
export interface PriceTableProps { plans: { name: string; price: string; note?: string; highlight?: boolean }[]; rows?: { label: ReactNode; values: (ReactNode | true)[] }[]; priceLabel?: string; caption?: string; className?: string }
export interface SiteHeaderProps { current?: string; links?: { label: string; href: string }[]; cta?: { label: string; href: string }; homeHref?: string; compact?: boolean; defaultOpen?: boolean; className?: string }
export interface SiteFooterProps { signature?: ReactNode; text?: ReactNode; links?: { label: string; href: string }[]; copyright?: string; catalog?: string; className?: string }

import type {Header} from "@/components/headers/guest-layout-header/guest-layout-header.d"
import {Footer} from "@/layouts/_components/footers/layout-footer/layout-footer";

export type GuestLayoutProps = {
    children: JSX.Element
    header?: Header
    footer?: Footer
}

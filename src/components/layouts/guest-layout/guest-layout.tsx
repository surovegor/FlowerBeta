import { FC } from "react"
import type { GuestLayoutProps } from "./guest-layout.d"
import { LayoutHeader } from "@/layouts/_components/headers/layout-header"
import { LayoutFooter } from "@/layouts/_components/footers/layout-footer"

export const GuestLayout: FC<GuestLayoutProps> = ({
	children,
	header,
	footer,
}) => {
	return (
		<div className="flex flex-col min-h-screen">
			<LayoutHeader header={header} />
			{children}
			<LayoutFooter footer={footer} />
		</div>
	)
}

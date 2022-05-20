import { FC } from "react"
import type { AuthLayoutProps } from "./auth-layout.d"
import { LayoutFooter } from "@/layouts/_components/footers/layout-footer"
import { AuthHeader } from "@/layouts/_components/headers/auth-header"

export const AuthLayout: FC<AuthLayoutProps> = ({
	children,
	onlyLogin,
	onlyRegister,
}) => {
	return (
		<div className="flex flex-col min-h-screen">
			<AuthHeader onlyLogin={onlyLogin} onlyRegister={onlyRegister} />
			<div className="flex-grow py-10">{children}</div>
			<LayoutFooter footer={"auth"} transparent />
		</div>
	)
}

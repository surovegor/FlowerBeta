import { FC } from "react"
import type { AuthHeaderProps } from "./auth-header.d"
import { Icon } from "@/components/common/icon"
import { HeaderUserMenu } from "@/components/common/header-user-menu"

export const AuthHeader: FC<AuthHeaderProps> = ({
	onlyRegister = false,
	onlyLogin = false,
}) => {
	return (
		<header className="flex gap-9 items-center justify-between w-full h-full px-5 py-2.5">
			<div className="p-1.5">
				<Icon
					section={"icons"}
					name={"logo"}
					className="w-9 h-9 text-gray dark:text-gray-100"
				/>
			</div>

			<HeaderUserMenu onlyRegister={onlyRegister} onlyLogin={onlyLogin} />
		</header>
	)
}

import dynamic from "next/dynamic"
import type { EmployerHeaderProps } from "./employer-header"
import type { DefaultHeaderProps } from "./default-header"
import type { HrHeaderProps } from "./hr-header"
import type { AuthHeaderProps } from "./auth-header"

export interface LibraryData {
	EmployerHeader: EmployerHeaderProps
	DefaultHeader: DefaultHeaderProps
	HrHeader: HrHeaderProps
	AuthHeader: AuthHeaderProps
}

export const Library: Record<keyof LibraryData, any> = {
	AuthHeader: dynamic<AuthHeaderProps>(() =>
		import("@/layouts/_components/headers/auth-header").then((mod) => mod.AuthHeader)
	),
	DefaultHeader: dynamic<DefaultHeaderProps>(() =>
		import("@/layouts/_components/headers/default-header").then(
			(mod) => mod.DefaultHeader
		)
	),
	EmployerHeader: dynamic<EmployerHeaderProps>(() =>
		import("@/layouts/_components/headers/employer-header").then(
			(mod) => mod.EmployerHeader
		)
	),
	HrHeader: dynamic<HrHeaderProps>(() =>
		import("@/layouts/_components/headers/hr-header").then((mod) => mod.HrHeader)
	),
}

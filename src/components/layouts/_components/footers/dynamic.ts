import dynamic from "next/dynamic"
import type { LkFooterProps } from "./lk-footer"
import type { DefaultFooterProps } from "./default-footer"
import type { AuthFooterProps } from "./auth-footer"

export interface LibraryData {
	EmployerFooter: LkFooterProps
	DefaultFooter: DefaultFooterProps
	AuthFooter: AuthFooterProps
}

export const Library: Record<keyof LibraryData, any> = {
	AuthFooter: dynamic<AuthFooterProps>(() =>
		import("@/layouts/_components/footers/auth-footer").then(
			(mod) => mod.AuthFooter
		)
	),
	DefaultFooter: dynamic<DefaultFooterProps>(() =>
		import("@/layouts/_components/footers/default-footer").then(
			(mod) => mod.DefaultFooter
		)
	),
	EmployerFooter: dynamic<LkFooterProps>(() =>
		import("@/layouts/_components/footers/lk-footer").then(
			(mod) => mod.LkFooter
		)
	),
}

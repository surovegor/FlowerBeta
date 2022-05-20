import { FC } from "react"
import { HeaderCurrentWalletProps } from "./header-current-wallet.d"

const HeaderCurrentWallet: FC<HeaderCurrentWalletProps> = ({ children }) => {
	return (
		<span
			className={
				"bg-primary text-sm py-1.5 px-3 rounded-full text-white dark:text-content-contrast"
			}
		>
			{children}
		</span>
	)
}

export { HeaderCurrentWallet }

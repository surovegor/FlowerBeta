import Button from "@/components/ui/Button"
import { Icon } from "@/components/common/icon"
import { NotificationProps } from "./notification.d"
import { FC } from "react"
import { cc } from "@/utils/classnames"

export const Notification: FC<NotificationProps> = ({ className, counter }) => {
	return (
		<Button
			variant="transparent"
			sizes="p-3 rounded-lg"
			className={cc(["relative hover:shadow-none", className])}
		>
			<Icon name={"bell"} className="w-4 h-4" />
			<span className="bg-primary py-1 px-1.5 text-xs text-white font-bold leading-none rounded absolute -top-2.5 right-0 transform translate-x-1/2 dark:shadow">
				{counter}
			</span>
		</Button>
	)
}

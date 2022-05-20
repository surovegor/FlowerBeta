import {
	forwardRef,
	ButtonHTMLAttributes,
	JSXElementConstructor,
	useRef,
	FC,
} from "react"
import mergeRefs from "react-merge-refs"
import { cc } from "@/utils/classnames"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	href?: string
	className?: string
	sizes?: string
	variant?: "default" | "transparent" | "outline" | "inline"
	active?: boolean
	type?: "submit" | "reset" | "button"
	Component?: string | JSXElementConstructor<any>
	width?: string | number
	loading?: boolean
	disabled?: boolean
}

// eslint-disable-next-line react/display-name
const Button: FC<ButtonProps> = forwardRef((props, buttonRef) => {
	const {
		className,
		sizes,
		variant = "default",
		type = "button",
		children,
		active,
		width,
		loading = false,
		disabled = false,
		style = {},
		Component = "button",
		...rest
	} = props
	const ref = useRef<typeof Component>(null)

	const rootClassName = cc([
		// Base
		"btn group",
		// Default
		variant === "default" && "btn-primary",
		// Outline
		variant === "outline" && "btn-outline",
		// Transparent
		variant === "transparent" && "btn-transparent",
		// Inline
		variant === "inline" && "btn-inline border-none p-0",
		// Sizes
		sizes || variant === "inline" ? sizes : "px-6 py-3 rounded-xl min-h-[46px]",
		// States
		loading && "loading",
		disabled && "opacity-40",
		className,
	])

	return (
		<Component
			aria-pressed={active}
			ref={mergeRefs([ref, buttonRef])}
			className={rootClassName}
			disabled={disabled}
			type={type}
			style={{
				width,
				...style,
			}}
			{...rest}
		>
			{children}
		</Component>
	)
})

export default Button

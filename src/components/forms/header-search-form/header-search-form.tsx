import { FC } from "react"
import type { HeaderSearchFormProps } from "./header-search-form.d"
import { Icon } from "@/components/common/icon"

export const HeaderSearchForm: FC<HeaderSearchFormProps> = ({
	placeholder = "Поиск вакансии или компании",
}) => {
	const handleSubmit = () => {
		console.log("submit")
	}
	return (
		<form onSubmit={handleSubmit} autoComplete={"off"}>
			<div className="form-control">
				<label className="relative block">
					<span className="sr-only">Search</span>
					<input
						className="shadow placeholder:text-content block w-full bg-field-base py-2.5 pl-14 pr-6 rounded-4xl peer focus-within:shadow-none focus:outline-none focus:ring-primary-200 dark:focus:ring-gray-200 dark:text-white focus:ring-1 sm:text-sm"
						placeholder={placeholder}
						type="text"
						name="search"
					/>
					<span className="absolute inset-y-0 left-0 flex items-center pl-6 text-primary peer-hover:text-gray peer-focus-within:text-gray dark:peer-hover:text-gray-100 dark:peer-focus-within:text-gray-100 transition-colors peer-placeholder-shown:text-content">
						<Icon name="search" className={"h-4 w-4"} />
					</span>
				</label>
			</div>
		</form>
	)
}

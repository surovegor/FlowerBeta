import { useEffect, useState } from "react"

export function useCreateDomElement() {
	const [domElement, setDomElement] = useState<HTMLDivElement | null>(null)

	useEffect(() => {
		const element = document.createElement("div")
		document.body.appendChild(element)
		setDomElement(element)

		return () => {
			document.body.removeChild(element)
		}
	}, [])

	return domElement
}

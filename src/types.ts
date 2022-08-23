import { ReactNode } from "react"

export type AccordionData = {
	id: number,
	title: string,
	content: ReactNode,
}

export type Companys = {
	id: number,
	name: string,
	shortname: string,
	link: string,
	srcImage: string
}

export type SoftwareCardData = {
	id: number,
	title: string,
	number: string,
	image: string,
	links: Companys,
	list: Array<string>
}
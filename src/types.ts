import { ReactNode } from "react"

export type AccordionData = {
	id: number,
	title: string,
	content: ReactNode,
}

export type Companys = {
	id: number,
	name: string,
	shortname: string | undefined,
	link: string,
	srcImage: string
}

export type SoftwareCardData = {
	id: number,
	title: ReactNode | string,
	number: string,
	image: string,
	links: any,
	list: string[]
}

export type NewsArticleData = {
	id: number,
	data: string,
	title: string,
	imgJPG: string,
	imgWebP: string,
	link: string
}
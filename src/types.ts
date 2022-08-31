import { ReactNode } from "react"
import { JsxElement } from "typescript"

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
	SVG: ReactNode
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

export type SocialNetworksData = {
	id: string,
	name: string,
	link: string,
	SVG: JsxElement
}
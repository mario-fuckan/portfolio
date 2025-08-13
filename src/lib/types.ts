export type ASIDEBLOCK = {
	title: string
	notes: {
		emoji: string
		text: string
	}[]
	links: {
		title: string
		url: string
	}[]
}

export type NAVSTATE = null | "theme"

export type THEME = "light" | "dark" | null

export type GENERAL = {
	email: string
}

export type WORKANDEDUCATION = {
	icon: string
	name: string
	date: string
	role: string
	tasks?: string[]
}[]

export type PROJECTS = {
	name: string
	description: string
	href: string
	tags: string[]
}[]

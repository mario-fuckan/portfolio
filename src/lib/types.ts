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

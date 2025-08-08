import type { Component } from "svelte"

export type PAGEMODULE = {
	default: Component
	metadata?: {
		title: string
		description: string
	}
}

export type ASIDEBLOCK = {
	title: string
	description: string
	links: {
		title: string
		url: string
	}[]
}

export type NAVSTATE = null | "theme"

export type THEME = "light" | "dark" | null

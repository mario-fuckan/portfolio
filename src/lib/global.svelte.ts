import type { THEME } from "./types"

export function setupSettings() {
	settings.theme =
		(document.documentElement.getAttribute("data-theme") as THEME) ||
		(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
}

export function setTheme(theme: THEME) {
	if (!theme) {
		localStorage.removeItem("theme")
		document.documentElement.removeAttribute("data-theme")
	} else {
		localStorage.setItem("theme", theme)
		document.documentElement.setAttribute("data-theme", theme)
	}

	setupSettings()
}

export const settings = $state<{
	theme: THEME
}>({
	theme: null
})

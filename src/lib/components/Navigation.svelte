<script lang="ts">
	import LucideHome from "~icons/lucide/home"
	import LucidePresentation from "~icons/lucide/presentation"
	import LucideBriefcase from "~icons/lucide/briefcase"
	import LucideMail from "~icons/lucide/mail"
	import ThemeSelector from "./ThemeSelector.svelte"
	import type { NAVSTATE } from "$lib/types"
	import { settings } from "$lib/global.svelte"

	let navState = $state<NAVSTATE>(null)

	function setNavState(state: NAVSTATE) {
		navState = navState == state ? null : state
	}
</script>

<nav>
	<a href="/">@mario_fuckan</a>
	<a href="/"><LucideHome /> Home</a>
	<a href="/#projects"><LucidePresentation /> Projects</a>
	<a href="/#work"><LucideBriefcase /> Work</a>
	<a href="/#contact"><LucideMail /> Contact</a>
	{#if settings.theme}
		<div class="ts__wrapper">
			<button
				onclick={(e: MouseEvent) => {
					e.stopImmediatePropagation()
					setNavState("theme")
				}}>THEME</button
			>

			{#if navState == "theme"}
				<ThemeSelector {setNavState} />
			{/if}
		</div>
	{/if}
</nav>

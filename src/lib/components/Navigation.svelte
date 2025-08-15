<script lang="ts">
	import LucideHome from "~icons/lucide/home"
	import LucidePresentation from "~icons/lucide/presentation"
	import LucideBriefcase from "~icons/lucide/briefcase"
	import LucideMail from "~icons/lucide/mail"
	import ThemeSelector from "./ThemeSelector.svelte"
	import LucideMoon from "~icons/lucide/moon"
	import LucideSun from "~icons/lucide/sun"
	import { settings } from "$lib/global.svelte"
	import type { NAVSTATE } from "$lib/types"

	let navState = $state<NAVSTATE>(null)

	function setNavState(state: NAVSTATE) {
		navState = navState == state ? null : state
	}
</script>

<nav>
	<a href="/">@mario_fuckan</a>
	<div class="nav__links">
		<a href="/"><LucideHome /> <span>Home</span></a>
		<a href="/#work"><LucideBriefcase /> <span>Work</span></a>
		<a href="/#projects"><LucidePresentation /> <span>Projects</span></a>
		<a href="/#contact"><LucideMail /> <span>Contact</span></a>
		<div class="ts__wrapper">
			<button
				onclick={(e: MouseEvent) => {
					e.stopImmediatePropagation()
					setNavState("theme")
				}}
			>
				{#if settings.theme == "dark"}
					<LucideMoon />
				{:else}
					<LucideSun />
				{/if}
			</button>

			{#if navState == "theme"}
				<ThemeSelector {setNavState} />
			{/if}
		</div>
	</div>
</nav>

<script lang="ts">
	import type { NAVSTATE, THEME } from "$lib/types"
	import { setTheme } from "$lib/global.svelte"

	let { setNavState }: { setNavState: (value: NAVSTATE) => void } = $props()

	let themeSelectorElement = $state<HTMLElement>()
</script>

<svelte:body
	onclick={(e: MouseEvent) => {
		const target = e.target as HTMLElement

		if (!themeSelectorElement?.contains(target)) {
			setNavState(null)
		}
	}}
/>

<div class="themeselector" bind:this={themeSelectorElement}>
	{#each [{ title: "Light", value: "light" }, { title: "Dark", value: "dark" }, { title: "System", value: null }] as { title, value }}
		<button
			onclick={() => {
				setTheme(value as THEME)
				setNavState(null)
			}}>{title}</button
		>
	{/each}
</div>

<script lang="ts">
	import type { ASIDEBLOCK } from "$lib/types"
	import LucideGithub from "~icons/lucide/github"
	import LucideFileText from "~icons/lucide/file-text"
	import PajamasTwitter from "~icons/pajamas/twitter"
	import { SvelteMap } from "svelte/reactivity"

	let { information }: { information: ASIDEBLOCK } = $props()

	const icons = new SvelteMap([
		["github", LucideGithub],
		["resume", LucideFileText],
		["twitter", PajamasTwitter]
	])
</script>

<div class="aside__block">
	<h2>{information.title}</h2>
	<p>{information.description}</p>
	<div class="aside__block__links">
		{#each information.links as { title, url }}
			{@const Icon = icons.get(title.toLowerCase())}
			<a href={url} target="_blank"><Icon /> {title}</a>
		{/each}
	</div>
</div>

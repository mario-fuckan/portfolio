<script lang="ts">
	import type { ASIDEBLOCK } from "$lib/types"
	import LucideGithub from "~icons/lucide/github"
	import LucideFileText from "~icons/lucide/file-text"
	import LucideLinkedin from "~icons/lucide/linkedin"
	import { SvelteMap } from "svelte/reactivity"

	let { information }: { information: ASIDEBLOCK } = $props()

	const icons = new SvelteMap([
		["github", LucideGithub],
		["resume", LucideFileText],
		["linkedin", LucideLinkedin]
	])
</script>

<div class="aside__block">
	<h2>{information.title}</h2>
	{#each information.notes as { emoji, text }}
		<p>{emoji} {text}</p>
	{/each}
	<div class="aside__block__links">
		{#each information.links as { title, url, file }}
			{@const Icon = icons.get(title.toLowerCase())}
			<a href={url || file} target="_blank"><Icon /> <span>{title}</span></a>
		{/each}
	</div>
</div>

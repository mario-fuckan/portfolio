<script lang="ts">
	import type { PROJECTS } from "$lib/types"
	import LucideExternalLink from "~icons/lucide/external-link"

	let { projects }: { projects: PROJECTS } = $props()
</script>

<section id="projects">
	<h1>Notable Projects</h1>
	<div class="projects__list">
		{#each projects as { name, description, tags, href }}
			<a {href} target="_blank">
				<h3>{name} <LucideExternalLink /></h3>
				<p>{description}</p>
				<div class="project__tags">
					{#each tags as tag}
						<p>{tag}</p>
					{/each}
				</div>
			</a>
		{/each}
	</div>
</section>

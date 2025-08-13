<script lang="ts">
	import LucideExternalLink from "~icons/lucide/external-link"
</script>

<section id="projects">
	<h1>Notable Projects</h1>
	<div class="projects__list">
		{#each { length: 3 }}
			<div class="project">
				<h3>Project Title <LucideExternalLink /></h3>
				<p>Project Description</p>
				<div class="project__tags">
					<p>Tag</p>
					<p>Tag</p>
					<p>Tag</p>
				</div>
			</div>
		{/each}
	</div>
</section>

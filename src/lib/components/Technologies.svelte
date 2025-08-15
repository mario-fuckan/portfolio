<script lang="ts">
	import type { TECHNOLOGIES } from "$lib/types"

	let { technologies }: { technologies: TECHNOLOGIES } = $props()
</script>

<section class="technologies">
	<h1>- Full-Stack -</h1>
	<div class="technologies__showcase">
		{#each technologies as { name, icon }}
			<button>{@html icon} {name}</button>
		{/each}
	</div>
</section>

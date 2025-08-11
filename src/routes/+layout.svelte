<script lang="ts">
	import "$lib/app.css"
	import Footer from "$lib/components/Footer.svelte"
	import Navigation from "$lib/components/Navigation.svelte"
	import { setupSettings } from "$lib/global.svelte"

	let { children } = $props()

	$effect(() => {
		setupSettings()
	})
</script>

<main>
	<Navigation />
	<div class="wrapper">
		{@render children?.()}
	</div>
	<Footer />
</main>

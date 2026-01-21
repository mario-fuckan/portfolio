<script lang="ts">
	let { children } = $props()
</script>

<section class="introduction">
	<h1>Building custom digital solutions</h1>
	<h2>Full-Stack Developer</h2>
	<hr />
	<div class="introduction__stats">
		{#each [{ title: "Croatia", stat: "Location" }, { title: "6+ months", stat: "Experience" }, { title: "5+", stat: "Projects" }] as { title, stat }}
			<div class="stat">
				<h3>{title}</h3>
				<p>{stat}</p>
			</div>
		{/each}
	</div>
	{@render children()}
</section>

<script lang="ts">
	import AsideBlock from "$lib/components/AsideBlock.svelte"
	import Contact from "$lib/components/Contact.svelte"
	import Projects from "$lib/components/Projects.svelte"
	import Work from "$lib/components/Work.svelte"
</script>

<svelte:head>
	<title>Mario Fučkan | Full-Stack Developer</title>
</svelte:head>

<aside>
	<AsideBlock
		information={{
			title: "Mario Fučkan",
			notes: [
				{
					emoji: "🧑‍💻",
					text: "Full-Stack Developer"
				},
				{
					emoji: "📍",
					text: "Croatia"
				},
				{
					emoji: "✅",
					text: "Open to opportunities"
				}
			],
			links: [
				{
					title: "Github",
					url: "https://github.com/mariomeow"
				},
				{
					title: "LinkedIn",
					url: "https://www.linkedin.com/in/mario-fuckan/"
				},
				{
					title: "Resume",
					url: "/assets/resume.pdf"
				}
			]
		}}
	/>
</aside>
<section class="content">
	<Projects />
	<Work
		workandeducation={[
			{
				icon: "alpha_applications.webp",
				name: "Alpha Applications",
				date: "Nov 2024 - Jan 2025",
				role: "Apprentice",
				tasks: [
					"Assisted in developing a WordPress tourism booking website, migrating data from the old site and creating custom JavaScript features to enhance functionality",
					"Managed and updated WordPress plugins, collaborating with the lead developer to implement and refine key site features"
				]
			},
			{
				icon: "vhzk.webp",
				name: "University of Applied Sciences Hrvatsko zagorje Krapina",
				date: "Oct 2020 - Aug 2024",
				role: "Bachelor of Engineering in Information Technology"
			}
		]}
	/>
	<Contact />
</section>

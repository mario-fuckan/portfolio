<script lang="ts">
	import type { WORKANDEDUCATION } from "$lib/types"
	import LucideCalendar from "~icons/lucide/calendar"

	let { workandeducation }: { workandeducation: WORKANDEDUCATION } = $props()
</script>

<section id="work">
	<h1>Work & Education</h1>
	<div class="items">
		{#each workandeducation as item}
			<div class="item">
				<div class="item__top">
					<div class="item__group">
						<img src={`/assets/${item.icon}`} alt={item.name} />
						<h3>{item.name}</h3>
					</div>
					<div class="item__date"><LucideCalendar /> {item.date}</div>
				</div>
				<div class="item__bottom">
					<p>{item.role}</p>
					{#if item.tasks}
						<ul>
							{#each item.tasks as task}
								<li>{task}</li>
							{/each}
						</ul>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>

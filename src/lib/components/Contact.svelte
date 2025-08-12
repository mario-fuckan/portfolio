<script lang="ts">
	import IcBaselineWhatsapp from "~icons/ic/baseline-whatsapp"
	import { general } from "$lib/global.svelte"
</script>

<section id="contact">
	<h1>Contact</h1>
	<div class="contact__block">
		<p>Best way to reach me is through: <a href={`mailto:${general.email}`}>{general.email}</a></p>
		<a href="#"><IcBaselineWhatsapp /> WhatsApp</a>
	</div>
</section>

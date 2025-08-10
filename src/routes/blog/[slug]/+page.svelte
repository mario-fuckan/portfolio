<script lang="ts">
	let { data } = $props()
</script>

{data.metadata?.title}
{data.metadata?.description}
<data.component />

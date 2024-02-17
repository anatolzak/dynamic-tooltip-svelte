<script lang="ts">
	import { fade } from 'svelte/transition';

	export let text: string;
	export let sizeTransitionDuration = 300;
	export let crossfadeDuration = 200;

	let width: number | undefined = undefined;
	let height: number | undefined = undefined;
</script>

<div
	class="relative overflow-hidden transition-[width,height]"
	style:transition-duration={sizeTransitionDuration + 'ms'}
	style:width={width !== undefined ? width + 'px' : undefined}
	style:height={height !== undefined ? height + 'px' : undefined}
>
	{#key text}
		<div
			class="absolute left-0 top-0"
			transition:fade={{ duration: crossfadeDuration }}
			bind:offsetHeight={height}
			bind:offsetWidth={width}
		>
			{text}
		</div>
	{/key}
</div>

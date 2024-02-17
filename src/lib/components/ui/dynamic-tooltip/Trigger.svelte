<script lang="ts">
	import { onMount } from 'svelte';
	import { getCtx } from './context';

	export let label: string;

	const ctx = getCtx();

	let el: HTMLButtonElement;
	let closeTooltipTimeout: NodeJS.Timeout;

	onMount(() => {
		const unsub = ctx.label.subscribe((updatedLabel) => {
			if (updatedLabel !== undefined) {
				clearTimeout(closeTooltipTimeout);
			}
		});

		return () => {
			unsub();
			clearTimeout(closeTooltipTimeout);
		};
	});

	const openHandler = () => {
		const triggerRect = el.getBoundingClientRect();
		ctx.triggerRect.set(triggerRect);
		ctx.label.set(label);
	};

	const closeHandler = () => {
		clearTimeout(closeTooltipTimeout);

		// this prevents tooltip from closing if it's moving to a different trigger
		closeTooltipTimeout = setTimeout(() => {
			ctx.label.set(undefined);
		}, 50);
	};
</script>

<button
	{...$$restProps}
	bind:this={el}
	on:click
	on:pointerenter={openHandler}
	on:pointerleave={closeHandler}
>
	<slot />
</button>

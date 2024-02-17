<script lang="ts">
	import { computePosition, flip, offset, shift, type VirtualElement } from '@floating-ui/dom';
	import { fade } from 'svelte/transition';
	import { AdaptiveTextTransition } from '../adaptive-text-transition';
	import { getCtx } from './context';

	let className: string | undefined;
	export { className as class };

	const { label, triggerRect, positioning } = getCtx();

	let tooltipEl: HTMLDivElement | undefined = undefined;
	let tooltipPosition: { top: number; left: number } | undefined = undefined;

	const updatePosition = (tooltipEl: HTMLDivElement | undefined, rect: DOMRect | undefined) => {
		if (!tooltipEl || !rect) return;

		const virtualEl = {
			getBoundingClientRect: () => rect
		} satisfies VirtualElement;

		computePosition(virtualEl, tooltipEl, {
			placement: positioning.placement,
			middleware: [offset(positioning.offset), flip(), shift()]
		}).then(({ x, y }) => {
			tooltipPosition = {
				top: y,
				left: x
			};
		});
	};

	const resetPosition = () => {
		tooltipPosition = undefined;
	};

	$: updatePosition(tooltipEl, $triggerRect);
</script>

{#if $label !== undefined}
	<div
		class={className}
		style:top={tooltipPosition !== undefined ? tooltipPosition.top + 'px' : undefined}
		style:left={tooltipPosition !== undefined ? tooltipPosition.left + 'px' : undefined}
		transition:fade={{ duration: 100 }}
		on:outroend={resetPosition}
		bind:this={tooltipEl}
	>
		<AdaptiveTextTransition text={$label} />
	</div>
{/if}

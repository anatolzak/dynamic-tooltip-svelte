<script lang="ts">
	import { writable } from 'svelte/store';
	import { setCtx, type Label } from './context';
	import type { Placement } from '@floating-ui/dom';

	export let placement: Placement = 'top';
	export let offset = 0;

	const label = writable<Label | undefined>();
	const triggerRect = writable<DOMRect | undefined>();

	setCtx({ label, triggerRect, positioning: { placement, offset } });
</script>

<slot />

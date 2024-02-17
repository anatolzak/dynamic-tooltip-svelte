<script lang="ts">
	import * as DynamicTooltip from '$lib/components/ui/dynamic-tooltip';
	import type { TSidebarItem } from './types';
	import { receive, send } from './utils';

	export let label: TSidebarItem['label'];
	export let Icon: TSidebarItem['Icon'];
	export let isActive: boolean;
	export let crossfadeKey: string;
</script>

<DynamicTooltip.Trigger
	{label}
	class={`relative flex w-full items-center justify-center py-3 transition-colors ${isActive ? 'text-gray-100' : 'text-gray-500'}`}
	on:click
>
	{#if isActive}
		<div
			in:receive|global={{ key: crossfadeKey }}
			out:send|global={{ key: crossfadeKey }}
			class="absolute left-0 top-0 h-full w-0.5 bg-white"
		/>
	{/if}
	<svelte:component this={Icon} class="h-7 w-7" />
</DynamicTooltip.Trigger>

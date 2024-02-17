<script lang="ts">
	import { SidebarItem, type TSidebarItem } from '$lib/components/sidebar-item';
	import * as DynamicTooltip from '$lib/components/ui/dynamic-tooltip';
	import ExtensionsIcon from 'lucide-svelte/icons/blocks';
	import BugIcon from 'lucide-svelte/icons/bug-play';
	import FilesIcon from 'lucide-svelte/icons/files';
	import GitIcon from 'lucide-svelte/icons/git-branch';
	import SearchIcon from 'lucide-svelte/icons/search';
	import SettingsIcon from 'lucide-svelte/icons/settings';
	import UserIcon from 'lucide-svelte/icons/user';

	const topItems: TSidebarItem[] = [
		{
			id: 'Explorer',
			Icon: FilesIcon,
			label: 'Explorer'
		},
		{
			id: 'Search',
			Icon: SearchIcon,
			label: 'Search'
		},
		{
			id: 'Source Control',
			Icon: GitIcon,
			label: 'Source Control'
		},
		{
			id: 'Run and Debug',
			Icon: BugIcon,
			label: 'Run and Debug'
		},
		{
			id: 'Extensions',
			Icon: ExtensionsIcon,
			label: 'Extensions'
		}
	];

	const bottomItems: TSidebarItem[] = [
		{
			id: 'Accounts',
			Icon: UserIcon,
			label: 'Accounts'
		},
		{
			id: 'Settings',
			Icon: SettingsIcon,
			label: 'Settings'
		}
	];

	let activeId: string = topItems[0].id;
</script>

<div
	class="flex w-16 shrink-0 flex-col items-stretch justify-between border-r border-r-gray-800 py-3"
>
	<DynamicTooltip.Root placement="right" offset={5}>
		<DynamicTooltip.Content
			class="fixed z-50 whitespace-nowrap rounded-xl bg-gray-800 px-2 py-1 text-white transition-[top] duration-300"
		/>

		<div class="flex flex-col items-start justify-stretch">
			{#each topItems as { Icon, label, id } (id)}
				<SidebarItem
					{Icon}
					{label}
					isActive={activeId === id}
					crossfadeKey="active-sidebar-item-top"
					on:click={() => (activeId = id)}
				/>
			{/each}
		</div>
		<div class="flex flex-col items-start justify-stretch">
			{#each bottomItems as { Icon, label, id } (id)}
				<SidebarItem
					{Icon}
					{label}
					isActive={activeId === id}
					crossfadeKey="active-sidebar-item-bottom"
					on:click={() => (activeId = id)}
				/>
			{/each}
		</div>
	</DynamicTooltip.Root>
</div>

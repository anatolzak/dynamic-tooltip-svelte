import type { Icon } from 'lucide-svelte';
import type { ComponentType } from 'svelte';

export type TSidebarItem = { Icon: ComponentType<Icon>; label: string; id: string };

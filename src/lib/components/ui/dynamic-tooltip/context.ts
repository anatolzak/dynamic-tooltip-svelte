import type { Placement } from '@floating-ui/dom';
import { getContext, setContext } from 'svelte';
import type { Writable } from 'svelte/store';

const CONTEXT_NAME = 'dynamic-tooltip';

export type Label = string | undefined;

export type Context = {
	label: Writable<Label>;
	triggerRect: Writable<DOMRect | undefined>;
	positioning: {
		placement: Placement;
		offset: number;
	};
};

export const setCtx = (ctx: Context) => {
	setContext(CONTEXT_NAME, ctx);
};

export const getCtx = () => {
	return getContext(CONTEXT_NAME) as Context;
};

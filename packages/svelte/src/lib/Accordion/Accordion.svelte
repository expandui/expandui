<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { accordion } from '@expandui/core';
  import { createClassString } from '@shared/utils';

  let classProp: string = '';
  export { classProp as class };
  export let multiselect: boolean = false;

  let container: HTMLDivElement

  onMount(() => {
    if (container) accordion.on(container);
  });

  onDestroy(() => {
    if (container ) accordion.off(container);
  });
</script>

<div
  class={createClassString('eui-accordion', classProp)}
  bind:this={container}
  aria-multiselectable={multiselect}
  {...$$restProps}
>
  <slot></slot>
</div>

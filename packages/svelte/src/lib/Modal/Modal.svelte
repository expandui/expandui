<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { modal } from '@expandui/core';
  import { createClassString } from '@shared/utils';

  let classProp: string = '';
  export { classProp as class };
  export let forceAction: boolean = false;

  let container: HTMLDivElement

  onMount(() => {
    if (container) modal.on(container);
  });

  onDestroy(() => {
    if (container ) modal.off(container);
  });
</script>

<div
  class={
    createClassString(
      'eui-modal',
      forceAction ? 'force-action' : '',
      classProp,
    )
  }
  bind:this={container}
  {...$$restProps}
>
  <slot></slot>
</div>

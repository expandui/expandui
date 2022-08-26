<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { tabs } from '@expandui/core';
  import { createClassString } from '@shared/utils';

  let classProp: string = '';
  export { classProp as class };

  let container: HTMLDivElement

  onMount(() => {
    if (container) tabs.on(container);
  });

  onDestroy(() => {
    if (container ) tabs.off(container);
  });
</script>

<div
  class={
    createClassString(
      'eui-tabs',
      classProp,
    )
  }
  bind:this={container}
  {...$$restProps}
>
  <slot></slot>
</div>

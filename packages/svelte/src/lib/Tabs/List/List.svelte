<script lang="ts">
  import { createClassString } from '@shared/utils';

  let classProp: string = '';
  export { classProp as class };
  export let vertical: boolean = false;
</script>

<div
  class={
    createClassString('eui-tabs__list', classProp)
  }
  aria-orientation={vertical ? 'vertical' : 'horizontal'}
  {...$$restProps}
>
  <slot></slot>
</div>

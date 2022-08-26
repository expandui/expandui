<script lang="ts">
  import { createClassString } from '@shared/utils';

  let classProp: string = '';
  export { classProp as class };
</script>

<div
  class={
    createClassString('eui-accordion__content', classProp)
  }
  {...$$restProps}
>
  <slot></slot>
</div>

<script lang="ts">
  import { createClassString } from '@shared/utils';

  let classProp: string = '';
  export { classProp as class };
</script>

<div
  class={
    createClassString('eui-button__group', classProp)
  }
   {...$$restProps}
>
  <slot></slot>
</div>

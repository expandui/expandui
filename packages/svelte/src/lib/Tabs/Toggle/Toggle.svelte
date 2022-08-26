<script lang="ts">
  import { createClassString } from '@shared/utils';
  import Button from '../../Button'

  let classProp: string = '';
  export { classProp as class };
</script>

<Button
  class={
    createClassString('eui-tabs__toggle', classProp)
  }
  {...$$restProps}
>
  <slot></slot>
</Button>

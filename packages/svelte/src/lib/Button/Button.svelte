<script lang="ts">
  import { createClassString } from '@shared/utils';

  let classProp: string = '';
  export { classProp as class };
  export let variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'light' = 'primary'
</script>

<button
  class={
    createClassString('eui-button', `v-${variant}`, classProp)
  }
  type="button"
   {...$$restProps}
>
  <slot></slot>
</button>

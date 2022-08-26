<script lang="ts">
  import { createClassString } from '@shared/utils';
  import Button from '../Button'
  import Content from '../Content'

  let classProp: string = '';
  export { classProp as class };
  export let expanded: boolean = false;
  export let heading: string = ''
</script>

<div
  class={
    createClassString(
      'eui-accordion__item',
      expanded ? 'expanded' : '',
      classProp
    )
  }
  {...$$restProps}
>
  {#if heading}
    <Button>{heading}</Button>
    <Content>
      <slot></slot>
    </Content>
  {:else}
    <slot></slot>
  {/if}
</div>

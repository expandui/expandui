<script lang="ts">
  import Button from '../../Button'

  export let modalId: string
</script>

<Button
  {...$$restProps}
  aria-controls={modalId}
>
  <slot></slot>
</Button>

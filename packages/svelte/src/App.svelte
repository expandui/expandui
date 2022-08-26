<script lang="ts">
  import {
    Accordion,
    Button,
    Modal,
    Tabs,
  } from './lib'
</script>

<main>
  <Button.Group>
    <Button variant="secondary">
      Click me
    </Button>
  </Button.Group>

  <Accordion>
    <Accordion.Item>
      <Accordion.Button variant="secondary">Title</Accordion.Button>
      <Accordion.Content>Content</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item heading="title">
      Content
    </Accordion.Item>
  </Accordion>

  <Modal.Open modalId="modal">
    Modal
  </Modal.Open>

  <Modal id="modal">
    <Modal.Heading>Title</Modal.Heading>
    <Modal.Content>Content</Modal.Content>
    <Modal.Close>Cancel</Modal.Close>
  </Modal>

  <Tabs>
    <Tabs.List>
      <Tabs.Toggle>One</Tabs.Toggle>
      <Tabs.Toggle>Two</Tabs.Toggle>
      <Tabs.Toggle>Three</Tabs.Toggle>
    </Tabs.List>
    <Tabs.Panel>One content</Tabs.Panel>
    <Tabs.Panel>Two content</Tabs.Panel>
    <Tabs.Panel>Three content</Tabs.Panel>
  </Tabs>
</main>


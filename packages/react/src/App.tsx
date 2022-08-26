import { Accordion, Button, Modal, Tabs } from './components'

function App() {
  return (
    <>
      <Button.Group>
        <Button>Click me</Button>
      </Button.Group>

      <Accordion>
        <Accordion.Item heading="Heading">Content</Accordion.Item>
        <Accordion.Item heading="Heading">Content</Accordion.Item>
        <Accordion.Item heading="Heading">Content</Accordion.Item>
      </Accordion>

      <Modal.Open modalId="modal-example">Open modal</Modal.Open>
      <Modal id="modal-example" heading="Heading">
        <Modal.Close>Close</Modal.Close>
      </Modal>

      <Tabs>
        <Tabs.List vertical>
          <Tabs.Toggle>One</Tabs.Toggle>
          <Tabs.Toggle>Two</Tabs.Toggle>
          <Tabs.Toggle>Three</Tabs.Toggle>
        </Tabs.List>

        <Tabs.Panel>Content one</Tabs.Panel>
        <Tabs.Panel>Content two</Tabs.Panel>
        <Tabs.Panel>Content three</Tabs.Panel>
      </Tabs>
    </>
  )
}

export default App

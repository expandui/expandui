import { Accordion } from './components'

function App() {
  return (
    <Accordion>
      <Accordion.Item toggle="Heading">Content</Accordion.Item>
      <Accordion.Item>
        <Accordion.Toggle>Heading</Accordion.Toggle>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
}

export default App

import { default as Main } from './Accordion'
import { default as Button } from './Button'
import { default as Content } from './Content'
import { default as Item } from './Item'

const Accordion = Object.assign(Main, { Button, Content, Item })

export default Accordion

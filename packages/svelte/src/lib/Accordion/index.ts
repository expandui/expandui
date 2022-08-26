import { default as Main } from './Accordion.svelte'
import { default as Button } from './Button'
import { default as Content } from './Content'
import { default as Item } from './Item'

const Accordion = Object.assign(Main, { Content, Item, Button })

export default Accordion

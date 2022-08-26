import { default as Main } from './Modal'
import { default as Close } from './Close'
import { default as Content } from './Content'
import { default as Heading } from './Heading'
import { default as Open } from './Open'

const Modal = Object.assign(Main, { Close, Content, Heading, Open })

export default Modal

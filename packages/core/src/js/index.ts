import { accordion, modal, tabs } from './components'

const components: {
  [x: string]: {
    on: (el: Element) => void
  }
} = {
  accordion,
  modal,
  tabs,
}

// Init all Expand UI components on page
for (const key in components) {
  if (Object.prototype.hasOwnProperty.call(components, key)) {
    const component = components[key]

    // Find matching components
    const elements = document.querySelectorAll(`.eui-${key}`)

    for (let j = 0; j < elements.length; j++) {
      const element = elements[j]

      // Apply Expand UI component to element
      component.on(element)
    }
  }
}

export * from './components'

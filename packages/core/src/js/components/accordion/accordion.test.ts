import accordion, {
  ACCORDION,
  ACCORDION_BUTTON,
  ACCORDION_CONTENT,
  ACCORDION_EXPANDED,
  ACCORDION_ITEM,
} from './accordion'

function getContainer() {
  const div = document.createElement('div')
  div.classList.add(ACCORDION)
  div.innerHTML = `
    <div class="${ACCORDION_ITEM}">
      <button class="${ACCORDION_BUTTON}">Heading</button>
      <div class="${ACCORDION_CONTENT}">
        Content
      </div>
    </div>
    <div class="${ACCORDION_ITEM}">
      <button class="${ACCORDION_BUTTON}">Heading</button>
      <div class="${ACCORDION_CONTENT}">
        Content
      </div>
    </div>
    <div class="${ACCORDION_ITEM}">
      <button class="${ACCORDION_BUTTON}">Heading</button>
      <div class="${ACCORDION_CONTENT}">
        Content
      </div>
    </div>
  `

  return div
}

describe('Accordion', () => {
  const container = getContainer()

  // Init accordion
  accordion.on(container)

  const firstItem = container.querySelector(`.${ACCORDION_ITEM}`)
  const firstButton = firstItem?.querySelector(`.${ACCORDION_BUTTON}`)
  const firstContent = firstItem?.querySelector(`.${ACCORDION_CONTENT}`)

  const secondItem = container.querySelectorAll(`.${ACCORDION_ITEM}`)[1]
  const secondButton = secondItem?.querySelector(`.${ACCORDION_BUTTON}`)

  if (
    !firstItem ||
    !firstButton ||
    !firstContent ||
    !secondItem ||
    !secondButton
  ) {
    throw Error('Elements not found')
  }

  test('items have attributes', async () => {
    expect(firstButton.getAttribute('aria-controls')).toEqual(
      firstContent.getAttribute('id')
    )
    expect(firstContent.getAttribute('aria-hidden')).toEqual('true')
  })

  test('is opened', async () => {
    // Toggle accordion
    ;(firstButton as HTMLElement).click()

    expect(firstItem.classList.contains(ACCORDION_EXPANDED)).toBeTruthy()
    expect(firstButton.getAttribute('aria-expanded')).toEqual('true')
    expect(firstContent.getAttribute('aria-hidden')).toEqual('false')
  })

  test('is closed', async () => {
    // Toggle accordion
    ;(firstButton as HTMLElement).click()

    expect(firstItem.classList.contains(ACCORDION_EXPANDED)).toBeFalsy()
    expect(firstButton.getAttribute('aria-expanded')).toEqual('false')
    expect(firstContent.getAttribute('aria-hidden')).toEqual('true')
  })

  test('toggle closes siblings', async () => {
    ;(firstButton as HTMLElement).click()

    expect(firstItem.classList.contains(ACCORDION_EXPANDED)).toBeTruthy()
    ;(secondButton as HTMLElement).click()

    expect(secondItem.classList.contains(ACCORDION_EXPANDED)).toBeTruthy()
    expect(firstItem.classList.contains(ACCORDION_EXPANDED)).toBeFalsy()
  })
})

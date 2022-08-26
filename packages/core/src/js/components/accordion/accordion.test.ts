import accordion from './accordion'

function getContainer() {
  const div = document.createElement('div')
  div.classList.add('eui-accordion')
  div.innerHTML = `
    <div class="eui-accordion__item">
      <button class="eui-accordion__button">Heading</button>
      <div class="eui-accordion__content">
        Content
      </div>
    </div>
    <div class="eui-accordion__item">
      <button class="eui-accordion__button">Heading</button>
      <div class="eui-accordion__content">
        Content
      </div>
    </div>
    <div class="eui-accordion__item">
      <button class="eui-accordion__button">Heading</button>
      <div class="eui-accordion__content">
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

  const firstItem = container.querySelector('.eui-accordion__item')
  const firstButton = firstItem?.querySelector('.eui-accordion__button')
  const firstContent = firstItem?.querySelector('.eui-accordion__content')

  const secondItem = container.querySelectorAll('.eui-accordion__item')[1]
  const secondButton = secondItem?.querySelector('.eui-accordion__button')

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

    expect(firstItem.classList.contains('expanded')).toBeTruthy()
    expect(firstButton.getAttribute('aria-expanded')).toEqual('true')
    expect(firstContent.getAttribute('aria-hidden')).toEqual('false')
  })

  test('is closed', async () => {
    // Toggle accordion
    ;(firstButton as HTMLElement).click()

    expect(firstItem.classList.contains('expanded')).toBeFalsy()
    expect(firstButton.getAttribute('aria-expanded')).toEqual('false')
    expect(firstContent.getAttribute('aria-hidden')).toEqual('true')
  })

  test('toggle closes siblings', async () => {
    ;(firstButton as HTMLElement).click()

    expect(firstItem.classList.contains('expanded')).toBeTruthy()
    ;(secondButton as HTMLElement).click()

    expect(secondItem.classList.contains('expanded')).toBeTruthy()
    expect(firstItem.classList.contains('expanded')).toBeFalsy()
  })
})

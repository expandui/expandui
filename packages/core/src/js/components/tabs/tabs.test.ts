import tabs, { TABS, TABS_LIST, TABS_PANEL, TABS_TOGGLE } from './tabs'

function getContainer() {
  const div = document.createElement('div')
  div.classList.add(TABS)
  div.innerHTML = `
    <div class="${TABS_LIST}">
      <button class="${TABS_TOGGLE}">One</button>
      <button class="${TABS_TOGGLE}">Two</button>
      <button class="${TABS_TOGGLE}">Three</button>
    </div>

    <div class="${TABS_PANEL}">Content one</div>
    <div class="${TABS_PANEL}">Content two</div>
    <div class="${TABS_PANEL}">Content three</div>
  `

  return div
}

describe('Tabs', () => {
  const container = getContainer()

  // Init accordion
  tabs.on(container)

  const list = container.querySelector(`.${TABS_LIST}`)

  const toggles = container.querySelectorAll(`.${TABS_TOGGLE}`)
  const panels = container.querySelectorAll(`.${TABS_PANEL}`)

  if (!list) {
    throw Error('Elements not found')
  }

  test('items have attributes', async () => {
    expect(list.getAttribute('aria-orientation')).toEqual('horizontal')
    expect(list.getAttribute('role')).toEqual('tablist')

    expect(toggles[0].getAttribute('role')).toEqual('tab')
    expect(toggles[0].getAttribute('aria-selected')).toEqual('true')
    expect(toggles[0].getAttribute('tabindex')).toEqual('0')

    expect(panels[0].getAttribute('role')).toEqual('tabpanel')
    expect(panels[0].getAttribute('aria-hidden')).toEqual('true')

    expect(toggles[0].getAttribute('id')).toEqual(
      panels[0].getAttribute('aria-labelledby')
    )
    expect(panels[0].getAttribute('id')).toEqual(
      toggles[0].getAttribute('aria-controls')
    )
  })
})

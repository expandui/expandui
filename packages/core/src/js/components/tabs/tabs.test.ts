import tabs from './tabs'

function getContainer() {
  const div = document.createElement('div')
  div.classList.add('eui-tabs')
  div.innerHTML = `
    <div class="eui-tabs-list">
      <button class="eui-tabs-toggle">One</button>
      <button class="eui-tabs-toggle">Two</button>
      <button class="eui-tabs-toggle">Three</button>
    </div>

    <div class="eui-tabs-panel">Content one</div>
    <div class="eui-tabs-panel">Content two</div>
    <div class="eui-tabs-panel">Content three</div>
  `

  return div
}

describe('Tabs', () => {
  const container = getContainer()

  // Init accordion
  tabs.on(container)

  const list = container.querySelector('.eui-tabs-list')

  const toggles = container.querySelectorAll('.eui-tabs-toggle')
  const panels = container.querySelectorAll('.eui-tabs-panel')

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

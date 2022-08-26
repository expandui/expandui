import modal from './modal'

function getContainer() {
  const div = document.createElement('div')
  div.innerHTML = `
    <button aria-controls="modal">Toggle</button>
    <div class="eui-modal" id="modal">
      <div class="eui-modal-heading">
        Title
      </div>
      <div class="eui-modal-content">
        Content
        <button data-close-modal>Close</button>
      </div>
    </div>
  `

  return div
}

describe('Modal', () => {
  const container = getContainer()

  const modalEl = container.querySelector('#modal')

  if (!modalEl) throw Error('No modal found')

  // Init modal
  modal.on(modalEl)

  // Elements
  const toggle = container.querySelector('[aria-controls="modal"]')
  const heading = container.querySelector('.eui-modal-heading')
  const content = container.querySelector('.eui-modal-content')
  const button = container.querySelector('[aria-controls="modal"]')

  if (!toggle || !heading || !content || !button) {
    throw Error('Elements not found')
  }

  test('items have attributes', async () => {
    expect(modalEl.getAttribute('role')).toEqual('dialog')
    expect(modalEl.getAttribute('aria-hidden')).toEqual('true')
    expect(modalEl.getAttribute('aria-labelledby')).toEqual(
      heading.getAttribute('id')
    )
    expect(modalEl.getAttribute('aria-describedby')).toEqual(
      content.getAttribute('id')
    )
  })

  test('is opened', async () => {
    // Toggle modal
    ;(button as HTMLElement).click()

    expect(document.body.classList.contains('eui-modal-open')).toBeTruthy()
    expect(modalEl.getAttribute('aria-hidden')).toEqual('false')
  })
})

import { cleanup, render, screen } from '@testing-library/react'

import CardDefault from './CardDefault'

describe('CardDefault', () => {
  afterEach(() => {
    cleanup()
    vi.resetAllMocks()
  })

  it('renders children correctly', () => {
    render(
      <CardDefault>
        <div data-testid="child-element">Child Content</div>
      </CardDefault>
    )

    const child = screen.getByTestId('child-element')
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Child Content')
  })

  it('merges customSX with default styles', () => {
    const customSX = { p: '32px', display: 'block' }
    render(<CardDefault customSX={customSX}>Content</CardDefault>)

    const paper = screen.getByTestId('cardDefault')
    expect(paper).toHaveStyle({
      padding: '32px',
      display: 'block',
      flexDirection: 'column',
      gap: '10px'
    })
  })
})

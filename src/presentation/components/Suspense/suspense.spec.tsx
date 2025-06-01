import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Suspense } from '@/presentation/components'

const makeSut = () => {
  return render(
    <Suspense>
      <div>Suspense render children</div>
    </Suspense>
  )
}

describe('Suspense component', () => {
  it('should render Suspense', () => {
    makeSut()

    const item = screen.getByText(/suspense render children/i)
    expect(item).toBeInTheDocument()
  })
})

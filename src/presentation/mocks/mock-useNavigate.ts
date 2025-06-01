import { vi } from 'vitest'

export const mockedUseNavigate = vi.fn()
export const mockedUseParams = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockedUseNavigate,
    useParams: mockedUseParams
  }
})

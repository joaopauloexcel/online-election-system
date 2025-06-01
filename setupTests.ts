import '@testing-library/jest-dom'
import { beforeAll, afterEach, afterAll, beforeEach, vi } from 'vitest'
import { mockIconsMui, server } from './src/presentation/mocks'

vi.mock('@azure/msal-browser')
vi.mock('@/infra/msal/msalInstance', () => ({ msalInstance: null }))
mockIconsMui()

beforeEach(() => server.events.removeAllListeners())
beforeAll(() => server.listen())
afterEach(() => server.restoreHandlers())
afterAll(() => server.close())

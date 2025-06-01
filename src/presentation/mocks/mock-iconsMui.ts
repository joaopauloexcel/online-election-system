import React from 'react'

type MockIconProps = {
  className?: string
  style?: React.CSSProperties
  fontSize?: 'inherit' | 'large' | 'medium' | 'small'
  color?: 'inherit' | 'primary' | 'secondary' | 'action' | 'error' | 'disabled'
}

const createMockIcon = (testId: string) => {
  const MockIcon: React.FC<MockIconProps> = (props) =>
    React.createElement('div', {
      'data-testid': testId,
      'data-props': JSON.stringify(props),
      className: props?.className,
      style: props?.style
    })
  MockIcon.displayName = `Mock${testId}`
  return MockIcon
}

export const mockIconsMui = (): void => {
  vi.mock('@mui/icons-material', () => ({
    ArrowCircleUp: createMockIcon('arrow-circle-up'),
    Dashboard: createMockIcon('dashboard'),
    AssignmentOutlined: createMockIcon('assignment-outlined'),
    Assessment: createMockIcon('assessment'),
    Download: createMockIcon('download'),
    CheckCircle: createMockIcon('check-circle'),
    ErrorOutline: createMockIcon('error-outline'),
    SwapVert: createMockIcon('swapvert'),
    Search: createMockIcon('search'),
    RemoveRedEye: createMockIcon('removeRedEye'),
    Add: createMockIcon('add'),
    InfoOutline: createMockIcon('infoOutline'),
    HowToVote: createMockIcon('howToVote'),
    People: createMockIcon('people'),
    BarChart: createMockIcon('barChart'),
    Home: createMockIcon('home'),
    ArrowDropUp: createMockIcon('arrowDropUp'),
    ArrowDropDown: createMockIcon('arrowDropDown'),
  }))
}

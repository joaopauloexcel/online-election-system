import { Suspense as SuspenseReact, SuspenseProps } from 'react'

const Suspense: React.FC<SuspenseProps> = ({ children, ...props }: SuspenseProps) => (
  <SuspenseReact {...props} fallback={<></>}>
    {children}
  </SuspenseReact>
)

export default Suspense

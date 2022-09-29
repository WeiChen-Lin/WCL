import { ReactElement, ReactNode } from 'react'

type Props = {
  children: ReactElement
}

export default function Layout({ children }: Props): ReactElement {
  return <div>{children}</div>
}

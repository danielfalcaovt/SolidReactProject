import { createContext } from 'react'

type contextProps = {
  isLoading: boolean
  errorMessage: string
}

export default createContext<contextProps>({
  isLoading: false,
  errorMessage: ''
})

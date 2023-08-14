import { ThemeProvider } from '@emotion/react'
import { theme } from './theme/theme'
import Main from './layouts/Main/Main'
import { CssBaseline } from '@mui/material'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Main />
    </ThemeProvider>
  )
}

export default App

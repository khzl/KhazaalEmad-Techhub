import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme , ThemeProvider } from '@mui/material'
import './index.css'
import App from './App.jsx'

const theme = createTheme({
  palette:
  {
    primary:{
      main : "#1976d2"
    },
    secondary: {
      main: "#f50057"
    }
  },
  typography:{
    fontFamily: "Arial, sans-serif"
  }
});

// Warp App In themeprovider 
<ThemeProvider theme={theme}>
  <app/>
</ThemeProvider>
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

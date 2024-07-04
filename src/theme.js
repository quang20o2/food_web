import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  typography: {
    fontFamily: ['Outfit', 'sans-serif'].join(',')
  },

  colorSchemes: {
    light: {
      palette: {
        // primary: teal,
        // secondary: deepOrange
      }
    },
    dark: {
      palette: {
        // primary: cyan,
        // secondary: orange
      }
    }
  },
  components: {
    MuiCssBaseline: {
      // styleOverrides: {
      //   body: {
      //     '*::-webkit-scrollbar': {
      //       width: '5px',
      //       height: '6px'
      //     },
      //     '*::-webkit-scrollbar-thumb': {
      //       backgroundColor: '#dcdde1',
      //       borderRadius: '5px'
      //     },
      //     '*::-webkit-scrollbar-thumb:hover': {
      //       backgroundColor: 'white'
      //     }
      //   }
      // }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          lineHeight: '1.5',
          borderWidth: '1px'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-h2': { fontWeight: 500 }
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: { width: 'auto', cursor: 'pointer' }
      }
    }
    // MuiInputLabel: {
    //   styleOverrides: {
    //     root: { fontSize: '0.875rem' }
    //   }
    // },
    // MuiTypography: {
    //   styleOverrides: {
    //     root: {
    //       '&.MuiTypography-body1': { fontSize: '0.875rem' }
    //     }
    //   }
    // },
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     root: {
    //       fontSize: '0.875rem',
    //       '& fieldset': { borderWidth: '1px !important' },
    //       '&:hover fieldset': { borderWidth: '2px !important' },
    //       '&.Mui-focused fieldset': { borderWidth: '2px !important' }
    //     }
    //   }
    // }
  }

  // ...other properties
})

export default theme

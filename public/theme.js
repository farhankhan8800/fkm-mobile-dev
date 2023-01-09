import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: "#f27935",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography:{
    fontFamily:[
      "poppins"
    ].join(","),
  },
});


export default theme
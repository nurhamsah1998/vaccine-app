import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { green, purple, teal, red, grey, lightBlue } from "@mui/material/colors";

const style = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: teal[500],
    },
    blus: {
      main: green[500],
    },
    warning: {
      main: red[600],
    },
    ask: {
      main: lightBlue[300],
    },
    label: {
      main: grey[600],
    },
  },
});

const theme = responsiveFontSizes(style);
export default theme;

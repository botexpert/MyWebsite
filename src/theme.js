import { createMuiTheme } from '@material-ui/core/styles';

 export const darkTheme = createMuiTheme({
  palette: {
    type:"dark",
    primary: {main : "#6e828e"},
    secondary: {main : "#0E2F44"},
  },
}
);

export const lightTheme = createMuiTheme({
  palette: {
    primary: {main : "#6e828e"},
    secondary: {main : "#0E2F44"},
  },
}
);
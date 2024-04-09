import {createTheme, ThemeProvider } from "@mui/material";
import { themeType } from "../@types/types";

const theme = createTheme({
    palette:{
        primary:{
            main: "#ECC051"
        }, 
        secondary:{
            main: "#151A2E"
        }
    },
    typography:{
        fontFamily:"inter"
    }
});

const Theme = ({children}: themeType) =>{
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Theme
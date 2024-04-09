import {createTheme, ThemeProvider } from "@mui/material";
import { themeType } from "../@types/types";

const theme = createTheme({
    palette:{
        primary:{
            main: "#DFDFDF"
        }, 
        secondary:{
            main: "#DFDFDF"
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
import {createTheme, ThemeProvider } from "@mui/material";
import { themeType } from "../@types/types";

const theme = createTheme({
    palette:{
        primary:{
            main: "#151A2E"
        }, 
        secondary:{
            main:"#ECC051"
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
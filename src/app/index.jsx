import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./shared/styles/globalStyle";
import { NavBar } from "./shared/components/NavBar";
import dark from "./shared/styles/theme/dark";

export const App =  ()=>{
    return (
        <>
            <GlobalStyle theme={dark} />
            <NavBar />
            <Outlet/>
            
        </>
    )
}
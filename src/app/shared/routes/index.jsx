import { Outlet, createBrowserRouter } from "react-router-dom";
import { Home } from "../../pages/Home";
import { GlobalStyle } from "../styles/globalStyle";
import { NavBar } from "../components/NavBar";
import dark from "../styles/theme/dark";
import { Partener } from "../../pages/Partener";
import FooterContainer from "../components/FooterContainer";
import { Footer } from "../../pages/Home/styles";
import { Constroi } from "../../pages/Constroi";
import { Taxi } from "../../pages/Taxi";
import { Repair } from "../../pages/Repair";
import { AutoParts } from "../../pages/AutoParts";

const App = () => {
  return (
    <>
      <GlobalStyle theme={dark} />
      <Outlet />
      <Footer>
      <FooterContainer/>
      </Footer>
    </>
  )
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      }, {
        path: '/partner',
        element: <Partener />
      }
    ],
    
  },
  {
    path: '/chinua',
    element:<App/>,
    children: [
      {
        path: 'constroi', 
        element: <Constroi/>
      },
      {
        path: 'taxi', 
        element: <Taxi/>
      },
      {
        path: 'repair', 
        element: <Repair/>
      },
      {
        path: 'auto-parts', 
        element: <AutoParts/>
      },
    ]
  },
])
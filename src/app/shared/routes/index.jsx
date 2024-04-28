import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
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
import ProductDetails from "../../pages/Produto";
import Admin from "../../pages/Admin/index.jsx";
import { LoginForm } from "../../pages/Login/index.jsx";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext.jsx";
import { RouterProvider } from "react-router-dom";
import { Cookies } from "react-cookie";
import PageCarro from "../../pages/Carro/index.jsx";
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





export default function RoutesApp(){
  
  const {cookies}=useContext(UserContext)




   const router = createBrowserRouter([
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
        },
        {
          path:"/admin/76",
          element: cookies? <Admin/> :<Navigate to="/login"/>
        },
        {
          path:"/login",
          element: <LoginForm/>
        },
        {
          path:"/carros",
          element:<PageCarro/>
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
    {
      path:"/produto",
      element:<App/>,
      errorElement:<div> <h2>Pagina de produtos nao encontrado</h2> </div>,
      children:[
       { path:"detalhes/:IDproduto",
       element:<ProductDetails/>
        }
      ]
  
    }
  ])
  return <RouterProvider router={router} />
}

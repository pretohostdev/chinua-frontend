import { Outlet, createBrowserRouter } from "react-router-dom";
import { Home } from "../../pages/Home";
import { GlobalStyle } from "../styles/globalStyle";
import { NavBar } from "../components/NavBar";
import dark from "../styles/theme/dark";
import { Partener } from "../../pages/Partener";


const App = () => {
  return (
    <>
      <GlobalStyle theme={dark} />
      <NavBar />
      <Outlet />
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
    ]
  }
])
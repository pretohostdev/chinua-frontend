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
      },
      {
        path: 'chinua',
        element: <div><h1>CHINUA DEMBO SERVICOS</h1></div>,
        children: [
          {
            path: 'constroi', 
            element: <div> <h1>Chinua Controi</h1> </div>
          },
          {
            path: 'taxi', 
            element: <div> <h1>Chinua Taxi</h1> </div>
          },
          {
            path: 'repair', 
            element: <div> <h1>Chinua Repair</h1> </div>
          },
          {
            path: 'auto-parts', 
            element: <div> <h1>Chinua Repair</h1> </div>
          },
        ]
      },
    ]
  }
])
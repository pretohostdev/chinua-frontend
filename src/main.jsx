import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import RoutesApp from './app/shared/routes'
import "react-multi-carousel/lib/styles.css";

import "./index.css"
import UserContextApp from './app/context/UserContext';
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <UserContextApp>
      <QueryClientProvider client={queryClient} >
        <RoutesApp />

      </QueryClientProvider>
    </UserContextApp>
  </React.StrictMode>,
)

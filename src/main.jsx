import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesApp from './app/shared/routes'
import "react-multi-carousel/lib/styles.css";
import 'react-toastify/dist/ReactToastify.css';

import "./index.css"
import UserContextApp from './app/context/UserContext';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <UserContextApp>
      <QueryClientProvider client={queryClient} >
        <RoutesApp />
        <ToastContainer />

      </QueryClientProvider>
    </UserContextApp>
  </React.StrictMode>,
)

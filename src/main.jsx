import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/screens/Dashboard.jsx';
import Transactions from './components/screens/Transactions.jsx';
import Investments from './components/screens/Investments.jsx';
import Accounts from './components/screens/Accounts.jsx';
import Loans from './components/screens/Loans.jsx'
import MyPriviliges from './components/screens/MyPriviliges.jsx'
import Services from './components/screens/Services.jsx'
import Settings from './components/screens/Settings.jsx';
import CreditCards from './components/screens/CreditCards.jsx';


const routes = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {path:'', element : <Dashboard/>},
      {path:'/transaction', element :<Transactions/>},
      {path:'/credit-card', element : <CreditCards/>},
      {path : '/investments', element : <Investments/>},
      {path : 'accounts', element: <Accounts/>},
      {path:'/loans', element : <Loans/>},
      {path : '/priviliges', element : <MyPriviliges/>},
      {path : '/services' , element : <Services/>},
      {path : '/settings', element :<Settings/>},
    ]
  }
]) ;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)

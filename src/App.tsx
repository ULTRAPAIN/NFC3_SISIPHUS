// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserHome from './pages/user_homepage';
import Dashboard from './pages/user_dashboard';
import UserOrganisation from './pages/user_organisation';
import UserTransactions from './pages/user_transactions';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<UserHome />}/>
        <Route  path='user/dashboard' element={<Dashboard />}/>
        <Route path='user/organisation' element={<UserOrganisation />}/>
        <Route path='user/transactions' element={<UserTransactions />}/>
      </Routes>
      
    </BrowserRouter>
    </div>
  )
}

export default App

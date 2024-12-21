import { useState } from 'react'
import {useRoutes,BrowserRouter} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import LogIn from './pages/LogIn'


const AppRoutes = ()=>{
  const routes = useRoutes([
    {path:'/',element:<Home/>},
    {path:'/register',element:<LogIn/>}
  ])
  return routes
}
function App() {

  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App

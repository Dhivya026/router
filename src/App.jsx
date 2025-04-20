import './App.css'
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Products} from "./pages/Products"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Login from './pages/Login'
import ContactLayout from './Layout/ContactLayout'
import Info from './pages/components/Info'
import Form from './pages/components/Form'
import NotFound from './pages/NotFound'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path ="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<ContactLayout/>}>
           <Route path='info' element={<Info/>}/>
           <Route path='form' element={<Form/>}/>
        </Route>     

        <Route path='login' element={<Login/>}/>  
        <Route path='*' element={<NotFound/>}/>
        </Route>
    )
  )


  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

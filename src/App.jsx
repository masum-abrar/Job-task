
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
 
 

  return (
    <>
    <div>
    <div className="mx-auto max-w-full">
     <Navbar></Navbar>
     <Outlet></Outlet>
    </div>
   <Footer></Footer>
  </div>
</>
  )
}

export default App

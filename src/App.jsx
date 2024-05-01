import './App.css'
import Menu from './components/menu/Menu'
import Navbar from './components/navbar/Navbar'

function App() {
 

  return (
   <> 
   <div id="main-container" className='w-screen h-screen flex justify-start'>
    <div id="sidebar" className='border h-screen p-5 '><Menu/></div>
    <div id="navbar" className='w-full h-20 border grid items-center'><Navbar/></div>
    <div id="main-outlet"></div>
   </div>
   </>
  )
}

export default App

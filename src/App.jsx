
import './App.css'
import Menu from './components/menu/Menu'
import Navbar from './components/navbar/Navbar'
import Dashboard from './components/screens/Dashboard'
function App() {
 

  return (
   <> 
   <div id="main-container" className='w-screen h-screen flex justify-start'>
    <div id="sidebar" className=' h-full p-5 drop-shadow'><Menu/></div>
    <div id="content" className='w-full'>
    <div id="navbar" className='w-full h-20 border grid items-center drop-shadow'><Navbar/></div>
    <div id="main-outlet" className='h-full'>
      <Dashboard/>
    </div>
    </div>
   </div>
   </>
  )
}

export default App

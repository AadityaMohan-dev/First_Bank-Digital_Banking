
import { Outlet } from 'react-router-dom'
import './App.css'
function App() {
 

  return (
   <> 
    <div id="main-outlet" className='w-screen'>
      <Outlet/>
    </div>
  
   </>
  )
}

export default App


import './App.css'
// import Navbar from './Components/Navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
function App() {

  return (
    <>
     <div className='app'>
        {/* <Navbar/> */}
        <Router>
          <Routes>
             <Route path='/home' element={<Home/>}/>
          </Routes>
        </Router>
     </div>
    </>
  )
}

export default App

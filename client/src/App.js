
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';
import Registerpage from './pages/Registerpage';
import Homepage from './pages/Homepage';
import Pagenotfound from './pages/Pagenotfound';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
   <>
   <div>
      <Header/>
      <main style={{minHeight:"62vh"}}>
        <ToastContainer/>
        <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/About' element={<Aboutpage/>}/>
      <Route path='/Contact' element={<Contactpage/>}/>
      <Route path='/Register' element={<Registerpage/>}/>
      <Route path='/*' element={<Pagenotfound/>}/>
    </Routes>
      </main>
      <Footer/>
    </div>
    
   </>
  );
}

export default App;

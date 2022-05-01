
import { Route, Routes } from 'react-router-dom';
import './App.css';


import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import NotFound from './Components/Shared/NotFound/NotFound';
import Inventory from './Components/Inventory/Inventory'
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import Login from './Components/Login/Login/Login';
import { ToastContainer } from 'react-toastify';
import Register from './Components/Login/Register/Register';
function App() {
  return (
    <div className="App">

        <Header/>
        <Routes>
          <Route path='/'></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/inventory' element={
            <RequireAuth>
              <Inventory/>
            </RequireAuth>
          }></Route>
           
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
        
    </div>
  );
}

export default App;

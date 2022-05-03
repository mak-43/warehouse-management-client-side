
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
import Home from './Components/Home/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">

        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>

          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/inventory/:id' element={
            <RequireAuth>
              <Inventory/>
            </RequireAuth>
          }></Route>
           <Route path='/blogs' element={<Blogs/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
        <ToastContainer />
    </div>
  );
}

export default App;

import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import {Home, Login, Public} from './containers/public/index'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import path from "./untils/path";
function App() {
  return (
    <>
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public/>}>
          <Route path={path.LOGIN} element={<Login/>}/>
          <Route path={path.HOME} element={<Home/>}/>
        </Route>
      </Routes>
    </div>
    <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme="dark"
        />
    </>
  );
}

export default App;

import {Home, Login, Public, Personal} from './containers/public/index'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import path from "./untils/path";
import { useEffect } from 'react';
import * as actions from './store/actions'
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getHome())
  }, [])

  return (
    <>
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public/>}>
          <Route path={path.LOGIN} element={<Login/>}/>
          <Route path={path.HOME} element={<Home/>}/>
          <Route path={path.MY_MUSIC} element={<Personal/>}/>

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

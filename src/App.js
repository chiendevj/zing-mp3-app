import { Home, Login, Public, Personal, Album, ZingChart, Hub, ReleaseNew, Top100, WeekChart, Artist } from './containers/public/index'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'rc-slider/assets/index.css'
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
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.MY_MUSIC} element={<Personal />} />
          <Route path={path.ALBUM__TITLE__PID} element={<Album />} />
          <Route path={path.PLAYLIST__TITLE_PID} element={<Album />} />
          <Route path={path.ZING_CHART} element={<ZingChart />} />
          <Route path={path.HUB} element={<Hub />} />
          <Route path={path.RELEASE_NEW} element={<ReleaseNew />} />
          <Route path={path.TOP_100} element={<Top100 />} />
          <Route path={path.WEEKCHART__TITLE__CID} element={<WeekChart />} />
          <Route path={path.ARTIST} element={<Artist />} />

        </Route>
        
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
    </>
  );
}

export default App;

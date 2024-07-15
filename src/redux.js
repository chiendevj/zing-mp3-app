import rootReducer from "./store/reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { thunk } from "redux-thunk";

const reduxConfig = () => { 
  const store = createStore(rootReducer,
    applyMiddleware(thunk)
  )

  let persistor = persistStore(store)
  return { store, persistor }
}

export default reduxConfig
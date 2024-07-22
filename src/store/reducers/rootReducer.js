import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";
import appReducer  from "./appReducer";
import musicReducer from "./musicReducer";
import artistReducer from "./artistReducer";
import chartReducer from './chartReducer'
import hubhomeReducer from "./hubhomeReducer";

const commonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2
}

const musicConfig = {
    ...commonConfig,
    key: 'music',
    whitelist: ['curSongId']
}


const rootReducer = combineReducers({
    app: appReducer,
    music: persistReducer(musicConfig, musicReducer),
    artist: artistReducer,
    chart: chartReducer,
    hubhome: hubhomeReducer
})

export default rootReducer
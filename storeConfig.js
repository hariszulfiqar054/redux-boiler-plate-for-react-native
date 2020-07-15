import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const composer = compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const STORE = createStore(
  persistReducer,
  compose(applyMiddleware(thunk)),
);

export const PRESISTER = persistStore(STORE);

//  <Provider store={STORE}>
//    <PersistGate persistor={PERSISTOR}>
//      <Routes></Routes>
//    </PersistGate>
//  </Provider>;

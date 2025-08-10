// Importing AsyncStorage from the @react-native-async-storage/async-storage library to persist Redux state
import AsyncStorage from '@react-native-async-storage/async-storage';

// Importing the persistReducer and persistStore functions from the redux-persist library
import { persistReducer, persistStore } from 'redux-persist';

// Importing the combineReducers and configureStore functions from the Redux Toolkit
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// Import reducers
import User from './reducers/User';
import Categories from './reducers/Categories';
import Donation from './reducers/Donation';

// Combine all reducers into one root reducer
const rootReducer = combineReducers({
  user: User,
  categories: Categories,
  donation: Donation,
});

// Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }),
});

// Create persistor
export const persistor = persistStore(store);
export default store;

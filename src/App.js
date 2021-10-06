import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import "./App.css";
import MainLayout from "./components/MainLayout/Main";
import { persistor, store } from "./redux/store/store";


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <MainLayout />
      </PersistGate>
    </Provider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ROUTER } from './routes';
import App from './app';

import { Provider } from 'react-redux';
import { store } from './redux/store'
import  { Toaster } from 'react-hot-toast';
const router = createBrowserRouter(ROUTER)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App/>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
  </Provider>
);


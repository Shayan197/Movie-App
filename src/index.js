import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './Routes';
import axios from 'axios';
import { Provider } from 'react-redux';
import Store from './Store/Store';

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

if (accessToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
} else {
  console.error("🔴 TMDB access token is missing! Check environment variables.");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={Store}>
    <RouterProvider router={router}/>
  </Provider>
  // </React.StrictMode>
);
reportWebVitals();

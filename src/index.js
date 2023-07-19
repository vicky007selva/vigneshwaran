import React from 'react';
import ReactDOM from 'react-dom/client';

import CommonAppbar from "./components/CommonAppbar";
import Contact from './Pages/Contact';
import Experience from './Pages/Experience';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter basename='vigneshwaran'>
      <Routes>
        <Route path="/" element={<CommonAppbar />}>
           <Route index element={< App/>} />
          <Route path="Experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


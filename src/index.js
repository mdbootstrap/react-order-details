import React from 'react';
import { createRoot } from "react-dom/client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import reportWebVitals from './reportWebVitals';
import Basic from './basic/Basic';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import OrderDetails2 from './orderDetails2/OrderDetails2';
import OrderDetails3 from './orderDetails3/OrderDetails3';
import OrderDetails4 from './orderDetails4/OrderDetails4';
import OrderDetails5 from './orderDetails5/OrderDetails5';
import OrderDetails6 from './orderDetails6/OrderDetails6';
import OrderDetails7 from './orderDetails7/OrderDetails7';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/order-details-2" element={<OrderDetails2 />} />
        <Route path="/order-details-3" element={<OrderDetails3 />} />
        <Route path="/order-details-4" element={<OrderDetails4 />} />
        <Route path="/order-details-5" element={<OrderDetails5 />} />
        <Route path="/order-details-6" element={<OrderDetails6 />} />
        <Route path="/order-details-7" element={<OrderDetails7 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

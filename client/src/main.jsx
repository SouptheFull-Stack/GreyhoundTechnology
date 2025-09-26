// import ReactDOM from 'react-dom/client';

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/GreyhoundTechnology',
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       // {
//       //      path: '/About',
//       //      element: <About />,
//       // },
//       // {
//       //      path: '/Contact',
//       //      element: <Contact />,
//       // },
//       // {
//       //      path: '/Metrics',
//       //      element: <Metrics />,
//       // },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Optional: for global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
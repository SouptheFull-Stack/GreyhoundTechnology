import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'; // Optional: for global styles
import App from './App.jsx';
import Error from './pages/Error';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Blogs',
        element: <Blogs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css'; // Optional: for global styles

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

// {
//      path: '/About',
//      element: <About />,
// },
// {
//      path: '/Contact',
//      element: <Contact />,
// },
// {
//      path: '/Metrics',
//      element: <Metrics />,
// },


// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Define the router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={appRouter} />
);



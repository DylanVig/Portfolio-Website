import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css'; // Import the CSS reset
import './index.css';
import Home from './pages/Home.js';
import About from './pages/About.js';
import ExperiencePage from './pages/ExperiencePage.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
import reportWebVitals from './reportWebVitals.js';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "ExperiencePage",
    element: <ExperiencePage />,
  },
  {
    path: "Projects",
    element: <Projects />,
  },
  {
    path: "Contact",
    element: <Contact />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

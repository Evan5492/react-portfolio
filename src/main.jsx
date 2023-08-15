import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import About from './pages/about';
// import Projects from './pages/projects.jsx';
// import Contact from './pages/contact.jsx';
// import Resume from './pages/resume.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
       {
        index: true,
         element: <About />,
       },
       {
        path: '/about',
        element: <About />
       },
      //   {
      //     path: '/Projects',
      //   element: <Projects />,
      //  },
      //  {
      //    path:'/Contact',
      //    element:<Contact />,

      //   },
      //  {
      //    path:'/Resume',
      //    element:<Resume />,
      //  }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
)

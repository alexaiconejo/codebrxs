import React from 'react';
import ReactDOM from 'react-dom/client'
import Root from "./components/routes/Root.jsx";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Pagina2 from './components/pagina2/pagina2.jsx';

import App from "./App";

const router = createHashRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      { path:"/", element:<App/>},
      { path:"/pagina2", element:<Pagina2/>},

    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client'
import Root from "./components/routes/Root.jsx";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Contacto from './components/contacto/Contacto.jsx';
import Datos from './components/datos/Datos.jsx';
import Efemerides from './components/efemerides/Efemerides.jsx';
import Tienda from './components/tienda/Tienda.jsx';
import Videos from './components/videos/Videos.jsx';
import Vj from './components/vj/Vj.jsx';
import Mapa from  './components/mapa/Mapa.jsx'
import Dona from  './components/dona/Dona.jsx'
import Nosotrxs from './components/nosotrxs/Nosotrxs.jsx';
import Personajes from './components/personajes/Personajes.jsx';
import Play from './components/play/Play.jsx';
import Usuarios from './components/usuarios/Usuarixs.jsx';
import App from "./App";


const router = createHashRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      { path:"/", element:<App/>},
      { path:"/tienda", element:<Tienda/>},
      { path:"/dona", element:<Dona/>},
      { path:"/videos", element:<Videos/>},
      { path:"/contacto", element:<Contacto/>},
      { path:"datos", element:<Datos/>},
      { path:"/efemerides", element:<Efemerides/>},
      { path:"/mapa", element:<Mapa/>},
      { path:"/nosotrxs", element:<Nosotrxs/>},
      { path:"/personajes", element:<Personajes/>},
      { path:"/play", element:<Play/>},
      { path:"/usuarios", element:<Usuarios/>},
      { path:"/vj", element:<Vj/>},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
import './App.css';
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Home from "./Components/Home";
import Success from './Components/Success';
import NotFound from './Components/NotFound';

const router = createBrowserRouter([ 
  { path: "*", Component: Root},
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {

  return (
    
    <Routes>
      <Route path='/' element={< Home />} />
      <Route path='/SUCCESS' element={< Success />} />
      <Route path='*' element={< NotFound />} />
    
    </Routes>
  )
}


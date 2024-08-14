import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { Login } from './pages/login';
import { Register } from './pages/register';
import { Home } from './pages/home';

const router = createBrowserRouter([
  {path: '/', element: <Login />},
  {path: '/register', element: <Register />},
  {path: '/home', element: <Home />},
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

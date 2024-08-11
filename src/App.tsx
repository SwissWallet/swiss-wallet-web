import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { LoginPage } from './pages/login-page';
import { RegisterPage } from './pages/register-page';

const router = createBrowserRouter([
  {path: '/', element: <LoginPage />},
  {path: '/register', element: <RegisterPage />},
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

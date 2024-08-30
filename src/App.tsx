import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { Benefits } from './pages/benefits';
import { Canteen } from './pages/canteen';
import { Favorites } from './pages/favorites';
import { Home } from './pages/home';
import { Library } from './pages/library-page';
import { Login } from './pages/login';
import { Orders } from './pages/orders';
import { Register } from './pages/register';
import { Store } from './pages/store';
import { UserAccount } from './pages/user-account';
import { UserExtract } from './pages/user-extract';
import CardPointPage from './pages/card-points';

const router = createBrowserRouter([
  {path: '/', element: <Login />},
  {path: '/register', element: <Register />},
  {path: '/home', element: <Home />},
  {path: '/benefits', element: <Benefits />},
  {path: '/canteen', element: <Canteen />},
  {path: '/favorites', element: <Favorites />},
  {path: '/library', element: <Library />},
  {path: '/orders', element: <Orders />},
  {path: '/store', element: <Store />},
  {path: '/account', element: <UserAccount />},
  {path: '/extract', element: <UserExtract />},
  {path: '/add-point', element: <CardPointPage />},

])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

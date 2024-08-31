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
import { useSelector } from 'react-redux';
import { RootState } from './store';

const routerApp = createBrowserRouter([
  {path: '/home', element: <Home /> },
  {path: '/benefits', element: <Benefits />},
  {path: '/canteen', element: <Canteen />},
  {path: '/favorites', element: <Favorites />},
  {path: '/library', element: <Library />},
  {path: '/orders', element: <Orders />},
  {path: '/store', element: <Store />},
  {path: '/account', element: <UserAccount />},
  {path: '/extract', element: <UserExtract />},
])

const routerLogin = createBrowserRouter([
  {path: '/', element: <Login />},
  {path: '/register', element: <Register />},
])


function App() {
  const logado = useSelector((state:RootState) => state.login.value)
  console.log(logado);
  return (
    <RouterProvider router={logado ? routerLogin : routerApp} />
  )
}

export default App

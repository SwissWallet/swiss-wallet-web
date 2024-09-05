import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home';
import { Benefits } from '../pages/benefits';
import { Canteen } from '../pages/canteen';
import { Favorites } from '../pages/favorites';
import { Library } from '../pages/library-page';
import { Orders } from '../pages/orders';
import { Store } from '../pages/store';
import { UserAccount } from '../pages/user-account';
import { UserExtract } from '../pages/user-extract';
import { Login } from '../pages/login';
import { Register } from '../pages/register';
import { PrivateRoute } from './private-route';
import AddProduct from '../pages/list-product';
import AddNewProduct from '../components/macro-components/addproduct';



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: (
      <PrivateRoute element={<Home />} />
    ),
  },
  {
    path: "/benefits",
    element: (
      <PrivateRoute element={<Benefits />} />
    ),
  },
  {
    path: '/canteen', 
    element: (
      <PrivateRoute element={<Canteen />} />
    ),
  },
  {
    path: '/favorites', 
    element: (
      <PrivateRoute element={<Favorites />} />
    ),
  },
  {
    path: '/library', 
    element: (
      <PrivateRoute element={<Library />} />
    ),
  },
  {
    path: '/orders', 
    element: (
      <PrivateRoute element={<Orders />} />
    ),
  },
  {
    path: '/store', 
    element: (
      <PrivateRoute element={<Store />} />
    ),
  },
  {
    path: '/account', 
    element: (
      <PrivateRoute element={<UserAccount />} />
    ),
  },
  {
    path: '/extract', 
    element: (
      <PrivateRoute element={<UserExtract />} />
    ),
  },
  {
    path: '/add-product', 
    element: (
      <PrivateRoute element={<AddNewProduct />} />
    ),
  },
  {
    path: '/list-product', 
    element: (
      <PrivateRoute element={<AddProduct />} />
    ),
  },
]);
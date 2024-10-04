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
import AddProductPage from '../pages/app-product';
import BuyPage from '../pages/buy-product';
import { PaymentAdmin } from '../pages/payment-admin';
import { ShoppingPage } from '../pages/shopping-page';

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
    path: '/payment',
    element: (
      <PrivateRoute element={<PaymentAdmin />} />
    ),
  },
  {
    path: '/shopping',
    element: (
      <PrivateRoute element={<ShoppingPage />} />
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
      <PrivateRoute element={<AddProductPage />} />
    ),
  },
  {
    path: '/list-product',
    element: (
      <PrivateRoute element={<AddProduct />} />
    ),
  },
  {
    path: '/buy-product',
    element: (
      <PrivateRoute element={<BuyPage />} />
    ),
  },
]);
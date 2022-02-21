import { Navigate, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import ProductCreate from '../pages/ProductCreate';

const components = {
  Home: {
    component: Home,
    url: '/',
  },
  ProductCreate: {
    components: ProductCreate,
    url: '/admin/product/create'
  }
}

const routes = {
  guest: {
    route: [
      components.Home
    ],
    redirect: '/',
  },
  admin: {
    route: [
      components.Home,
      components.ProductCreate
    ],
    redirect: '/',
  }
}

export default routes;
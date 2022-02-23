import React,{ Suspense, lazy } from 'react';
import Layout from './components/Layout';
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Spinner from './components/Spinner';
import ErrorBoundary from './components/ErrorBoundary';
// import AdminRoutes from './components/PrivateRoutes/AdminRoutes';

const Home = lazy(() => import('./pages/Home'));
const AdminRoutes = lazy(() => import('./components/PrivateRoutes/AdminRoutes'));
const ProductCreate = lazy(() => import('./pages/ProductCreate'));
const ProductEdit = lazy(() => import('./pages/ProductEdit'));

const App: React.FC = () => {

  return (
    <Layout>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<Home />} />

            {/* admin restricted routes */}
            <Route path='admin/'>
              <Route element={<AdminRoutes />}>
                <Route index={true} element={<Navigate to="/" />} />
                <Route path='product/create' element={<ProductCreate />} />
                <Route path='product/edit/:productId' element={<ProductEdit />} />
              </Route>
            </Route>

            <Route 
              path='*'
              element={<Navigate to="/" />}
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}

export default App;

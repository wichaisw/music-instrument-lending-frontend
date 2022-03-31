import React,{ Suspense, lazy } from 'react';
import Layout from './components/Layout';
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Spinner from './components/Spinner';
import ErrorBoundary from './components/ErrorBoundary';
import { Toaster } from 'react-hot-toast';
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
            <Route path='admin' element={<AdminRoutes />}>
              <Route index element={<Navigate to="/" />} />
              <Route path='product/create' element={<ProductCreate />} />
              <Route path='product/edit/:productId' element={<ProductEdit />} />
            </Route>

            <Route 
              path='*'
              element={<Navigate to="/" />}
            />
          </Routes>
        </Suspense>
        <Toaster 
          toastOptions={{
            className: '',
            success: {
              style: {
                border: '2px solid #16a34a',
              },
            },
            error: {
              style: {
                border: '2px solid #dc2626',
              },
            },
          }}
          position='bottom-right' 
        />
      </ErrorBoundary>
    </Layout>
  )
}

export default App;

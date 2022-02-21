import React,{ Suspense, lazy } from 'react';
import Layout from './components/Layout';
import { Routes, Route, Navigate } from "react-router-dom";
import Spinner from './components/Spinner';
import ErrorBoundary from './components/ErrorBoundary';

function RequireAuth({ children, redirectTo }: any) {
  let isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

const Home = lazy(() => import('./pages/Home'));
const ProductCreate = lazy(() => import('./pages/ProductCreate'));

const App: React.FC = () => {

  return (
    <Layout>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='admin/'>
              <Route index={true} element={<Navigate to="/" />} />
              <Route path='product/create' element={<ProductCreate />} />
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

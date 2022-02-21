import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductCreate from './pages/ProductCreate';
import { Routes, Route, Navigate } from "react-router-dom";

function RequireAuth({ children, redirectTo }: any) {
  let isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

const App: React.FC = () => {


  return (
    <Layout>
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
    </Layout>
  );
}

export default App;


import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Sell from './pages/Sell';
import { Login, Register } from './pages/Auth';
import { About, Privacy, Terms } from './pages/Static';
import { PageRoute } from './types';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={PageRoute.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={PageRoute.PRODUCTS.substring(1)} element={<Products />} />
          <Route path={PageRoute.PRODUCT_DETAIL.substring(1)} element={<ProductDetail />} />
          <Route path={PageRoute.SELL.substring(1)} element={<Sell />} />
          <Route path={PageRoute.LOGIN.substring(1)} element={<Login />} />
          <Route path={PageRoute.REGISTER.substring(1)} element={<Register />} />
          <Route path={PageRoute.ABOUT.substring(1)} element={<About />} />
          <Route path={PageRoute.PRIVACY.substring(1)} element={<Privacy />} />
          <Route path={PageRoute.TERMS.substring(1)} element={<Terms />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

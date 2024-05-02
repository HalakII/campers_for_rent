import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/HomePage/HomePage'));
const Catalog = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const Favorites = lazy(() => import('../pages/FavoritesPage/FavoritesPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />}></Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

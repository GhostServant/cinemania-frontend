import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './../components/Loader/Loader';

const Home = lazy(() => import('./../pages/Home'));
const Library = lazy(() => import('./../pages/Library'));
const Catalog = lazy(() => import('./../pages/Catalog'));
const Layout = lazy(() => import('./../containers/Layout'));
const NotFound = lazy(() => import('./../components/NotFound/NotFound'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:id" element={<Catalog />} />
          <Route path="library" element={<Library />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

import { Suspense } from 'react';
import './App.css';
import Loader from './components/Loader/Loader';
import { Route, Routes, useLocation } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import Layout from './components/Layout/Layout';
import TeachersPage from './pages/TeachersPage/TeachersPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import useAuthListener from './firebaseHelpers/useAuthListener';

function App() {
  useAuthListener();

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;

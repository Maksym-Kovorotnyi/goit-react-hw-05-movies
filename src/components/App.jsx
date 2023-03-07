
import { lazy, Suspense } from "react";
import {  Route, Routes } from 'react-router-dom';
import { Layout } from "./Layout/Layout";


const HomePage = lazy(() => import('../Pages/HomePage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MoviesPage = lazy(() => import('../Pages/MoviesPage'));
const MovieInfoPage = lazy(() => import('../Pages/MovieInfoPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Suspense fallback={<p>...Loading</p>}><HomePage /></Suspense> } />
          <Route path='movies' element={<Suspense fallback={<p>...Loading</p>}><MoviesPage /></Suspense>} />
          <Route path='movies/:movieId' element={<Suspense fallback={<p>...Loading</p>}><MovieInfoPage /></Suspense>} >
            <Route path='cast' element={<Suspense fallback={<p>...Loading</p>}><Cast /></Suspense>} />
            <Route path="reviews" element={<Suspense fallback={<p>...Loading</p>}><Reviews/></Suspense>}/>
          </Route >
        </Route>
      </Routes>
      </>
    
  );
};


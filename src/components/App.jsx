import { MovieInfoPage } from "Pages/MovieInfoPage";
// import { lazy } from "react";
import {  Route, Routes } from 'react-router-dom';
import { HomePage } from "../Pages/HomePage";
import { MoviesPage } from "../Pages/MoviesPage";
import { Cast } from "./Cast/Cast";
import { Layout } from "./Layout/Layout";
import { Reviews } from "./Reviews/Reviews";



export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='movies' element={<MoviesPage />} />
          <Route path='movies/:movieId' element={<MovieInfoPage />} >
            <Route path='cast' element={<Cast />} />
            <Route path="reviews" element={<Reviews/>}/>
          </Route >
        </Route>
      </Routes>
      </>
    
  );
};


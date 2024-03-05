import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FilmListPage from './pages/FilmListPage/FilmListPage';
import FilmDetailsPage from './pages/FilmDetailsPages/FilmDetailsPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<FilmListPage/>} />
            <Route path="/films" element={<FilmListPage/>} />
            <Route path="/films/:id" element={<FilmDetailsPage/>} />
        </Routes>
    );
};

export default AppRoutes;
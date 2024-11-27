// src/app/routes/AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NotFound, NewsDetail, Home } from '../../../pages';
import App from '../../App';
// import { NewsDetai } from '../../pages/Home'; // Импорт страницы Home
// import { NotFoundPage } from '../../pages/NotFound'; // Страница 404
const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound />} /> Страница 404
      </Routes>
    </Router>
  );
};

export default AppRouter;

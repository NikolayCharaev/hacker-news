// src/app/routes/AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NotFound, Home } from '../../../pages';
import Header from '../../../shared/ui/header/header';
const AppRouter: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> Страница 404
      </Routes>
    </Router>
  );
};

export default AppRouter;

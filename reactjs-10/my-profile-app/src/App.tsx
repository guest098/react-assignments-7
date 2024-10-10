import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CardList from './components/CardList';
import CardDetail from './components/CardDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CardList />} />
          <Route path="cards/:id" element={<CardDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

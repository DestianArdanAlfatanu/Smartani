import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import Form from './Form' 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/Layout";
import Home from "./routes/Home";
import TermsAndConditions from './routes/TermsAndConditions';
import PrivacyPolicy from './routes/PrivacyPolicy';
import NoPage from "./routes/NoPage";
import './App.css';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="terms" element={<TermsAndConditions />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
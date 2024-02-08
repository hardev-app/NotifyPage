import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from "./Layout"
import PathConstants from "../routes/pathConstants";

/*import NotifyPug from "../routes/NotifyPug"
import Home from "../routes/Home";
import PrivacyPolicy from "../routes/PrivacyPolicy";
import TermsAndConditions from "../routes/TermsAndConditions";
import NoPage from "../routes/NoPage";*/

const ComponentHome = lazy(() => import('../routes/Home'));
const ComponentNotifyPug = lazy(() => import('../routes/NotifyPug'));
const ComponentTermsAndConditions = lazy(() => import('../routes/TermsAndConditions'));
const ComponentPrivacyPolicy = lazy(() => import('../routes/PrivacyPolicy'));
const ComponentNoPage = lazy(() => import('../routes/NoPage'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ComponentHome />} />
          <Route path={PathConstants.NOTIFYPUG} element={<ComponentNotifyPug />} />
          <Route path={PathConstants.PRIVACY} element={<ComponentPrivacyPolicy />} />
          <Route path={PathConstants.TERMS} element={<ComponentTermsAndConditions />} />
          <Route path="*" element={<ComponentNoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
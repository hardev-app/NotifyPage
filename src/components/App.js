import { Routes, Route } from 'react-router-dom';
import Layout from "./Layout"
import PathConstants from "../routes/pathConstants";
import Home from "../routes/Home";
import NoPage from "../routes/NoPage";
import NotifyPug from "../routes/NotifyPug"
import PrivacyPolicy from "../routes/PrivacyPolicy";
import TermsAndConditions from "../routes/TermsAndConditions";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={PathConstants.NOTIFYPUG} element={<NotifyPug />} />
          <Route path={PathConstants.PRIVACY} element={<PrivacyPolicy />} />
          <Route path={PathConstants.TERMS} element={<TermsAndConditions />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
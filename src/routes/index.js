import React from "react"
import PathConstants from "./pathConstants"
const Home = React.lazy(() => import("../pages/Home"))
const PrivacyPolicy = React.lazy(() => import("../pages/PrivacyPolicy"))
const TermsAndConditions = React.lazy(() => import("../pages/TermsAndConditions"))

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.PRIVACY, element: <PrivacyPolicy /> },
    { path: PathConstants.TERMS, element: <TermsAndConditions /> },
]

export default routes
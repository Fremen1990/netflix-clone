import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTES from "./constants/routes";
import { ProtectedRoute } from "./helpers/routes";
// import { useAuthListener } from "./hooks";

export default function App() {
  // const { user } = useAuthListener();

  return (
    <>
      <Router>
        <Routes>
          <Route path={ROUTES.SIGN_IN} element={<Signin />} />
          <Route path={ROUTES.SIGN_UP} element={<Signup />} />

          <Route path={ROUTES.HOME} element={<Home />} />
          <Route
            path={ROUTES.BROWSE}
            element={
              <ProtectedRoute>
                <Browse />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

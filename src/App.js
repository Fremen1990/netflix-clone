import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { JumbotronContainer } from "./containers/JumbotronContainer";
import { FooterContainer } from "./containers/FooterContainer";
import { FaqsContainer } from "./containers/FaqsContainer";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={
              <>
                <JumbotronContainer />
                <FaqsContainer />
                <FooterContainer />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

// TODO 2:33 Header component - on separated branch from develop branch, the structure of branches: main -> develop
//  -> HeaderComponent

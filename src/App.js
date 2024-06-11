import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import pages from "./Components/utilities/pages";
import Layout from "./Components/layout/Layout";
import Home from "./Components/pages/Home/Main";
import NotFound from "./Components/pages/NotFound";
import UnderConstruction from "./Components/pages/UnderConstruction"

const App = () => {
  return(
    <>
      <Layout>
        <Routes>
          <Route path={pages.get("home").path} element={<Home />} />
          <Route
            path={pages.get("about").path}
            element={<UnderConstruction />}
          />
          <Route
            path={pages.get('menu').path}
            element={<UnderConstruction />}
          />
          {/*<Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route
            path={pages.get('confirmedBooking').path}
            element={<ConfirmedBooking />}
          />*/}
          <Route
            path={pages.get('orderOnline').path}
            element={<UnderConstruction />}
          />
          <Route
            path={pages.get('login').path}
            element={<UnderConstruction />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;

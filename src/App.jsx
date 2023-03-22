import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import Home from "./pages/Home/Home";
import Contents from "./pages/Contents";
import Content from "./pages/Content";
import NotFound from "./pages/NotFound";
import navs from "./data/navs.json";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ContentWrapper />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          {navs.map((nav) => (
            <React.Fragment key={nav.id}>
              <Route path={nav.name} element={<Contents name={nav.name} />} />
              <Route
                path={nav.name + "/:id"}
                element={<Content name={nav.name} />}
              />
            </React.Fragment>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

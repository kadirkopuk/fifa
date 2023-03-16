import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import Home from "./pages/Home/Home";
import Leagues from "./pages/Leagues";
import League from "./pages/League";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ContentWrapper />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/leagues/:leagueId" element={<League />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

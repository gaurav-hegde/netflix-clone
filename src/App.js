import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import Player from "./Pages/Player";
import TvShow from "./Pages/TvShow";
import Netflix from "./Pages/Netflix";
import MoviePage from "./Pages/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/tv" element={<TvShow />} />
        <Route exact path="/" element={<Netflix />} />
        <Route exact path="/movie" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

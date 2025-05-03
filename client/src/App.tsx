import { Route, Routes } from "react-router";
import RootLayout from "./components/root-layout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/Movies";
import MovieDetails from "./pages/Movies/Details";
import ShowtimesPage from "./pages/Showtimes";
import ShowtimeDetails from "./pages/Showtimes/Details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />

        <Route path="movies">
          <Route index element={<MoviesPage />} />
          <Route path=":id" element={<MovieDetails />} />
        </Route>

        <Route path="showtimes">
          <Route index element={<ShowtimesPage />} />
          <Route path=":id" element={<ShowtimeDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

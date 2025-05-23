import { Route, Routes } from "react-router";
import RootLayout from "./components/root-layout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/Movies";
import MovieDetails from "./pages/Movies/Details";
import ShowtimesPage from "./pages/Showtimes";
import ShowtimeDetails from "./pages/Showtimes/Details";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import PersistAuth from "./features/auth/PersistAuth";

function App() {
  return (
    <Routes>
      <Route element={<PersistAuth />}>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />

          <Route path="movies">
            <Route index element={<MoviesPage />} />
            <Route path=":id" element={<MovieDetails />} />
          </Route>

          <Route path="showtimes">
            <Route index element={<ShowtimesPage />} />
            <Route path=":id" element={<ShowtimeDetails />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

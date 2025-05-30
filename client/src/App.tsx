import { Navigate, Route, Routes } from "react-router";
import RootLayout from "./components/root-layout";
import MoviesPage from "./pages/Movies";
import MovieDetails from "./pages/Movies/Details";
import ShowtimesPage from "./pages/Showtimes";
import ShowtimeDetails from "./pages/Showtimes/Details";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import PersistAuth from "./features/auth/PersistAuth";
import RedirectAuthenticatedRoute from "./features/auth/RedirectAuthenticatedRoute";
import NewMoviePage from "./pages/Movies/New";

function App() {
  return (
    <Routes>
      <Route element={<PersistAuth />}>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Navigate to={"/movies"} replace />} />
          <Route
            path="login"
            element={
              <RedirectAuthenticatedRoute>
                <LoginPage />
              </RedirectAuthenticatedRoute>
            }
          />
          <Route
            path="signup"
            element={
              <RedirectAuthenticatedRoute>
                <SignupPage />
              </RedirectAuthenticatedRoute>
            }
          />

          <Route path="movies">
            <Route index element={<MoviesPage />} />
            <Route path="new" element={<NewMoviePage />} />
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

import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ProtectedRoute from "./ProtectedRoute";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2>Todo List App</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

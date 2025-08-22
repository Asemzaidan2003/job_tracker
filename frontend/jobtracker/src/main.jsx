import { Provider } from "@/components/ui/provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import App from './App.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

function Main() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <StrictMode>
      <Provider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <App /> : <Navigate to="/login" />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </Provider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Main />);

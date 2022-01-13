import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./container/About";
import BoardEntry from "./container/BoardEntry";
import CEOentry from "./container/CEOentry";
import ExecutiveEntry from "./container/ExecutiveEntry";
import Home from "./container/Home";
import Login from "./container/LoginPage/Login";
import Signup from "./container/LoginPage/Signup";
import { UserAuthContextProvider } from "./component/Context/UserAuthContext";
import ProtectedRoute from "./container/LoginPage/ProtectedRoute";

function App() {
  return (
    <Router>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/staffentry"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ceoentry"
            element={
              <ProtectedRoute>
                <CEOentry />
              </ProtectedRoute>
            }
          />
          <Route
            path="/boardentry"
            element={
              <ProtectedRoute>
                <BoardEntry />
              </ProtectedRoute>
            }
          />
          <Route
            path="/executiveentry"
            element={
              <ProtectedRoute>
                <ExecutiveEntry />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="*"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;

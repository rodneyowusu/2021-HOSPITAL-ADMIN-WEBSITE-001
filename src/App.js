import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./container/About";
import BoardEntry from "./container/BoardEntry";
import CEOentry from "./container/CEOentry";
import ExecutiveEntry from "./container/ExecutiveEntry";
import Home from "./container/Home";
import Login from "./container/LoginPage/Login";
import EventEntry from "./container/EventEntry";
import PublicationEntry from "./container/PublicationEntry";
import Signup from "./container/LoginPage/Signup";
import { UserAuthContextProvider } from "./component/Context/UserAuthContext";
import ProtectedRoute from "./container/LoginPage/ProtectedRoute";
import NewsEntry from "./container/NewsEntry"

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

<Route
            path="/newsentry"
            element={
              <ProtectedRoute>
                <NewsEntry/>
              </ProtectedRoute>
            }
          />

          <Route
            path="/evententry"
            element={
              <ProtectedRoute>
                <EventEntry />
              </ProtectedRoute>
            }
          />

          <Route
            path="/publicationentry"
            element={
              <ProtectedRoute>
                <PublicationEntry />
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

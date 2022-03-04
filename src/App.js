import React from "react";
import { Login, Signup, UserContext } from "./components/Auth";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import EnglishTest from "./components/EnglishTest";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <UserContext>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <h1>
                <Home />
              </h1>
            }
          />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<EnglishTest />} />
        </Routes>
      </div>
    </UserContext>
  );
}

export default App;

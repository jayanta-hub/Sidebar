import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile.jsx";
import Post from "./pages/Post.jsx";
import Gallary from "./pages/Gallary.jsx";
import ToDo from "./pages/ToDo.jsx";
import LandingPage from "./pages/LandingPage";
import PageLayout from "./pages/PageLayout";
import { Provider } from "react-redux";
import store from "./application/store/index";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<PageLayout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/post" element={<Post />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/gallary" element={<Gallary />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;

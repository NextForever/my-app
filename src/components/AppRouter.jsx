import React from "react";
import { Routes, Route } from "react-router-dom";
import PostIdPage from "../pages/PostIdPage";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Video from "../pages/Video";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/post/:id" element={<PostIdPage />} />
      <Route path="/video" element={<Video />} />
    </Routes>
  );
};

export default AppRouter;

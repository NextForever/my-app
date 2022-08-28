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
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="/video" element={<Video />} />
      <Route path="/*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};

export default AppRouter;

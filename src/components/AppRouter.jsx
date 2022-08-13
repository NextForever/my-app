import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Video from "../pages/Video";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route path="/video" element={<Video />} />
      <Route exact path="/post/:id" element={<PostIdPage />} />
    </Routes>
  );
};

export default AppRouter;

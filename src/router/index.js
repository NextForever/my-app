import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import Video from "../pages/Video";

export const privateRoutes = [
  { path: "/about", component: About },
  { path: "/posts", component: Posts },
  { path: "/posts/:id", component: PostIdPage },
  { path: "/video", component: Video },
];

export const publicRoutes = [{ path: "/login", component: Login, exact: true }];

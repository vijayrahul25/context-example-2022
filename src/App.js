import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalContextProvider } from "./context/GlobalContextProvider";

import { CategoryList } from "./component/category/CategoryList";
import { TopicList } from "./component/topic/TopicList";
import { PostList } from "./component/post/PostList";
import { Header } from "./component/common/Header";
import { PageNotFound } from "./component/common/PageNotFound";

export default function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
        <div className="container" style={{ background: "#eee" }}>
          <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="category/:categoryId/topics" element={<TopicList />} />
            <Route path="topic/:topicId/posts" element={<PostList />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./Pages/HomePage";
import { SearchPage } from "./Pages/SearchPage";
import { ViewPage } from "./Pages/ViewPage";
import { NotfoundPage } from "./Pages/NotfoundPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/search" element={<SearchPage></SearchPage>} />
        <Route path="/View" element={<ViewPage></ViewPage>} />
        <Route path="*" element={<NotfoundPage></NotfoundPage>} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };

// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./Pages/HomePage";
import { SearchPage } from "./Pages/SearchPage";
import { ViewPage } from "./Pages/ViewPage";
import { NotfoundPage } from "./Pages/NotfoundPage";
import { useState } from "react";


// when the state change --> component re-render --> re-run :: APP
const App = () => {
    const [text, setText] = useState(""); // a
    console.log( text);

    const handleSearchText = (newVal) => {
        setText(newVal); // noted! --> a
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage text={text} handleSearchText={handleSearchText} x="y" />} />
                <Route path="/search" element={<SearchPage text={text} handleSearchText={handleSearchText} />} />
                <Route path="/view" element={<ViewPage />} />
                <Route path="*" element={<NotfoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export  {App};
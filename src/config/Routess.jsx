import React from 'react';

import { Route, Routes, Router } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const Routess = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path='/:category/search/:keyword' element={<Catalog/>} />
            <Route path='/:category/:id' element={<Detail/>} />
            <Route path='/:category' element={<Catalog/>} /> */}
        </Routes>
    )
}

export default Routess;

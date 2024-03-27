import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import injectContext, { Context } from './store/AppContext'
import Home from './views/Home'
import AddContact from './views/AddContact'
import EditContact from './views/EditContact';

const App = () => {

    

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/addContact' element={<AddContact />} />
                <Route path='/' element={<Home />} />
                <Route path='/editcontact/:id' element={<EditContact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default injectContext(App)
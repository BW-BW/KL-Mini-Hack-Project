import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

import Profile from "./components/creator-profile/profile";


function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Profile/>}/>
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;

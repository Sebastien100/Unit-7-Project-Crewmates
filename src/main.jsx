import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App'
import MateGallery from './Components/MateGallery/MateGallery';
import NewMate from './Components/NewMate/NewMate';
import MateDetails from './Components/MateDetails/MateDetails';
import EditMate from './Components/EditMate/EditMate'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>  
  <Routes>
    <Route index={true} path="/" element={<App />} />
    <Route index={false} path="/create" element={<NewMate />} />
    <Route index={false} path="/gallery" element={<MateGallery/>} />
    <Route index={false} path="/details/:index" element={<MateDetails />} />
    <Route index={false} path="/update/:index" element={<EditMate />} />
  </Routes>
 </BrowserRouter>
    
 
  
)

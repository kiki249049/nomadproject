import logo from './logo.svg';
import PropTypes from "prop-types"
import styles from "./App.module.css"
import Movie from "./components/Movie"
import { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from "./routes/Home"
import Detail from "./routes/Detail"


function App() {
 return <Router basename={process.env.PUBLIC_URL}>
  <Routes>
    <Route path="/" element={<Home/>}>
    </Route>
    <Route path="/movie/:id" element={<Detail/>}>
    </Route>
  </Routes>
 </Router> 
}

export default App;

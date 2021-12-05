import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import Home from "./Home";
import About from "./About";
import Help from "./Help";
import Contacts from "./Contacts";
import NoMatch from "./NoMatch";

function App() {
  return (
    <div className="App"> 
        <Routes>
          <Route exact path="/" element={<Navbar />}>
            <Route index element={<Home />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/help' element={<Help />}></Route>
            <Route exact path='/contacts' element={<Contacts />}></Route>
            <Route path='*' element={<NoMatch />}></Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;

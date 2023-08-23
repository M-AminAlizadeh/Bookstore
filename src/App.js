import './style.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Books from "./Pages/Books";
import Categories from './Pages/Categories';

const App = ()=> {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Books />}/>
        <Route path='/categories' element={<Categories />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

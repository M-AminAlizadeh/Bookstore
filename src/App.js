import './style.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Books from "./Components/Books";
import Form from "./Components/Form";

const App = ()=> {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Books />}/>
        <Route path='/categories' element={<Form />}/>
      </Routes>
    </>
  );
}

export default App;

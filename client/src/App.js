
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Create from './Pages/Create/Create';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Create />}/>
    </Routes>
  </BrowserRouter>
);
}

export default App;

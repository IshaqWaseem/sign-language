import './App.css';
import Login from "./pages/Login";
import Translation from './pages/Translation';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from './pages/Profile';
import Navbar from './components/Navbar/Navbar';

function App() {
  console.log(

    process.env.REACT_APP_API_KEY
      )
  return (

    <BrowserRouter>
    <div className='App'>
      
    <Navbar/>
    <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Profile" element={<Profile/>}/>
              <Route path="/Translation" element={<Translation />} />
    </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;

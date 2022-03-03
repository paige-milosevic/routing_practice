import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Word from './components/Word';



function App() {

  
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/:param" element={<Word />}/>
          <Route path="/:param/:color1/:color2" element={<Word />}/>
      </Routes>
    </div>
    
    </BrowserRouter>


  );
}

export default App;

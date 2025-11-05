import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


function App() {
  return (

      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;

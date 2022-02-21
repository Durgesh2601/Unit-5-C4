import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { SerachPage } from './components/SearchPage';
import { DataDetail } from './components/DataDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/search' element={<SerachPage/>}></Route>
        <Route path='/data/:id' element={<DataDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
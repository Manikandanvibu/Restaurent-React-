import './App.css';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurentlist from './components/Restaurentlist';
import { BrowserRouter,Routes,Route,} from 'react-router-dom';
import Viewrestaurant from './components/Viewrestaurant';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>

      <Routes>
        {/* path setting for restaurentlist */}
        <Route path='/' element={<Restaurentlist></Restaurentlist>}></Route>
        <Route path='/view-restaurent/:id' element={<Viewrestaurant></Viewrestaurant>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/header";
import Main from "./main.js";
import Products from "./products";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Header/>
      <Router>
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

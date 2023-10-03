import "./App.css";
import Header from "./components/header";
import Main from "./main.js";
import Products from "./products";
import Browse from "./components/browse";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/browse" Component={Browse}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

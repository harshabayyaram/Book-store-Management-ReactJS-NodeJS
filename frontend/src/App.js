import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./components/Book";
import AddBook from "./components/AddBook";
import UpdateBook from "./components/UpdateBook";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Book />}></Route>
          <Route path="/addBook" element={<AddBook />}></Route>
          <Route path="/update/:id" element={<UpdateBook />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

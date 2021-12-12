import "./All.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BookContext } from "./context/BookContext";
import { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import BookOverview from "./pages/BookOverview";
import BookAdd from "./pages/BookAdd";
import EBookAdd from "./pages/EbookAdd";
import EbookOverview from "./pages/EbookOverview";
import FoodOverview from "./pages/FoodOverview";
import ServiceOverview from "./pages/ServiceOverview";
import ItemOverview from "./pages/ItemOverview";
import BookEdit from "./pages/BookEdit";
import EbookEdit from "./pages/EbookEdit";
import SppOverview from "./pages/SppOverview";
import UniformOverview from "./pages/UniformOverview";



function App() {
  const [isEditBook, setIsEditBook]= useState(false);
  const [bookData, setBookData] = useState("");
  const [ebookData, setEbookData] = useState("");

  return (
    <BookContext.Provider value={{isEditBook, setIsEditBook, bookData, setBookData, ebookData, setEbookData}}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookoview" element={<BookOverview />} />
        <Route path="/bookadd" element={<BookAdd />} />
        <Route path="/bookedit" element={<BookEdit />} />
        <Route path="/ebookoview" element={<EbookOverview />} />
        <Route path="/ebookadd" element={<EBookAdd />} />
        <Route path="/ebookedit" element={<EbookEdit />} />
        <Route path="/sppoview" element={<SppOverview />} />
        <Route path="/uniformoview" element={<UniformOverview />} />
        <Route path="/foodoview" element={<FoodOverview />} />
        <Route path="/serviceoview" element={<ServiceOverview />} />
        <Route path="/itemoview" element={<ItemOverview />} />
        {/* <Route path="/useradd" element={<UserAdd />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </BookContext.Provider>
  );
}

export default App;

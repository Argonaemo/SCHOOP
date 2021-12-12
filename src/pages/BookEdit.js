import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../components/Drawer";
import HeaderAdmin from "../components/HeaderAdmin";
import { getLocalStorageSession } from "../functions/localStorageSession";
import { Icon } from "@iconify/react";
import {
  setFirestoreStorage,
  deleteFirestoreStorage,
} from "../functions/firebaseStorage";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { BookContext } from "../context/BookContext";

const BookEdit = () => {
  const navigate = useNavigate();
  const { isEditBook, bookData } = useContext(BookContext);

  // Init State
  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pages, setPages] = useState("");
  const [stock, setStock] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("Novel");
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (getLocalStorageSession("adminToken")) {
      if (isEditBook) {
        setTitle(bookData.judul);
        setSynopsis(bookData.sinopsis);
        setStock(bookData.stok);
        setAuthor(bookData.penulis);
        setPublisher(bookData.penerbit);
        setPages(bookData.jumlahHalaman);
        //   setFile("");
        setYear(bookData.tahunTerbit);
        setCategory(bookData.categories);
      } else {
        navigate("/bookoview");
      }
    } else {
      navigate("/");
    }
  }, []);

  const updateHandler = async (ev) => {
    ev.preventDefault();
    if (file !== null) {
      const newUrl = await setFirestoreStorage(file, "book/");
      await deleteFirestoreStorage(bookData.image, "book/");
      const userDoc = doc(db, "buku", bookData.id);
      const idBuku = Math.floor(Math.random() * 50) + 1;
      const keyBuku = title.charAt(0).toUpperCase();
      const newFields = {
        judul: title,
        sinopsis: synopsis,
        penulis: author,
        penerbit: publisher,
        jumlahHalaman: Number(pages),
        stok: Number(stock),
        tahunTerbit: year,
        categories: category,
        ebook: "",
        id: Number(idBuku),
        image: newUrl,
        isKonvensional: true,
        isPopular: false,
        keyName: keyBuku,
      };
      await updateDoc(userDoc, newFields);
    } else {
      const userDoc = doc(db, "buku", bookData.id);
      // const idBuku = Math.floor(Math.random() * 50) + 1;
      const keyBuku = title.charAt(0).toUpperCase();
      const newFields = {
        judul: title,
        sinopsis: synopsis,
        penulis: author,
        penerbit: publisher,
        jumlahHalaman: Number(pages),
        stok: Number(stock),
        tahunTerbit: year,
        categories: category,
        // ebook: "",
        // id: Number(idBuku),
        image: bookData.image,
        // isKonvensional: true,
        // isPopular: false,
        keyName: keyBuku,
      };
      await updateDoc(userDoc, newFields);
    }

    setTitle("");
    setSynopsis("");
    setStock("");
    setAuthor("");
    setPublisher("");
    setPages("");
    setFile("");
    setYear("");
    setCategory("Novel");
    // navigate to book overview
    navigate("/bookoview");
  };

  return (
    <div className="bookAdd">
      <Drawer />
      <div className="bookAddContainer">
        <HeaderAdmin />
        <div className="bookTitle">
          <h1>EDIT BOOK</h1>
          <p>Manage Your Book Easily</p>
        </div>
        <div className="bookAddForms">
          <form action="" onSubmit={updateHandler}>
            <div className="bookAddFormKiri">
              <div className="bookAddForm">
                <h5>Title</h5>
                <input
                  value={title}
                  type="text"
                  required
                  onChange={(ev) => setTitle(ev.target.value)}
                />
              </div>
              <div className="bookAddForm synopsisForm">
                <h5>Synopsis</h5>
                <textarea
                  value={synopsis}
                  name=""
                  id=""
                  cols="60"
                  rows="4"
                  required
                  onChange={(ev) => setSynopsis(ev.target.value)}
                />
              </div>
              <div className="bookAddForm">
                <h5>Author</h5>
                <input
                  value={author}
                  type="text"
                  required
                  onChange={(ev) => setAuthor(ev.target.value)}
                />
              </div>
              <div className="bookAddForm">
                <h5>Publisher</h5>
                <input
                  value={publisher}
                  type="text"
                  required
                  onChange={(ev) => setPublisher(ev.target.value)}
                />
              </div>
            </div>
            <div className="bookAddFormKanan">
              <div className="bookAddForm">
                <h5>Number of Pages</h5>
                <input
                  value={pages}
                  type="number"
                  required
                  onChange={(ev) => setPages(ev.target.value)}
                />
              </div>
              <div className="bookAddForm">
                <h5>Stock</h5>
                <input
                  value={stock}
                  type="number"
                  required
                  onChange={(ev) => setStock(ev.target.value)}
                />
              </div>
              <div className="bookAddForm">
                <h5>Publication Year</h5>
                <input
                  value={year}
                  type="text"
                  required
                  onChange={(ev) => setYear(ev.target.value)}
                />
              </div>
              <div className="bookAddForm">
                <h5>Category</h5>
                <select
                  required
                  onChange={(ev) => setCategory(ev.target.value)}
                  value={category}
                >
                  <option value="Novel">Novel</option>
                  <option value="Pengembangan Diri">Pengembangan Diri</option>
                  <option value="Fiksi">Fiksi</option>
                  <option value="Referensi">Referensi</option>
                  <option value="Kesenian">Kesenian</option>
                  <option value="Bahasa">Bahasa</option>
                  <option value="Karya Umum">Karya Umum</option>
                  <option value="Ilmu Pengetahuan Sosial">
                    Ilmu Pengetahuan Sosial
                  </option>
                  <option value="Senin dan Desain">Seni dan Desain</option>
                  <option value="Ilmu Terapan">Ilmu Terapan</option>
                  <option value="Agama">Agama</option>
                  <option value="Komputer dan Teknologi">
                    Komputer dan Teknologi
                  </option>
                  <option value="Kesusastraan">Kesusastraan</option>
                  <option value="Ilmu Pengetahuan Alam">
                    Ilmu Pengetahuan Alam
                  </option>
                  <option value="Olahraga">Olahraga</option>
                  <option value="Finansial">Finansial</option>
                  <option value="Fiksi dan Sastra">Fiksi dan Sastra</option>
                  <option value="Ilmu Pasti">Ilmu Pasti</option>
                  <option value="Sejarah">Sejarah</option>
                </select>
              </div>
              <div className="bookAddForm fileForm">
                <h5>img</h5>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(ev) => setFile(ev.target.files[0])}
                />
              </div>
              {/* <div className="bookAddForm fileForm">
                <h5>pdf</h5>
                <input type="file" accept=".pdf" />
              </div> */}
            </div>
            <button type="submit" className="addSubmitBtn">
              Edit {<Icon icon="dashicons:arrow-right-alt2" width="25" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookEdit;

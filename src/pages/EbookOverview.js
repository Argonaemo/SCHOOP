import { useEffect, useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../components/Drawer";
import HeaderAdmin from "../components/HeaderAdmin";
import { getLocalStorageSession } from "../functions/localStorageSession";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { deleteFirestoreStorage } from "../functions/firebaseStorage";
import { deleteDoc, doc } from "firebase/firestore";
// import "../All.css"
import { Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import { Icon } from "@iconify/react";

const EbookOverview = () => {
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();
  const [books, setBooks] = useState("");
  // const [convBooks, setConvBooks] = useState()

  // * Use Context Init
  const { setIsEditBook, setEbookData } = useContext(BookContext);

  const getUsers = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, "buku"));
    setBooks(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }, [collection]);

  const deleteHandler = async (id, img, ebook) => {
    await deleteFirestoreStorage(img, "book/");
    await deleteFirestoreStorage(ebook, "ebook/");
    const bukuDoc = doc(db, "cobaBukuWeb", id);
    await deleteDoc(bukuDoc);
    const booksAfterDelete = books.filter((book) => book.id !== id);
    setBooks(booksAfterDelete);
  };

  const editHandler = (data) => {
    setIsEditBook(true);
    setEbookData(data);
    navigate("/ebookedit");
  };

  useEffect(() => {
    if (getLocalStorageSession("adminToken")) {
      getUsers();
      setIsEditBook(false);
      setEbookData("");
    } else {
      navigate("/");
      console.log("session is over");
    }
  }, []);

  return (
    <div className="bookOverview">
      <Drawer />
      <div className="bookOvContainer">
        <HeaderAdmin />
        <div className="bookTitle">
          <h1>E-BOOK OVERVIEW</h1>
          <p>Manage Your E-Book Easily</p>
        </div>

        <div className="bookCards">
          <div className="bookCard">
            <p>Total Book & E-Books</p>
            <h3>{books.length}</h3>
          </div>
          <div className="addButtonCard">
            <p>Add E-Book</p>
            <Link to="/ebookadd"><Icon icon="fluent:add-circle-16-regular" height="40" /></Link>
          </div>
          {/* <div className="bookCard">
            <p>Total Books</p>
            <h3>{books.length}</h3>
          </div> */}
          {/* <div className="bookCard">
            <p>Total Users</p>
            <h3>{foods.length}</h3>
          </div> */}
        </div>

        <div className="bookSearch">
          <p>Search Bar</p>
          <input
            type="text"
            placeholder="Type E-Book Name..."
            onChange={(ev) => setInputSearch(ev.target.value)}
          />
        </div>
        <div className="userTable">
          <table style={{ borderSpacing: "0 1em" }}>
            <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Author</th>
              {/* <th>Address</th> */}
              <th className="colspan" colSpan={2}>
                Action
              </th>
            </tr>
            </thead>
            <tbody>
            {books ?
              books
                .filter((val) => {
                  if (inputSearch === "") {
                    return val;
                  } else if (
                    val.judul.toLowerCase().includes(inputSearch.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .filter((buku) => buku.isKonvensional === false)
                .map((data, index) => (
                  // if(data.isKonvensional === true)(
                  <tr key={data.id}>
                    <td>{index+1}</td>
                    <td>
                      <img src={data.image} alt="" />
                    </td>
                    <td>{data.judul}</td>
                    <td>{data.categories}</td>
                    <td>{data.penulis}</td>
                    {/* <td>{data.jumlahHalaman}</td> */}
                    {/* <td>{data.address}</td> */}
                    <td className="headCen">
                      <button
                        className="editTable"
                        onClick={() => {
                          editHandler(data);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="headCen">
                      <button
                        className="deleteTable"
                        onClick={() =>
                          deleteHandler(data.id, data.image, data.ebook)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              :null}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EbookOverview;

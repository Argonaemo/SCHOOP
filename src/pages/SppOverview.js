import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../components/Drawer";
import HeaderAdmin from "../components/HeaderAdmin";
import { getLocalStorageSession } from "../functions/localStorageSession";
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../firebase";
// import "../All.css"

const SppOverview = () => {
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();
  const [spp, setSpp] = useState("");
  const [users, setUsers] = useState("");

  const getUsers = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, "history_spp"));
    const querySnapshotUser = await getDocs(collection(db, "users"));
    setSpp(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setUsers(
      querySnapshotUser.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  }, [collection]);

  const bayarHandler = async (data) => {
    const sppDoc = doc(db, "history_spp", data.id);
    const newFields = {
      status: true,
    };
    await updateDoc(sppDoc, newFields);
    const selectedUser = users.filter((user)=>user.nis === data.userID)
    const objectSelected = Object.assign({}, ...selectedUser);
    const userRef = doc(db, "users", objectSelected.id);
    await updateDoc(userRef, {
      spp: increment(data.spp),
    });
    const dataAfterBayar = spp.filter((sppc) => sppc.id !== data.id);
    setSpp(dataAfterBayar);
  };

  useEffect(() => {
    if (getLocalStorageSession("adminToken")) {
      getUsers();
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
          <h1>SPP OVERVIEW</h1>
          <p>Manage Your SPP Easily</p>
        </div>

        <div className="bookCards">
          <div className="bookCard">
            <p>Total SPP</p>
            <h3>{spp.length}</h3>
          </div>
          {/* <div className="bookCard">
            <p>Total Users</p>
            <h3>{foods.length}</h3>
          </div> */}
        </div>

        <div className="bookSearch">
          <p>Search Bar</p>
          <input
            type="text"
            placeholder="Type User Id..."
            onChange={(ev) => setInputSearch(ev.target.value)}
          />
        </div>
        <div className="userTable">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>User Id</th>
                <th>Method</th>
                <th>Amounts</th>
                <th>Status</th>
                <th>Action</th>
                {/* <th className="colspan" colSpan={2}>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {spp ?
                spp
                  .filter((val) => {
                    if (inputSearch === "") {
                      return val;
                    } else if (
                      String(val.userID).includes(String(inputSearch))
                    ) {
                      return val;
                    }
                  })
                  .filter((spp) => spp.status === false)
                  .map((data, index) => (
                    <tr key={data.id}>
                      <td>{index + 1}</td>
                      <td>{data.userID}</td>
                      <td>{data.method}</td>
                      <td>{data.spp}</td>
                      <td>{String(data.status)}</td>
                      <td>
                        <button
                          className="buttonBayar"
                          onClick={() => bayarHandler(data)}
                        >
                          Bayar
                        </button>
                      </td>
                      {/* <td className="headCen">
                    <button className="editTable">Edit</button>
                  </td>
                  <td className="headCen">
                    <button className="deleteTable">Delete</button>
                  </td> */}
                    </tr>
                  ))
                : null
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SppOverview;

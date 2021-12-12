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

const UniformOverview = () => {
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();
  const [uniform, setUniform] = useState("");
  const [users, setUsers] = useState("");

  const getUsers = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, "history_seragam"));
    const querySnapshotUser = await getDocs(collection(db, "users"));
    setUniform(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setUsers(
      querySnapshotUser.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  }, [collection]);

  const bayarHandler = async (data) => {
    const uniformDoc = doc(db, "history_seragam", data.id);
    const newFields = {
      status: true,
    };
    await updateDoc(uniformDoc, newFields);
    const selectedUser = users.filter((user) => user.nis === data.userID);
    const objectSelected = Object.assign({}, ...selectedUser);
    const userRef = doc(db, "users", objectSelected.id);
    await updateDoc(userRef, {
      seragam: increment(data.seragam),
    });
    const dataAfterBayar = uniform.filter((sppc) => sppc.id !== data.id);
    setUniform(dataAfterBayar);
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
          <h1>UNIFORM OVERVIEW</h1>
          <p>Manage Your Uniform Easily</p>
        </div>

        <div className="bookCards">
          <div className="bookCard">
            <p>Total Uniform</p>
            <h3>{uniform.length}</h3>
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
              {uniform
                ? uniform
                    .filter((val) => {
                      if (inputSearch === "") {
                        return val;
                      } else if (
                        String(val.userID).includes(String(inputSearch))
                      ) {
                        return val;
                      }
                    })
                    .filter((uni) => uni.status === false)
                    .map((data, index) => (
                      <tr key={data.id}>
                        <td>{index + 1}</td>
                        <td>{data.userID}</td>
                        <td>{data.method}</td>
                        <td>{data.seragam}</td>
                        <td>{String(data.status)}</td>
                        <td>
                          <button
                            className="buttonBayar"
                            onClick={() => bayarHandler(data)}
                          >
                            Bayar
                          </button>
                        </td>
                      </tr>
                    ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UniformOverview;

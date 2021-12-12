import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../components/Drawer";
import HeaderAdmin from "../components/HeaderAdmin";
import { getLocalStorageSession } from "../functions/localStorageSession";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
// import "../All.css"

const FoodOverview = () => {
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();
  const [foods, setFoods] = useState("");

  const getUsers = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, "food"));
    setFoods(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }, [collection]);

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
          <h1>FOOD OVERVIEW</h1>
          <p>Manage Your Food Easily</p>
        </div>

        <div className="bookCards">
          <div className="bookCard">
            <p>Total Foods</p>
            <h3>{foods.length}</h3>
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
            placeholder="Type Food Name..."
            onChange={(ev) => setInputSearch(ev.target.value)}
          />
        </div>
        <div className="userTable">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Seller</th>
                <th>Address</th>
                {/* <th className="colspan" colSpan={2}>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {foods
                ? foods
                    .filter((val) => {
                      if (inputSearch === "") {
                        return val;
                      } else if (
                        val.name
                          .toLowerCase()
                          .includes(inputSearch.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((food, index) => (
                      <tr key={food.id}>
                        <td>{index + 1}</td>
                        <td>
                          <img src={food.image} alt="" />
                        </td>
                        <td>{food.name}</td>
                        <td>{food.price}</td>
                        <td>{food.seller}</td>
                        <td>{food.address}</td>
                        {/* <td className="headCen">
                    <button className="editTable">Edit</button>
                  </td>
                  <td className="headCen">
                    <button className="deleteTable">Delete</button>
                  </td> */}
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

export default FoodOverview;

import Drawer from "../components/Drawer";
import "../All.css";
import { useEffect, useState, useCallback } from "react";
import dayjs from "dayjs";
import { BookChart, ShopChart, UserChart } from "../functions/chart";
import { Icon } from "@iconify/react";
import { getLocalStorageSession } from "../functions/localStorageSession";
import { useNavigate } from "react-router-dom";
// import { getDataFirestore } from "../functions/getDataFirestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import HeaderAdmin from "../components/HeaderAdmin";

const Dashboard = () => {
  const [libOpen, setLibOpen] = useState(false);
  const navigate = useNavigate()
  const [userLength, setUserLength] = useState(0)
  const [itemLength, setItemLength] = useState(0)
  const [foodLength, setFoodLength] = useState(0)
  const [serviceLength, setServiceLength] = useState(0)

  const getUserLength = useCallback(async () => {
    const querySnapshotUser = await getDocs(collection(db, "users"));
    const querySnapshotShop = await getDocs(collection(db, "shop"));
    const querySnapshotServices = await getDocs(collection(db, "services"));
    const querySnapshotFood = await getDocs(collection(db, "food"));
    setUserLength(querySnapshotUser.docs.length)
    setItemLength(querySnapshotShop.docs.length)
    setFoodLength(querySnapshotFood.docs.length)
    setServiceLength(querySnapshotServices.docs.length)
}, [collection])

  useEffect(() => {
    // var now = dayjs("2018-04-04T16:00:00.000Z")
    if(getLocalStorageSession("adminToken")){
      getUserLength();
      // onSnapshot(collection(db, "users"), (snapshot) => {
      //   userz = (snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //   setUserLength(userz.length)
      // });
    }else{
      navigate('/')
    }

    var timeNow = dayjs(new Date()).format("H");

    // Library Open
    if (timeNow > 10 && timeNow < 16) {
      setLibOpen(true);
    }
  }, []);
  return (
    <div className="dashboard">
      <Drawer />
      <div className="dashboard-container">
        <HeaderAdmin/>
        <div className="dashboard-sub">
          <h5>User</h5>
          <div className="dashboard-sub-container dsc1">
            <UserChart userLength={userLength} />
            <div className="dashboard-sub-1">
              <div className="dashboard-card dashboard-card-pri">
                <h4>{userLength}</h4>
                <p>User Available</p>
              </div>
              <div className="dashboard-card dashboard-card-sec">
                <h4>1</h4>
                <p>Admin Available</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-sub">
          <h5>Books and Library</h5>
          <div className="dashboard-sub-container dsc2">
            <div className="dashboard-sub-2">
              <div className="dashboard-card dashboard-card-pri">
                <h4>300</h4>
                <p>Numbers of Books</p>
              </div>
              <div className="dashboard-card dashboard-card-sec">
                <h4>250</h4>
                <p>
                  Numbers of <br />
                  Conventional Books
                </p>
              </div>
              <div className="dashboard-card dashboard-card-sec">
                <h4>50</h4>
                <p>Numbers of E-Books</p>
              </div>
            </div>
            <BookChart />
            <div className="library-container">
              <div className="library-card libCard">
                <Icon icon="fluent:library-24-regular" width="50" />
                <h3>Library</h3>
              </div>
              <div className="library-card libSec">
                <h5 className="">Open Time:</h5>
                <p>10 Pagi - 16 Sore</p>
                <h5>Status:</h5>
                {libOpen ? <p className="libOpen">OPEN</p> : <p className="libClosed">CLOSED</p>}
              </div>
              <div className="library-card libThree">
                <h4>Total Seat:</h4>
                <p>25</p>
              </div>
              <div className="library-card libThree">
                <h4>Available Seat:</h4>
                <p>23</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-sub">
          <h5>Shop</h5>
          <div className="dashboard-sub-container">
            <div className="dashboard-sub-3">
              <div className="dashboard-card dashboard-card-sec">
                <h4>{itemLength}</h4>
                <p>Items for sale</p>
              </div>
              <div className="dashboard-card dashboard-card-sec">
                <h4>{serviceLength}</h4>
                <p>Services Available</p>
              </div>
              <div className="dashboard-card dashboard-card-pri">
                <h4>{foodLength}</h4>
                <p>Food Available</p>
              </div>
            </div>
            <ShopChart/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import '../All.css'

const HeaderAdmin = () => {
  const [greetTime, setGreetTime] = useState("");
  const [today, setToday] = useState("");

  useEffect(() => {
    var timeNow = dayjs(new Date()).format("H");
    if (timeNow >= 0 && timeNow <= 12) {
      setGreetTime("Good Morning");
    } else if (timeNow >= 13 && timeNow <= 18) {
      setGreetTime("Good Afternoon");
    } else if (timeNow >= 19 && timeNow <= 24) {
      setGreetTime("Good Night");
    }

    var day = dayjs(new Date()).format("dddd, D MMM YYYY");
    setToday(day);
  }, []);

  return (
    <div className="dashboard-title">
      <h1>{greetTime} Admin</h1>
      <h4>Today is {today}</h4>
    </div>
  );
};

export default HeaderAdmin;

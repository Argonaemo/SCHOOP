import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import notFoundImg from "../public/notFoundImg.svg";
const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const navigateBack = () => {
      setTimeout(() => {
        navigate("/");
      }, 10000);
    };
    navigateBack();
  }, []);
  return (
    <div className="notFound">
      {/* <h1>Not Found</h1> */}
      <img src={notFoundImg} alt="" />
      <h1>Oooooooooops!</h1>
      <h2>Pages Not Found, Lets go back</h2>
      <h3>Auto redirect after 10 seconds</h3>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NotFound;

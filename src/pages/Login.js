import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import loginImage from "../public/loginImage.svg";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getLocalStorageSession, setLocalStorageSession } from "../functions/localStorageSession";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isIncorrect, setIsIncorrect] = useState(false);
  // logApiKey()
  const navigate = useNavigate()
  useEffect(()=>{
    if(getLocalStorageSession("adminToken")){
      navigate('/dashboard')
    }
  },[])

  const submitHandler = (ev) => {
    ev.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        let isAdminToken = false;
        await user.getIdTokenResult().then((idTokenResult) => {
          isAdminToken = idTokenResult.claims.admin;
        });

        if (isAdminToken) {
          setLocalStorageSession("adminToken", true, 1);
          navigate("/dashboard");
        } else {
          setIsIncorrect(true);
        }
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode, errorMessage);
        setIsIncorrect(true);
      });

    setEmail("");
    setPassword("");
  };
  return (
    <div className="loginContainer">
      <div className="loginKiri">
        <div className="loginTitle">
          <Icon icon="fluent:text-strikethrough-s-24-filled" width="25" />
          <h5>Schoop</h5>
        </div>

        <div className="loginForm">
          <h2>Login</h2>
          {isIncorrect && (
            <div className="incorrectLogin">
              <Icon icon="jam:triangle-danger" width="35" />
              <h5>Incorrect email or password</h5>
            </div>
          )}
          <form onSubmit={submitHandler}>
            <h5>Email</h5>
            <input
              type="text"
              required
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="Enter admin email"
            />
            <h5>Password</h5>
            <input
              type="password"
              required
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              placeholder="Enter password"
            />
            <button type="submit">LOGIN</button>
          </form>
        </div>
      </div>
      <div className="loginKanan">
        <img src={loginImage} alt="" />
      </div>
    </div>
  );
};

export default Login;

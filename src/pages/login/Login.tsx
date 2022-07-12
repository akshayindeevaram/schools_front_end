import React, { useState } from "react";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import { getLogin } from "../../redux/login/actions/loginActions";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state:any) => state.login.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log("hoo", state)
  const handleSubmit =  (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const formdata = {email:email, password:password}

    axios.post("http://localhost:5000/api/v1/login", formdata)
    .then(res=>localStorage.setItem('token', JSON.stringify(res.data.token)))

  
    if (email && password) {
      if (state.email === email && state.pass === password){
        dispatch(getLogin());
        history.push("/")
      }else{
        alert("Credentials does not match")
      }
      // console.log(email, password);
    } else {
      alert("Wrong credentials");
    }
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h2>Login Page</h2>
        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit__btn">
          Submit
        </button>
        <Link to="/registrationform">{"Register Now?"}</Link>
      </form>
      
    </div>
    
  );
};

export default Login;
function token(token: any) {
  throw new Error("Function not implemented.");
}


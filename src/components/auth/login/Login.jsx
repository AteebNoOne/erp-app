import React, { useEffect,useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import config from "../../../config.json";
import axios from "axios";
import Verify from '../verify/Verify';
import Home from '../../dashboard/Home';

const API_URL = config.API_URL; // Change this to the URL of your API
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      console.log(localStorage.getItem("id"))
      setId(localStorage.getItem("id"));
    } else {
      // if the user is not logged in, clear the id value from local storage
      localStorage.removeItem("id");
    }
  }, []);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    handleLogin();
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/accounts/authenticate`, {
        email,
        password,
      });
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.jwtToken}`;
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      console.log(response.data)
      localStorage.setItem("data",response.data)
      localStorage.setItem("token", response.data.jwtToken);
      localStorage.setItem("id", response.data.id);
      console.log("LOCAL STORAGE ",localStorage.getItem("id"))
      setId(localStorage.getItem("id"));
      setSuccess(true);
    } 
    catch (error) {
      console.log("LOGIN ERROR ", error.response.data);
      //setError(error.response.data);
    }    
  };

  
  return (
    <>
    {isLoggedIn ? (
        <Home />
      ) : (
      <div className=" container mt-5 d-flex justify-content-lg-center align-items-center">
        <section>
          <h3 className="mt-5 text-center col-lg-auto">
            <span style={{ fontWeight: 'bold', fontSize: 40 }}>Sign In </span>
          </h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 col-lg-auto" controlId="formBasicEmail">
              <Form.Control type="email" name="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-auto" controlId="formBasicPassword">
              <Form.Control type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              {error && <Form.Text className="text-danger">{error}</Form.Text>}
            </Form.Group>
            <div className="d-flex justify-content-center align-items-center">
                <Button
                  variant="primary"
                  className="col-lg-4 mx-auto"
                  style={{ background: "rgb(44, 44, 44)" }}
                  type="submit"
                  required
                >
                  Submit
                </Button>
              </div>
          </Form>
          <p className="mt-3">
            {' '}
            <span>
              <NavLink to="/Signup">
                <span style={{ fontWeight: 'bold', fontSize: 20 }}>SignUp</span>
              </NavLink>
            </span>{' '}
            <span>
              <NavLink to="/ForgetPassword">
                <span style={{ fontWeight: 'bold', fontSize: 20 }}>Forget Password</span>
              </NavLink>
            </span>{' '}
          </p>
        </section>
      </div>
      )}
    </>
  );
};

export default Login;

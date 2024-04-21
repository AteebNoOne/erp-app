import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import Verify from "../verify/Verify";
import './SignUp.css';

const SignUp = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [formData, setFormData] = useState({
    Username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // new state variable
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password.length < 6) {
      alert("Password must be at least 7 characters long");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setDangerMessage("Passwords do not match");
      setShowDanger(true);
      setTimeout(() => {
        handleDangerClose();
      }, 2000);
      return;
    }
    if (!acceptTerms) {
      alert("Please agree to the license terms");
      return;
    }
    console.log(formData.email)
    console.log(formData.password)
    setIsSubmitted(true);
  };

  const [showDanger, setShowDanger] = useState(false); // new state variable
  const [dangerMessage, setDangerMessage] = useState("");

  const handleDangerClose = () => {
    setShowDanger(false);
    setDangerMessage("");
  };

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        {isSubmitted ? (
            <Verify Username={formData.Username} email={formData.email} password={formData.password} confirmPassword={formData.confirmPassword} acceptTerms={acceptTerms} />
        ) : (
          <section>
            {showDanger && (
              <div className="alert alert-danger" role="alert">
                {dangerMessage}
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleDangerClose}
                ></button>
              </div>
            )}

            <h3 className="mt-5 text-center col-lg-auto">
              <span style={{ fontWeight: "bold", fontSize: 40 }}>Sign Up </span>
            </h3>
            <form>
              <input type="text" placeholder="Name" name="Username" onChange={handleChange} required>
              </input>
            </form>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 col-lg-12" controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="Username"
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-12"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-12"
                controlId="formBasicconfirmPassword"
              >
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-12"
                controlId="formBasicLicense"
              >
                <Form.Check
                  type="checkbox"
                  label={<div style={{ marginLeft: "10px" }}>I agree to the license terms</div>}
                  name="licenseChecked"
                  checked={acceptTerms}
                  onChange={(event) => setAcceptTerms(event.target.checked)}
                  required
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <div className="d-flex justify-content-center align-items-center">
                <button
                >
                  Submit
                </button>
              </div>
            </Form>
            <p className="mt-3">
              <span style={{ fontWeight: "bold", fontSize: 20 }}>
                Already Have an Account{" "}
              </span>{" "}
              <span>
                <NavLink to="/login">
                  <span style={{ fontWeight: "bold", fontSize: 20 }}>
                    Sign In
                  </span>
                </NavLink>
              </span>{" "}
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default SignUp;

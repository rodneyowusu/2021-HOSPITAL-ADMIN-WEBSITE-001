import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../../component/Context/UserAuthContext";
import { CContainer } from "@coreui/react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <CContainer
        fluid
        className="container-sm"
        style={{ marginTop: "70px", marginBottom: " 90px", maxWidth: "500px" }}
      >
        <div className="p-4 box">
          <h2 className="mb-3">Ayire Admin Signup</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              {/* <Button disabled variant="primary" type="Submit">
                Sign up
              </Button> */}
              <Button variant="primary" disabled>
                Sign up
              </Button>
              <Alert variant="danger">
                Kindly Contact rodneyowusu12@gmail.com for an acount
              </Alert>
            </div>
          </Form>
        </div>
        <div className="p-4 box mt-3 text-center">
          Already have an account? <Link to="/">Log In</Link>
        </div>
      </CContainer>
    </>
  );
};

export default Signup;

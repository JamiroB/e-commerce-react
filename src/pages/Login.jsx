import axios from "axios";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const submit = (data) => {
    axios
      .post("https://e-commerce-api.academlo.tech/api/v1/users/login", data)
      .then((res) => {
        navigate("/");
        console.log(res);
        localStorage.setItem("token", res.data.data.token);
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          alert("Incorrect credentials");
        } else {
          console.log(error.response?.data);
        }
      });
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <div className="login-test-data">
        <p className="login-title-test-data">
          Test data:
        </p>
        <div>
          <p><i className="fa-solid fa-envelope"></i> Email: testjamir@gmail.com</p>
          <p><i className="fa-solid fa-lock"></i> Password: test1234</p>
        </div>
      </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register("email")}
        />
        <Form.Text className="text-muted">
          Test data: testjamir@gmail.com - test1234
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("password")}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;

/* "email": "max@gmail.com",
    "password": "pass1234"

john@gmail.com
john1234
 */

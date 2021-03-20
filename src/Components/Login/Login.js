import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
firebase.initializeApp(firebaseConfig);
const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
    newUser: false,
  });

  const handleSignInWithGoogle = () => {
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
        };
        setUser(signedInUser);
        console.log(displayName, email);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleSubmitButton = (e) => {
    console.log(user.email, user.password);
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    e.preventDefault();
  };
  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === "password") {
      const validLengthOfPassword = e.target.value.length > 6;
      const validNumberOfPassword = /\d{1}/.test(e.target.value);
      isFormValid = validLengthOfPassword && validNumberOfPassword;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  return (
    <div className="container col-md-4 my-5">
      <Form className="form-container" onSubmit={handleSubmitButton}>
        <Form.Group>
          <Form.Check
            type="checkbox"
            name="newUser"
            onChange={() => setNewUser(!newUser)}
            label="Don't have an account?"
          />
        </Form.Group>
        {newUser && (
          <Form>
            <h4>Sign Up</h4>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                name="name"
                onBlur={handleBlur}
                placeholder="Enter name"
                required
              />
            </Form.Group>
          </Form>
        )}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onBlur={handleBlur}
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onBlur={handleBlur}
            placeholder="Password"
            required
          />
          <Form.Text className="text-muted">
            Password must be of 6 character and must contain a number.
          </Form.Text>
        </Form.Group>

        <Button variant="danger" type="submit">
          {newUser ? "Sign Up" : "Sign In"}
        </Button>
        <br />
        <p style={{ color: "red" }}>{user.error}</p>
        {user.success && (
          <p style={{ color: "green" }}>
            User {newUser ? "created" : "logged in"} successfully
          </p>
        )}
      </Form>
      <Button
        variant="danger"
        className="btn-lg"
        style={{ margin: "20px" }}
        onClick={handleSignInWithGoogle}
      >
        Sign in with Google
      </Button>
    </div>
  );
};

export default Login;

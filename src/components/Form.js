import React from "react";
import TextField from "@material-ui/core/TextField";
import { FormControl } from "@material-ui/core";
import { useState } from "react";
import { Button } from "@material-ui/core";
import SaveAlt from "@material-ui/icons/Save";
import validator from "validator";
import "./Navbar.css";
import { useEffect } from "react";
export default function Form() {
  const [allData, setAllData] = useState([]);
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValues, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValues, [name]: value });
    if (!isValidEmail(e.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Is a Strong Password");
    } else {
      setErrorMessage(null);
    }
  };

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      firstName: inputValues.firstName,
      lastName: inputValues.lastName,
      email: inputValues.email,
      password: inputValues.password,
      confirmPassword: inputValues.confirmPassword,
    };
    setAllData([...allData, newEntry]);
    console.log(allData);
  };

  return (
    <>
      <h3
        style={{
          textAlign: "center",
          fontFamily: "Roboto,sans-serif",
          fontWeight: "600",
          textShadow: "3px 3px 13px rgba(0,0,0,.5)",
          margin: "20px",
          fontSize: "36px",
        }}
      >
        Student Admission Form{" "}
      </h3>
      <div>
        <form
          className="d-flex flex-column justify-content-around m-5"
          onSubmit={handleSubmit}
        >
          <TextField
            id="standard-basic"
            type="text"
            name="firstName"
            value={inputValues.fName}
            onChange={handleChange}
            label="First Name"
          />
          <TextField
            id="standard-basic"
            type="text"
            name="lastName"
            value={inputValues.lName}
            onChange={handleChange}
            label="Last Name"
          />
          <TextField
            id="standard-basic"
            type="email"
            name="email"
            value={inputValues.email}
            onChange={handleChange}
            label="Email"
          />
          {error && (
            <h2
              style={{
                fontFamily: "Raleway,sans-serif",
                color: "red",
                marginTop: "10px",
              }}
            >
              {error}
            </h2>
          )}
          <TextField
            id="standard-basic"
            type="password"
            name="password"
            value={inputValues.password}
            onChange={handleChange}
            label="Password"
          />
          {errorMessage === "" ? null : (
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {errorMessage}
            </span>
          )}
          <TextField
            id="standard-basic"
            type="password"
            name="confirmPassword"
            value={inputValues.confirmPassword}
            onChange={handleChange}
            label="Confirm Password"
          />
          <FormControl>
            <Button
              className="mt-4 submit "
              type="submit"
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              startIcon={<SaveAlt />}
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </div>
      <table className="table table-striped fw-bold">
        <tbody>
          <tr>
            <td>S.no.</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Password</td>
          </tr>
          {typeof allData != "undefined"
            ? allData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                  </tr>
                );
              })
            : alert("no data found")}
        </tbody>
      </table>
    </>
  );
}

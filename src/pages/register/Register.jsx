// import React from 'react'
import "./register.css"

import { useState } from "react";
// import{useNavigate} from 'react-router-dom';
import { BrowseRoute, Route, Routes, Link } from 'react-router-dom';
// import '../style/register.css';
import React, { Component } from 'react';
import axios from 'axios';
// import Ads from "./UserAds";


const regExp = RegExp(
  /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)
const passRegex = RegExp(
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
)
const phoneRegex = RegExp(
  /^[0-9]*$/
)

const formValid = ({ isError, ...rest }) => {
  let isValid = true;

  Object.values(rest).forEach(val => {
    if (val === '') {
      isValid = false
    }
  });

  Object.values(isError).forEach(val => {
    if (val.length > 0) {
      isValid = false
    }
  });

  return isValid;
};

export default class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // first_name: '',
      // last_name: '',
      // email: '',
      // password: '',
      // phone: '',
      // isError: {
      // first_name: '',
      // last_name: '',
      // email: '',
      // password: '',
      // phone: '',
      }
    }
  }


  onSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log("form Valid");
      let name = this.state.name
      let email = this.state.email
      let pass = this.state.pass
      let phone = this.state.phone



      axios.get('http://localhost/project7/userphp/insertuser.php?name=' + name + '&email=' + email + '&phone=' + phone + '&pass=' + pass
      );

      window.location.href = "/Login";


    } else {
      console.log("Form is invalid!");

    }
  };



  formValChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let isError = { ...this.state.isError };

    switch (name) {
      case "name":
        isError.name =
          value.length < 4 ? "At least 4 characaters required" : "";
        break;

      case "email":
        isError.email = regExp.test(value)
          ? ""
          : "Email address is invalid";
        break;

      case "pass":
        isError.pass = passRegex.test(value)
          ? ""
          : "Minimum eight characters, at least one letter and one number";
        break;

      case "phone":
        isError.phone = phoneRegex.test(value) && value.length === 10
          ? ""
          : "Must be 10 digits";
        break;

      default:
        break;

    }


    this.setState({
      isError,
      [name]: value
    })
  };

  render() {
    console.log("hello regester");
    const { isError } = this.state;


//-----------------------------------------


  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">NewSocial</h3>
            <span className="loginDesc">
                Connect with friends and the world around you on NewSocial
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder='Username' className="loginInput" />
                <input placeholder='Email' className="loginInput" />
                <input placeholder='Password' className="loginInput" />
                <input placeholder='Password Again' className="loginInput" />
                <button className="loginButton">Sign up</button>
                <button className='loginRgisterButton'>
                    Log into account
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}
}
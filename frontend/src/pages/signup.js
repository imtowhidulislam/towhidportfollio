import { useState } from "react";
import "../style/signup.css";
const registerUrl = "http://localhost:3000/api/user/register";
const Signup = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
  };
  return (
    <section class="form_container">
      <div class="container">
        <form action="">
          <h2 class="form_title">Sing up</h2>
          <div class="input_area">
            <label for="First Name">First Name :</label>
            <input
              type="text"
              name="first name"
              class="firstName"
              value={input.firstName}
              placeholder="enter first name"
              onChange={handleChange}
            />
          </div>
          <div class="input_area">
            <label for="Last Name">Last Name :</label>
            <input
              type="text"
              class="lastName"
              name="lastName"
              value={input.lastName}
              placeholder="enter last name"
              onChange={handleChange}
            />
          </div>
          <div class="input_area">
            <label for="user Name">User Name :</label>
            <input
              type="text"
              class="userName"
              name="userName"
              value={input.userName}
              placeholder="enter user name"
              onChange={handleChange}
            />
          </div>
          <div class="input_area">
            <label for="email">Email :</label>
            <input
              type="email"
              class="email"
              name="email"
              value={input.email}
              placeholder="enter email"
              onChange={handleChange}
            />
          </div>
          <div class="input_area">
            <label for="password">Password :</label>
            <input
              type="password"
              class="password"
              name="password"
              value={input.password}
              placeholder="enter password"
              onChange={handleChange}
            />
          </div>
          <div class="form_btn-container">
            <button class="btn formBtn" type="submit">
              sign up
            </button>
          </div>
          <p class="signup_text">
            Already have an account ?
            <span>
              <a target="_blank" href="./login.html">
                login
              </a>
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;

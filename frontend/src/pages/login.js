import { useState } from "react";
import "../style/signup.css";
const loginUrl = "http://localhost:3000/api/user/login";
const Login = () => {
  const [input, setInput] = useState({
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
          <h2 class="form_title">Sing in</h2>
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
              sign in
            </button>
          </div>
          <p class="signup_text">
            Don't have any account ?
            <span>
              <a target="_blank" href="./login.html">
                sign up
              </a>
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;

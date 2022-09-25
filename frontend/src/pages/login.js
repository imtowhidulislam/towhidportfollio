import { useState } from "react";
import "../style/signup.css";

const loginUrl = "http://localhost:3000/api/user/login";
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
  };
  const handleSubmit = async (e) => {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: input.email, password: input.password }),
    });
    const resData = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(resData.error);
      throw Error("Something went wrong with the login request");
    }
    if (response.ok) {
      // ? Saving data to the DB >>>
      localStorage.setItem("user", JSON.stringify(resData));
      setIsLoading(false);
    }
  };
  return (
    <div class="signup_container">
      <section class="form_container">
        <form action="" onSubmit={handleSubmit}>
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
            <button class="btn formBtn" type="submit" onClick={handleSubmit}>
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
      </section>
    </div>
  );
};

export default Login;

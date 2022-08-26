// const axios = require("axios");
const fName = document.querySelector(".firstName");
const lName = document.querySelector(".lastName");
const uName = document.querySelector(".userName");
const uEmail = document.querySelector(".email");
const uPassword = document.querySelector(".password");
const formBtn = document.querySelector(".user_form");
const allInputs = document.querySelectorAll("input");
const userContent = document.querySelector(".userData_content");
const formContainer = document.querySelector(".form_container");
const postUrl = "http://localhost:3000/api/user/register";
const url = "http://localhost:3000/api/user";

console.log(userContent);

// ? Show all existing users:::
const showUsers = async () => {
  const res = await fetch(url);
  const userData = await res.json();

  console.log(userData);
  const users = userData.map((user) => {
    const { firstName, lastName, email } = user;

    const html = `<div class="user">
      <img src="http://unsplash.it/500/300?imgage=423" alt="userImage" />
      <div class="full_name">
        <h2 class="firstName">${firstName}</h2>
        <h2 class="lastName">${lastName}</h2>
      </div>
      <p class="email">${email}</p>
      <div class="btn_container">
        <button class="btn user_btn">remove</button>
      </div>
    </div>;`;

    userContent.insertAdjacentHTML("beforeend", html);
  });
};
showUsers();

formBtn.addEventListener("submit", async (e) => {
  let { name, value } = e.target;
  e.preventDefault();
  const firstName = fName.value;
  const lastName = lName.value;
  const userName = uName.value;
  const email = uEmail.value;
  const password = uPassword.value;
  // [name]: value,
  try {
    await axios.post(postUrl, {
      firstName,
      lastName,
      userName,
      email,
      password,
    });
    showUsers();
    fName.value = "";
    lName.value = "";
    uName.value = "";
    uEmail.value = "";
    uPassword.value = "";
  } catch (err) {
    console.log(err);
  }
});

/* formBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const firstName1 = firstName.target.value;
    console.log(firstName1);
  }); */

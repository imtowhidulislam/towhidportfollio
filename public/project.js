const formDOM = document.querySelector(".single_data");
const submitBtn = document.querySelector(".submit_btn");
const projectContainer = document.querySelector(".projects");
const inputIcon = document.querySelector(".input_icon");
const inputCtg = document.querySelector(".input_ctg");
const inputName = document.querySelector(".input_Name");
const inputDesc = document.querySelector(".input_desc");
const inputSourcecode = document.querySelector(".input_sourcecode");
const inputGithub = document.querySelector(".input_gitHub");
const deleteBtn = document.querySelector(".single_project");
const formAlert = document.querySelector(".form_alert");

console.log(projectContainer);

const url = "http://localhost:3000/project/";
// * sorting array
const sortArr = (arr) => {
  const sortingArr = arr.sort(
    (a, b) => a.createdAt.slice(-4, -1) - b.createdAt.slice(-4, -1)
  );
  console.log(sortingArr);
};

// * Showing all Projects:::
const showProject = async () => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.slice(0, 2));
  console.log(data);

  sortArr(data);

  data.map((project) => {
    const {
      _id: projectId,
      icon,
      title,
      category,
      description,
      sourceLink,
      gitHub,
    } = project;
    const html = `
    <div class="single_project">
            <div class="icon">
              <i class="${icon}"></i>
            </div>
            <div class="action_btn_container">
                <button class="delete_btn" data-id="${projectId}">
                    <i class="fas fa-times"></i>
                </button>
                <a href="edit.html?id=${projectId}" class="edit_project">
                    <i class="fas fa-edit"></i>
                </a>
            </div>
            <h2 class="project_name">${title}</h2>
            <h4 class="project_ctg">${category}</h4>
            <p class="project_dsc">${description}</p>
            <div class="btn_container">
              <a href="${sourceLink}" target="_blank" class="btn_prj ripple_btn btn-1"
                ><i class="fas fa-code"></i
              ></a>
              <a href="${gitHub}" target="_blank" class="btn_prj ripple_btn btn-2"
                ><i class="fab fa-github"></i
              ></a>
            </div>
          </div>
    `;
    projectContainer.insertAdjacentHTML("beforeend", html);
  });
};
showProject();
// window.addEventListener("load", showProject);

// ! Delete A Project
projectContainer.addEventListener("click", async (e) => {
  e.preventDefault();
  const el = e.target;
  if (el.parentElement.classList.contains("delete_btn")) {
    const id = el.parentElement.dataset.id;
    console.log(id);
    try {
      await axios.delete(`http://localhost:3000/project/${id}`);
      showProject();
      formAlert.style.display = "block";
      formAlert.textContent = "successfully deleted";
      formAlert.style.backgroundColor = "white";
      formAlert.style.textAlign = "center";
      formAlert.style.marginTop = "1rem";
      formAlert.style.fontWeight = "bold";
      formAlert.classList.add("success");
    } catch (err) {
      formAlert.style.display = "block";
      formAlert.textContent = "successfully deleted";
      console.log(err);
    }
    setTimeout(() => {
      formAlert.style.display = "none";
      formAlert.classList.remove("success");
    }, 3000);
  }
});

// ? Read form Data:::
formDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const icon = inputIcon.value;
  const title = inputName.value;
  const category = inputCtg.value;
  const description = inputDesc.value;
  const sourceLink = inputSourcecode.value;
  const gitHub = inputGithub.value;
  console.log(icon, title, category, description, sourceLink, gitHub);
  try {
    await axios.post(url, {
      icon,
      title,
      category,
      description,
      sourceLink,
      gitHub,
    });
    showProject();
    inputCtg.value = "";
    inputGithub.value = "";
    inputSourcecode.value = "";
    inputIcon.value = "";
    inputName.value = "";
    inputDesc.value = "";

    formAlert.style.display = "block";
    formAlert.textContent = "success , project added to the server";
    formAlert.classList.add("success");
    formAlert.style.marginTop = "1rem";
  } catch (err) {
    console.log(err);
    formAlert.style.display = "none";
    formAlert.textContent = "failed , project doesn't added to the server";
    formAlert.style.marginTop = "1rem";
  }
  setTimeout(() => {
    formAlert.style.display = "none";
    formAlert.classList.remove("seccess");
  }, 3000);
});

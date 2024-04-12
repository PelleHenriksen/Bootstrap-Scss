const forms = document.querySelector(".needs-validation");

forms.addEventListener("submit", (e) => {
  if (!forms.checkValidity()) {
    e.preventDefault();
  } else {
    alert("Success!");
  }

  forms.classList.add("was-validated");
});

const navElement = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 690) {
    navElement.classList.add("navbar-scrolled");
  } else {
    navElement.classList.remove("navbar-scrolled");
  }
});

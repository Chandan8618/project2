/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle =
  document.getElementById("menuToggle");

const navMenu =
  document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

  const isOpen =
    navMenu.classList.toggle("active");

  menuToggle.setAttribute(
    "aria-expanded",
    isOpen
  );

});


/* Close menu after clicking navigation */

document
  .querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navMenu.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


/* =====================================================
   LIGHT / DARK MODE
===================================================== */

const themeToggle =
  document.getElementById("themeToggle");


const savedTheme =
  localStorage.getItem("portfolio-theme");


if (savedTheme === "dark") {

  document.documentElement
    .setAttribute(
      "data-theme",
      "dark"
    );

  themeToggle.textContent = "☀";

}


themeToggle.addEventListener("click", () => {

  const isDark =
    document.documentElement
      .getAttribute("data-theme") === "dark";


  if (isDark) {

    document.documentElement
      .removeAttribute("data-theme");

    localStorage.setItem(
      "portfolio-theme",
      "light"
    );

    themeToggle.textContent = "☾";

  } else {

    document.documentElement
      .setAttribute(
        "data-theme",
        "dark"
      );

    localStorage.setItem(
      "portfolio-theme",
      "dark"
    );

    themeToggle.textContent = "☀";

  }

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
  document.getElementById("contactForm");


contactForm.addEventListener(
  "submit",
  function (event) {

    event.preventDefault();

    const name =
      document.getElementById("name").value.trim();


    if (!name) {
      return;
    }


    alert(
      `Thanks ${name}! Your message has been submitted.`
    );


    contactForm.reset();

  }
);

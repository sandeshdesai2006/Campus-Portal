/* ==========================================
   SmartCampus Portal - JavaScript Functions
   ========================================== */

/* ---------- LOGIN REDIRECT ---------- */
/* This works for login.html form */
function loginRedirect(event) {
  event.preventDefault(); // stop page reload

  alert("Login Successful! Redirecting to Dashboard...");

  // Redirect to main portal page
  window.location.href = "index.html";
}

/* ---------- DARK MODE TOGGLE ---------- */
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Save mode in browser storage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

/* ---------- LOAD SAVED THEME ---------- */
window.onload = function () {
  let savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
};

/* ---------- STUDENT SEARCH FILTER ---------- */
/* Works in Student Records Table */
let searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    let filter = searchInput.value.toLowerCase();
    let rows = document.querySelectorAll("#studentTable tr");

    rows.forEach((row) => {
      let name = row.cells[0].textContent.toLowerCase();

      if (name.includes(filter)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
}

/* ---------- EXTRA BUTTON ACTIONS ---------- */

let buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("This feature is part of the SmartCampus frontend demo!");
  });
});

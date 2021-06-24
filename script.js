const checkbox = document.getElementById("checkbox");

// Set Theme Based on User System Prefers Theme
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkScheme.matches) {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
} else {
  document.body.classList.remove("dark-theme");
}

// Storge The Chosen Theme in localStorage And Set Theme Class In Body Element
let currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
}

// Toggle dark-theme class ON input change (checked/UnChecked)
checkbox.addEventListener("change", () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  } else if (document.body.classList.contains("light-theme")) {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.add("dark-theme");
  }
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
    localStorage.setItem("theme", "light");
  }
});

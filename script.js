feather.replace();
    
const darkModeToggle = document.getElementById("darkModeToggle");
const modeText = document.getElementById("modeText");
const body = document.body;
    
darkModeToggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        modeText.textContent = "Dark Mode";
    } else {
        modeText.textContent = "Light Mode";
    }
});

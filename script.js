const modes = document.querySelector(".modes");
const modeImg = document.querySelector(".mode-img");
const navigation = document.querySelector(".nav");
const topMenue = document.querySelector(".top-menue");
const bottomMenu = document.querySelector(".bottom-menue");
const projects = document.querySelector(".projects");
const sidebar = document.querySelector(".sidebar");

modes.addEventListener("click", function() {
    if (modes.classList.contains("night-mode")) {
        modes.classList.remove("night-mode");
        modeImg.classList.remove("night-mode");
        navigation.classList.remove("night-mode");
        topMenue.classList.remove("night-mode");
        bottomMenu.classList.remove("night-mode");
        projects.classList.remove("night-mode");
        sidebar.classList.remove("night-mode");
    } else {
       modes.classList.add("night-mode");
    modeImg.classList.add("night-mode");
    navigation.classList.add("night-mode");
    topMenue.classList.add("night-mode");
    bottomMenu.classList.add("night-mode");
    projects.classList.add("night-mode");
    sidebar.classList.add("night-mode"); 
    }
});

function myMenuFunction() {
    var menubth = document.getElementById("myNavMenu");
    if (menubth.classList.contains("navmenu")) {
        menubth.classList.add("responsive");
        menubth.classList.remove("navmenu");
    } else {
        menubth.classList.add("navmenu");
        menubth.classList.remove("responsive");
    }
}


const toggleSwitch = document.getElementById("toggle_switch");
const moonIcon = document.getElementById("moon");
const sunIcon = document.getElementById("sun");

toggleSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDarkMode = document.body.classList.contains("dark");
    moonIcon.style.display = isDarkMode ? "none" : "none";
    sunIcon.style.display = isDarkMode ? "block" : "none";
});


const skillButtons = document.querySelectorAll(".skills");
const explanationBox = document.getElementById("explanation");

skillButtons.forEach(button => {
    button.addEventListener("click", () => {
        const skillInfo = button.getAttribute("data-info");
        explanationBox.innerHTML = `<p>${skillInfo}</p>`;
    });
});


document.addEventListener("DOMContentLoaded", () => {
    var typingEffect = new Typed(".typedtext", {
        strings: [" Developer....", "Coder....","Designer....." ],
        loop: true,
        typeSpeed: 150,
        backSpeed: 80,
        backDelay: 2000
    });
});


    document.getElementById("downloadCvBtn").addEventListener("click", function() {
        const link = document.createElement("a");
        link.href = "./assest/Vignesh_resume.pdf";
        link.download = "./assest/Vignesh_resume.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    function Hireme(){
        alert('If you interset to Hire me you contact me this number 6379622168')
    }

    
    






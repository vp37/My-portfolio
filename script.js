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



let body=document.getElementById("toggle_switch").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


document.addEventListener("DOMContentLoaded", () => {
    var typingEffect = new Typed(".typedtext", {
        strings: ["Designer", "Coder", "Developer"],
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
    






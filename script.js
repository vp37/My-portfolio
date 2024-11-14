function myMenuFunction(){
    var menubth=document.getElementById("myNavMenu");
    if(menubth.className==="navmenu")
    {
        menubth.className+="responsive";
    }
    menubth.className="menubar";
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
    






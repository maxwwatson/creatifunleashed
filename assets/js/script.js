// Toggles Hamburrger Menu Animation
function myFunction(x) {
    x.classList.toggle("change");
    sideNav = document.getElementById("mySideNav");

    if(x.classList.contains("change")) {
        sideNav.style.width = "250px";
    }
    else {
        sideNav.style.width = "0";
    }
}

// Toggles Side Menu

// For Accordian for mobile category links
var acc = document.getElementsByClassName("mobile-categories");
let intViewportWidth = window.innerWidth;
console.log(intViewportWidth);
// If on tablet or smaller , make the categories be a droppable clickdown 
if(intViewportWidth <= 768) {
    acc[0].addEventListener("click", function() {
        // Toggle between adding and removing "active" class
        this.classList.toggle("active"); 

        var panel = this.nextElementSibling; 
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


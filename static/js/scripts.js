/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const sections = document.querySelectorAll("section, .hero");
const navLinks = document.querySelectorAll(".topnav a[href^='#']");

function updateActiveLink() {
  let current = "";
  let scrollPosition = window.scrollY + 150;  // smoother detection

  sections.forEach(section => {
    if (scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

function openPopup(src) {
    document.getElementById("popupImg").src = src;
    document.getElementById("imgPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("imgPopup").style.display = "none";
}

// Apply "active" class when section is in viewport
/*const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));*/


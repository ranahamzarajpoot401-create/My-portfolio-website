/* ========================== Typing Animation ========================== */
var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Cumputar Mastar", "Graphic Designer", "YouTuber"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/* ========================== Aside Navigation ========================== */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

// Nav click event
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(e) {
        e.preventDefault();
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    const target = element.getAttribute("href").split("#")[1];
    for (let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector("a");
        a.classList.remove("active");
        if (a.getAttribute("href").split("#")[1] === target) {
            a.classList.add("active");
        }
    }
}

/* ========================== Hire Me Button ========================== */
document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

/* ========================== Nav Toggler ========================== */
const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside"); // <-- fix here

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

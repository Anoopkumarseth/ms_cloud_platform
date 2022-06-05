// custom tab
tablinks = document.querySelectorAll(".tab .tab-link");
tabContents = document.querySelectorAll(".tab-content");
for (let i = 0;i<tablinks.length;i++) {
    tablinks[i].addEventListener("click", (e) =>{
        e.preventDefault()
        tablinks.forEach((item) => item.classList.remove('active'));
        tablinks[i].classList.add("active");
        tabContents.forEach((item) => item.classList.remove('active'));
        tabContents[i].classList.add("active");
    })
}

// scroll to top
const scrollTop = document.querySelector(".scrollTop");
const mainHeader = document.querySelector(".main-header");

const scrollAppearance = () => {
    if (window.scrollY > 320) {
        scrollTop.classList.add("active");
        mainHeader.classList.add("main-header-sticky");
    } else {
        scrollTop.classList.remove("active");
        mainHeader.classList.remove("main-header-sticky");
    }
};
document.addEventListener("scroll", () => {
    scrollAppearance();
});
scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

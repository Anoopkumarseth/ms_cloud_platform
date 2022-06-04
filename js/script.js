tablinks = document.querySelectorAll(".tab .tab-link");
tabContents = document.querySelectorAll(".tab-content");

for (const item of tablinks) {
    item.addEventListener("click", function(e){
        e.preventDefault()
        console.log(this)
        tablinks.forEach((el) => el.classList.remove('active'));
        this.classList.add("active");
    })
}
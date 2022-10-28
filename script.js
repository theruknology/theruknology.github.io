const primaryHead = document.querySelector(".primary-header");
const navToggle = document.querySelector(".menu-button");

navToggle.addEventListener("click", () => {
    
    const visiblity = primaryHead.getAttribute("data-visible");
    if (visiblity === "false") {
        primaryHead.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true)
    
    } else {
        primaryHead.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false)
    
    }
})

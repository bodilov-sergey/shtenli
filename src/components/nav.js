const nav = () => {
    const body = document.querySelector("body"),
        navArea = body.querySelector(".nav"),
        navBackground = navArea.querySelector(".nav__background"),
        backdrop = navArea.querySelector(".nav__backdrop"),
        navBurger = navArea.querySelector(".nav__burger"),
        navLogo = navArea.querySelector(".nav__logo"),
        nav = navArea.querySelector(".nav__links"),
        navLinks = nav.querySelectorAll(".nav__link"),
        observer = new IntersectionObserver(observerCallback, { threshold: 1 });

    // burger

    navBurger.onclick = function () {
        [navBurger, backdrop, nav, body].forEach((item) => {
            item.classList.toggle("__opened");
        });
    };

    backdrop.onclick = closeAll;
    navLogo.onclick = closeAll;
    navLinks.forEach((element) => {
        element.onclick = closeAll;
    });

    function closeAll() {
        [navBurger, backdrop, nav, body].forEach((item) => {
            item.classList.remove("__opened");
        });
    }

    // scroll

    observer.observe(navArea);

    function observerCallback(entries) {
        entries.forEach((entry) => {
            entry.isIntersecting ? navBackground.classList.remove("__scroll")
                : navBackground.classList.add("__scroll")
        });
    }
};

export default nav;

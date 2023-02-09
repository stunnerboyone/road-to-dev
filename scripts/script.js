
const container = document.querySelector(".how-it-works-list");

container.addEventListener("mousemove", function (event) {
    const target = event.target;
    if(target.classList.contains("how-it-works-list__item")){
        Array.from(container.children).forEach(element => {
            console.dir(element);
            const child = element;
            if (child.classList.contains("how-it-works-list__active")){
                child.classList.remove("how-it-works-list__active");
            }
        });
        target.classList.add("how-it-works-list__active");
    }
});

const container = document.querySelector(".how-it-works-list");
const item = document.querySelector(".how-it-works-list__item");

const setActive = (block) => {
    const childArray = Array.from(block.children);
    const child = childArray[1];
    child.classList.add("how-it-works-list__active");
};

setActive(container);

container.addEventListener("mousemove", function (event) {
    const target = event.target;
    if(target.classList.contains("how-it-works-list__item")){
        Array.from(container.children).forEach(element => {
            const child = element;
            if (child.classList.contains("how-it-works-list__active")){
                child.classList.remove("how-it-works-list__active");
            }
        });
        target.classList.add("how-it-works-list__active");
    }
});




const solutions = document.querySelector(".solutions__list");
const quote = document.querySelector(".quote");

const activeSolution = (block) => {
    const childArray = Array.from(block.children);
    const child = childArray[1];
    child.classList.add("solutions__item_active");
};

activeSolution(solutions);

solutions.addEventListener("click", function (event) {
    const target = event.target;
    if(target.classList.contains("solutions__item")){
        Array.from(solutions.children).forEach(element => {
            const child = element;
            if (child.classList.contains("solutions__item_active")){
                child.classList.remove("solutions__item_active");
            }
        });
        target.classList.add("solutions__item_active");
    }
});
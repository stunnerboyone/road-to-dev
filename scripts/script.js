
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
const solutionsQuote = document.querySelector(".solutions-quote");

const solutionsArray = Array.from(solutions.children);
const quoteArray = Array.from(solutionsQuote.children);

const activeSolution = (block) => {
    const childArray = Array.from(block.children);
    childArray[1].classList.add("solutions__item_active");
};

const activeQuote = (block) => {
    const quoteArray = Array.from(solutionsQuote.children);
    quoteArray[1].classList.add("quote_active");
};

activeSolution(solutions);
activeQuote(solutionsQuote);

solutions.addEventListener("click", function (event) {
    const target = event.target;
    if(target.classList.contains("solutions__item")){
        solutionsArray.forEach(element => {
            if (element.classList.contains("solutions__item_active")){
                element.classList.remove("solutions__item_active");
            }
        });
        target.classList.add("solutions__item_active");
        quoteArray.forEach(element => {
            if (element.classList.contains("quote_active")){
                element.classList.remove("quote_active");
            }
            switch(solutionsArray.indexOf(target)){
                case 0:
                    quoteArray[0].classList.add("quote_active");
                    break;
                case 1:
                    quoteArray[1].classList.add("quote_active");
                    break;
                case 2:
                    quoteArray[2].classList.add("quote_active");
                    break;
            }
        });
    }
});
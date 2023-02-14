const removeClass = (Array, classToRemove) => {
    Array.forEach(element => {
        if (element.classList.contains(classToRemove)){
            element.classList.remove(classToRemove);
        }
    });
};


/* --------------How it works block--------------*/
const container = document.querySelector(".how-it-works-list");
const howItWorksActive = "how-it-works-list__active";

const containerArray = Array.from(container.children);
containerArray[1].classList.add(howItWorksActive);

container.addEventListener("mousemove", function (event) {
    const target = event.target;
    if(target.classList.contains("how-it-works-list__item")){
        removeClass(containerArray, howItWorksActive);
        target.classList.add(howItWorksActive);
    }
});

/*-------solutions block--------*/

const solutionsActiveClass = "solutions__item_active";
const quoteActiveClass = "quote_active";

const solutions = document.querySelector(".solutions__list");
const solutionsQuote = document.querySelector(".solutions-quote");


const solutionsArray = Array.from(solutions.children);
const quoteArray = Array.from(solutionsQuote.children);

solutionsArray[1].classList.add("solutions__item_active");
quoteArray[1].classList.add("quote_active");

solutions.addEventListener("click", function (event){
    const target = event.target;
    if(target.classList.contains("solutions__item")){
        removeClass(solutionsArray, solutionsActiveClass);
        target.classList.add(solutionsActiveClass);
        removeClass(quoteArray, quoteActiveClass);
        const solutionsIndex = solutionsArray.indexOf(target);
        quoteArray[solutionsIndex].classList.add(quoteActiveClass);
    }
});

/*--------------Results block--------------*/

const resultsActiveClass = "results-block__item_active";

const resultsBlock = document.querySelector(".results-block");

const resultsArray = Array.from(resultsBlock.children);
resultsArray[1].classList.add("results-block__item_active");

resultsBlock.addEventListener("mousemove", function(event){
    const target = event.target;
    if(target.classList.contains("results-block__item")){
        removeClass(resultsArray, resultsActiveClass);
        target.classList.add(resultsActiveClass);
    }
});



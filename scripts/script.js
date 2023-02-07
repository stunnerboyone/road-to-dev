let numero = document.getElementsByClassName("partner-logo");

let logosOnScreen = 0;

if (logosOnScreen < 20) {
    for (let i = 0; i <= numero.length; i++) {
    numero [i].style.display = "inline";
    logosOnScreen ++;
    console.log(logosOnScreen);
    }
}
else {
    numero.style.display = "none";
    logosOnScreen = 0;
}


const partnerOnDisplay = (target) => {
    let rect = target.getBoundingClientRect();

    let partnerLogoPosition = {
        left: window.pageXOffset + rect.left,
        right: window.pageXOffset + rect.right,
    };
    let windowPosition = {
        left: window.pageXOffset,
        right: window.pageXOffset,
    };
    if (partnerLogoPosition.right < windowPosition.left && partnerLogoPosition.left > windowPosition.right) {
        target.style.display = "none";
    }
};

partnerOnDisplay(numero);

let count = 0;

let countUp = function () {
    count++;
    let div = document.querySelector("div");
    div.innerHTML = count;
}

setInterval(countUp, 1000);
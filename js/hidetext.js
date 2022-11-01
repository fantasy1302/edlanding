
const btn = document.getElementById("button");

const upp = document.getElementById("wrapper");

btn.addEventListener('click', function () {
    instruct.style.visibility = "hidden";
    btn.style.visibility = "hidden";
    btn.style.transition = "0s";
    upp.style.marginTop = "-600px";
    upp.style.transition = "2s";
  });



const downArrowFAQ = document.querySelectorAll(".downArrow");

downArrowFAQ.forEach(arrow => {
  arrow.addEventListener("click", function () {
    const hiddenDiv = arrow.parentElement.nextElementSibling;
    hiddenDiv.classList.toggle("show");
    arrow.classList.toggle("rotate");
  });
});



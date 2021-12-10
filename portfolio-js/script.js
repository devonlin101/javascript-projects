let tabs = document.querySelectorAll(".tabs > li");
console.log(tabs);
tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    for (i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }
    tab.classList.toggle("active");
  })
);
//tabs.on("click", function () {
//  tabs.removeClass("active");
//  $(this).addClass("active");
//});

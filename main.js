document.getElementById("menu-icon").addEventListener("click", function () {
    var navList = document.getElementById("nav-list");
    navList.classList.toggle("active");
});
let currentIndex = 0;
const house = document.querySelectorAll(".houses .item1");
const totalHouses = house.length;

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalHouses;
    updateSlider();
});

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalHouses) % totalHouses;
    updateSlider();
});

function updateSlider() {
  const offset = -currentIndex * 100;
    house.forEach((house) => {
    house.style.transform = `translateX(${offset}%)`;
    });
}
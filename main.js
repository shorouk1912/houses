
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector("#menu-icon");
  const navList = document.querySelector("#nav-list");

  // Toggle visibility of the menu
  menuIcon.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
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

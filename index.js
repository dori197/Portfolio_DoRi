document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const barIcon = document.getElementById('barIcon');
    const closeIcon = document.getElementById('closeIcon');
  
    closeIcon.style.display = "none";
  
    menuToggle.addEventListener("click", function () {
      mobileNav.classList.toggle("active");
      if (mobileNav.classList.contains("active")) {
        barIcon.style.display = "none";
        closeIcon.style.display = "block";
      } else {
        barIcon.style.display = "block";
        closeIcon.style.display = "none";
      }
    });
});

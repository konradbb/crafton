export function initMobileMenu() {
  document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".mobileMenu li");

    menuItems.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });

    document.querySelector('.mobileMenuOpen')?.addEventListener('click', function () {
      document.querySelector('.mobileMenu')?.classList.add('active');
    });

    document.querySelector('.menu-close')?.addEventListener('click', function () {
      document.querySelector('.mobileMenu')?.classList.remove('active');
    });
  });
}

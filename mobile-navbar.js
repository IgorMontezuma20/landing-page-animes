class MobileNavBar {
  constructor(mobileMenu, navList, navlinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navlinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.navList.classsList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  Init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavBar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.Init();
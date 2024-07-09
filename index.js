document.addEventListener("DOMContentLoaded", () => {
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("overlay");
  const drawerToggleBtn = document.getElementById("drawerToggleBtn");

  function openDrawer() {
    drawer.classList.add("open");
    overlay.classList.add("open");
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
  }

  function toggleDrawer() {
    if (drawer.classList.contains("open")) {
      closeDrawer();
    } else {
      openDrawer();
    }
  }

  drawerToggleBtn.addEventListener("click", toggleDrawer);

  document.addEventListener("click", (event) => {
    if (
      !drawer.contains(event.target) &&
      !drawerToggleBtn.contains(event.target)
    ) {
      closeDrawer();
    }
  });
});

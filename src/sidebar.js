const sidebarSlide = () => {
  const sidebarBtn = document.querySelector(".sidebar-btn");
  const sidebar = document.querySelector(".sidebar");
  sidebarBtn.addEventListener("click", () => {
    if (
      sidebar.classList.contains("inactive") &&
      sidebarBtn.classList.contains("inactive")
    ) {
      sidebar.classList.remove("inactive");
      sidebarBtn.classList.remove("inactive");
    } else {
      sidebar.classList.add("inactive");
      sidebarBtn.classList.add("inactive");
    }
  });
};
export { sidebarSlide };

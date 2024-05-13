const sidebarSlide = () => {
  const sidebarBtn = document.querySelector(".sidebar-btn");
  const sidebar = document.querySelector(".sidebar");
  const content = document.querySelector(".content");
  sidebarBtn.addEventListener("click", () => {
    if (
      sidebar.classList.contains("inactive") &&
      sidebarBtn.classList.contains("inactive")
    ) {
      sidebar.classList.remove("inactive");
      sidebarBtn.classList.remove("inactive");
      content.style.marginLeft = "250px";
    } else {
      sidebar.classList.add("inactive");
      sidebarBtn.classList.add("inactive");
      content.style.marginLeft = "0px";
    }
  });
};
export { sidebarSlide };

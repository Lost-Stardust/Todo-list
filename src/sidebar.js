const sidebarSlide = () => {
  const sidebarBtn = document.querySelector(".sidebar-btn");
  const sidebar = document.querySelector(".sidebar");
  console.log(sidebar);
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", () => {
    if (sidebar.classList.contains("inactive")) {
      sidebar.classList.remove("inactive");
    } else {
      sidebar.classList.add("inactive");
    }
  });
};
export { sidebarSlide };

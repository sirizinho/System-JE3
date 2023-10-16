const sidebarBtn = document.querySelector(".toggle-btn");
const sidebar = document.querySelector("nav");

sidebarBtn.addEventListener("click", () => {
  document.body.classList.toggle("active");
});

const links = document.querySelectorAll(".link");

function showContent(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    section.style.display = "none";
  });

  const selectedSection = document.querySelector(`.${sectionId}`);
  if (selectedSection) {
    selectedSection.style.display = "block";
  }
}

links.forEach(link => {
  link.addEventListener("click", function() {
    links.forEach(otherLink => {
      otherLink.classList.remove("active");
    });

    this.classList.add("active");
    const sectionId = this.id;
    showContent(sectionId);
  });
});

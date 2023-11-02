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

const select = document.getElementById("opcao-select");
const divs = document.querySelectorAll(".tabela-cadastros > div");

select.addEventListener("change", () => {
  const selectedOption = select.value;

  // Oculta todas as divs
  divs.forEach((div) => {
    div.style.display = "none";
  });

  // Mostra a div correspondente à opção selecionada
  document.querySelector("." + selectedOption).style.display = "block";
});
const sidebarBtn = document.querySelector(".toggle-btn");
const sidebar = document.querySelector("aside");

sidebarBtn.addEventListener("click", () => {
  document.body.classList.toggle("active");
});

const links = document.querySelectorAll(".link");

// Adiciona um evento de clique a cada um dos elementos
links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(otherLink => {
            otherLink.classList.remove("active");
        });

        this.classList.add("active");
    });
});
// Função para mostrar o conteúdo correspondente à opção selecionada
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

// Adicionar um ouvinte de evento de clique a todos os links
links.forEach(link => {
  link.addEventListener("click", function() {
    const sectionId = this.id; 
    showContent(sectionId);
  });
});
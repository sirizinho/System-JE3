function login(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var logue = document.getElementById("logue");

    if (user === "admin" && pass === "123456") {
        window.close();
        window.open("../Html/index.html");
        document.getElementById("user").value = "";
        document.getElementById("pass").value = "";
        logue.classList.add('hidden');
    } else {
        logue.classList.remove('hidden');
    }
}

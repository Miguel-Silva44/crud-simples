document.getElementById("cadastroForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtendo os valores dos campos
    const userData = {
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };

    try {
        const response = await fetch("/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            // Esconde o formulário
            document.getElementById("cadastroForm").style.display = "none";

            // Mostra a mensagem de sucesso
            document.getElementById("mensagemSucesso").classList.remove("hidden");
        } else {
            alert("Erro ao cadastrar usuário. Tente novamente.");
        }
    } catch (error) {
        console.error("Erro ao enviar requisição:", error);
        alert("Erro ao conectar ao servidor.");
    }
});

// Voltar para o formulário
document.getElementById("voltarBtn").addEventListener("click", function() {
    document.getElementById("cadastroForm").style.display = "block";
    document.getElementById("mensagemSucesso").classList.add("hidden");
    document.getElementById("cadastroForm").reset();
});

document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("themeSwitcher");

    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");

        // Atualiza o texto do botão
        if (document.body.classList.contains("dark-theme")) {
            themeButton.textContent = "Modo Claro";
        } else {
            themeButton.textContent = "Modo Escuro";
        }
    });
});

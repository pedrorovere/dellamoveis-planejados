/* =====================================================
   SCRIPT DO SITE - DELLA MÓVEIS
   Funciona em todas as páginas (usa "if" para só rodar
   o que existir na página aberta)
===================================================== */

/* ---------- MENU MOBILE ---------- */
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
    // Abre/fecha o menu ao clicar no botão ☰
    menuBtn.addEventListener("click", () => menu.classList.toggle("ativo"));

    // Fecha o menu ao clicar em qualquer link
    document.querySelectorAll(".menu a").forEach(link =>
        link.addEventListener("click", () => menu.classList.remove("ativo"))
    );
}

/* ---------- MÁSCARA DO TELEFONE (só na página de orçamento) ---------- */
const telefone = document.getElementById("telefone");

if (telefone) {
    telefone.addEventListener("input", function () {
        // Mantém só números (máximo 11 dígitos)
        let v = this.value.replace(/\D/g, "").substring(0, 11);

        if (v.length <= 10) {
            // Telefone fixo: (91) 1234-5678
            v = v.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
        } else {
            // Celular: (91) 91234-5678
            v = v.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
        }
        this.value = v;
    });
}

/* ---------- FORMULÁRIO DE ORÇAMENTO -> WHATSAPP ---------- */
const form = document.getElementById("formOrcamento");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // impede o envio normal (não precisa de PHP)

        const f = new FormData(this);
        const nome = (f.get("nome") || "").trim();
        const tel = (f.get("telefone") || "").trim();
        const email = (f.get("email") || "").trim();
        const ambiente = (f.get("ambiente") || "").trim();
        const mensagem = (f.get("mensagem") || "").trim();

        // Campos obrigatórios (o e-mail é opcional)
        if (!nome || !tel || !ambiente || !mensagem) {
            alert("Preencha todos os campos obrigatórios.");
            return;
        }

        // Número que recebe os orçamentos (55 + DDD + número)
        const whatsapp = "5591998383571";

        // Monta a mensagem
        const texto =
            "Olá! Gostaria de solicitar um orçamento.\n\n" +
            "Nome: " + nome + "\n" +
            "Telefone: " + tel + "\n" +
            "E-mail: " + email + "\n" +
            "Ambiente: " + ambiente + "\n" +
            "Mensagem: " + mensagem;

        // Abre o WhatsApp com a mensagem pronta
        window.location.href = "https://wa.me/" + whatsapp + "?text=" + encodeURIComponent(texto);
    });
}

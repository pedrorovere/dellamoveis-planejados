<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: ../orcamento.html");
    exit;
}

$nome = trim($_POST["nome"] ?? "");
$telefone = trim($_POST["telefone"] ?? "");
$email = trim($_POST["email"] ?? "");
$ambiente = trim($_POST["ambiente"] ?? "");
$mensagem = trim($_POST["mensagem"] ?? "");

if (!$nome || !$telefone || !$ambiente || !$mensagem) {
    die("
        <h2>Preencha todos os campos obrigatórios.</h2>
        <a href='../orcamento.html'>Voltar</a>
    ");
}

$whatsapp = "5591998383571";

$text = "Olá! Gostaria de solicitar um orçamento.\n\n";

$text .= "Nome: " . $nome . "\n";
$text .= "Telefone: " . $telefone . "\n";
$text .= "E-mail: " . $email . "\n";
$text .= "Ambiente: " . $ambiente . "\n";
$text .= "Mensagem: " . $mensagem;

$url = "https://wa.me/" . $whatsapp . "?text=" . rawurlencode($text);

header("Location: " . $url);
exit;

?>
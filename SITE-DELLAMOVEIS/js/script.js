const menuBtn=document.getElementById("menuBtn");const menu=document.getElementById("menu");
menuBtn.addEventListener("click",()=>menu.classList.toggle("ativo"));
document.querySelectorAll(".menu a").forEach(link=>link.addEventListener("click",()=>menu.classList.remove("ativo")));

const telefone=document.getElementById("telefone");
telefone.addEventListener("input",function(){let v=this.value.replace(/\D/g,"").substring(0,11);if(v.length<=10){v=v.replace(/^(\d{2})(\d)/,"($1) $2").replace(/(\d{4})(\d)/,"$1-$2")}else{v=v.replace(/^(\d{2})(\d)/,"($1) $2").replace(/(\d{5})(\d)/,"$1-$2")}this.value=v;});

const elementos=document.querySelectorAll(".card,.projeto,.sobre-texto,.sobre-imagem");
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("mostrar")}),{threshold:.15});
elementos.forEach(e=>observer.observe(e));

document.getElementById("formOrcamento").addEventListener("submit",function(){const b=this.querySelector("button");b.innerText="Enviando...";b.disabled=true;});
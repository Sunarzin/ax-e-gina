/* ===========================
   DATA DO NAMORO
=========================== */

/*
Mude a data abaixo para o dia
que vocês começaram a namorar.

ANO, MÊS (0 = Janeiro), DIA
*/

const dataNamoro = new Date(2026, 0, 1, 0, 0, 0);

/* ===========================
   CONTADOR
=========================== */

function atualizarContador() {

    const agora = new Date();

    const diferenca = agora - dataNamoro;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );

    document.getElementById("dias").textContent = dias;

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");

}

setInterval(atualizarContador,1000);

atualizarContador();

/* ===========================
   BOTÃO ENTRAR
=========================== */

const botao = document.getElementById("enter");

const intro = document.getElementById("intro");

const site = document.getElementById("site");

site.style.display="none";

botao.addEventListener("click",()=>{

    intro.style.opacity="0";

    setTimeout(()=>{

        intro.style.display="none";

        site.style.display="block";

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    },700);

});

/* ===========================
   ANIMAÇÃO DOS CARDS
=========================== */

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0px)";

        }

    });

});

document.querySelectorAll(".card,.event,.glass,.photo").forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition="1s";

    observer.observe(el);

});

/* ===========================
   CORAÇÕES
=========================== */

function criarCoracao(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-30px";

    heart.style.fontSize=(Math.random()*20+15)+"px";

    heart.style.pointerEvents="none";

    heart.style.animation="subir 6s linear forwards";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

setInterval(criarCoracao,1500);

/* ===========================
   CSS DAS ANIMAÇÕES
=========================== */

const style=document.createElement("style");

style.innerHTML=`

@keyframes subir{

0%{

transform:translateY(0);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}

`;

document.head.appendChild(style);

/* ===========================
   MENSAGEM
=========================== */

console.log("❤️ Ana Beatriz ❤️");

console.log("Esse site foi feito com muito amor.");

console.log("Espero que você goste. ❤️");
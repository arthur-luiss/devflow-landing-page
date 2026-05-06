// Sistema Slider
const slider = document.querySelector('.banner-slider'); 
const dots = document.querySelectorAll('.dot')
const total = document.querySelectorAll('.banner-slider a').length;
let current = 0;

function goTo(index) {
  current = (index + total) % total;
  slider.style.transform = `translateX(-${current * 100}%)`; // Movendo horizontalmente o banner
  dots.forEach(d => d.classList.remove('active'));
  dots[current].classList.add('active');
}

document.querySelector('.btn-next').addEventListener('click', () => goTo(current + 1)); // Troca (Manual)
document.querySelector('.btn-prev').addEventListener('click', () => goTo(current - 1));
dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

setInterval(() => goTo(current + 1), 3000); // Troca (automática)

// Função BTN
function cadastro() {
    alert("Redirecionando para cadastro...");
    // Mostra mensagem simulando ação
}
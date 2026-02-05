const topicButtons = document.querySelectorAll('.topic-card button');

for (const button of topicButtons) {
  button.addEventListener('click', () => {
    const topic = button.dataset.topic;
    button.textContent = `Tema selecionado: ${topic}`;
    button.disabled = true;
  });
}

const yearElement = document.querySelector('footer p');
if (yearElement) {
  const currentYear = new Date().getFullYear();
  yearElement.textContent = `© ${currentYear} Ágora Filosófica • Todos os direitos reservados.`;
}

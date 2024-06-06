const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
inputName.addEventListener('input', handleInput);

function handleInput(e) {
  const text = e.target.value.trim();

  if (text === '') {
    outputName.textContent = 'Anonymous';
  } else {
    outputName.textContent = text;
  }
}

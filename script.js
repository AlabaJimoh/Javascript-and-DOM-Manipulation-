const changeTextButton = document.getElementById('changeTextButton');
const dynamicText = document.getElementById('dynamicText');

changeTextButton.addEventListener('click', () => {
  dynamicText.textContent = 'Text Changed!';
});

const toggleStyleButton = document.getElementById('toggleStyleButton');

toggleStyleButton.addEventListener('click', () => {
  dynamicText.classList.toggle('highlight');
});

const addElementButton = document.getElementById('addElementButton');
const newElementContainer = document.getElementById('newElementContainer');

addElementButton.addEventListener('click', () => {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'New paragraph added!';
  newElementContainer.appendChild(newParagraph);
});

const removeElementButton = document.getElementById('removeElementButton');

removeElementButton.addEventListener('click', () => {
  const lastElement = newElementContainer.lastElementChild;
  if (lastElement) {
    newElementContainer.removeChild(lastElement);
  }
});

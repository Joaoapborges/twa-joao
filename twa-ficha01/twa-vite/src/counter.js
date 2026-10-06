export function setupCounter(elementMinus, elementPlus) {
  let counter = 0

  const setCounter = (count) => {
    counter = count;

    elementPlus.innerHTML = `Up: ${counter}`;
    elementMinus.innerHTML = `Down: ${counter}`;

    document.title = `${counter}`;
  }

  elementMinus.addEventListener('click', () => setCounter(counter - 1));

  elementPlus.addEventListener('click', () => setCounter(counter + 1));

  setCounter(0);
}

export function NewElement(element, className) {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  return newElement;
}

export function Separator() {
  const separator = NewElement("p", "bullet-point");
  separator.textContent = "•";
  return separator;
}

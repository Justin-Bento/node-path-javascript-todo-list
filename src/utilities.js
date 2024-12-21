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

export const colors = {
  white: "#fafafa",
  black: "#fafafa",
  transparent: " transparent",
  gray: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b",
  },
};

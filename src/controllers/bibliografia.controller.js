import view from "../vistas/bibliografia.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;
  return divElement;
};

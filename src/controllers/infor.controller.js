import view from "../vistas/infor.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  const btnClick = divElement.querySelector("#btnClick");
  btnClick.addEventListener("click", () => {
    alert("De nombre Skipper");
  });

  return divElement;
};

import { pages } from "../controllers/index";

const router = async (route) => {
  let content = document.getElementById("root");
  content.innerHTML = "";

  console.log(route);

  switch (route) {
    case "#/": {
      return content.appendChild(pages.home());
    }
    case "#/bibliografia": {
      return content.appendChild(await pages.bibliografia());
    }
    case "#/infor": {
      return content.appendChild(await pages.infor());
    }
  }
};

export { router };

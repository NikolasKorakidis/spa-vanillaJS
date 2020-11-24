const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("viewing dashboard") },
    { path: "/posts", view: () => console.log("viewing posts") },
    { path: "/setting", view: () => console.log("viewing settings") },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potencialMatch) => potencialMatch.isMatch);

  if (!match) {
    match = {
      route: route[0],
      isMatch: true,
    };
  }

  console.log(match);
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});

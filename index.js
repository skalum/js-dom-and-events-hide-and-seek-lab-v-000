function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function deepestChild() {
  let deepestChild = document.querySelector("div#grand-node");
  let deeperChild = deepestChild.children[0];

  while (deeperChild) {
    deepestChild = deeperChild;
    deeperChild = deepestChild.children[0];
  }

  return deepestChild;
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll(".ranked-list");

  for (const rankedList of rankedLists) {
    const items = rankedList.children;

    for (const item of items) {
      item.innerHTML = parseInt(item.innerHTML) + n;
    }
  }
}

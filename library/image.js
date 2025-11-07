window.replaceImage = function (img) {
  const replacement = document.createElement("div");
  replacement.className = "img error";
  img.replaceWith(replacement);
};

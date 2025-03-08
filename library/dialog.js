function setupClickListeners() {
  const contestants = document.querySelectorAll(".contestant");
  Array.from(contestants).forEach((contestant) => {
    const dialog = contestant.querySelector("dialog");
    contestant.addEventListener("click", () => {
      dialog.showModal();
    });

    const close = dialog.querySelector("button");
    close.addEventListener("click", () => {
      setTimeout(() => {
        dialog.close();
      }, 0);
    });
  });
}

setupClickListeners();

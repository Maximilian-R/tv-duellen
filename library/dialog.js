function setupClickListeners() {
  const triggers = document.querySelectorAll("[data-dialog-trigger]");
  Array.from(triggers).forEach((trigger) => {
    const dialog = trigger.querySelector("dialog");
    trigger.addEventListener("click", () => {
      dialog.showModal();
    });
  });
}

setupClickListeners();

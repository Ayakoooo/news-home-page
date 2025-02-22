document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.querySelector(".navbar-toggle");
  const closeButton = document.querySelector(".dialog-toggle");
  const dialog = document.querySelector("#navbar-dialog");

  if (openButton && closeButton && dialog) {
    openButton.addEventListener("click", () => {
      dialog.showModal();
    });

    closeButton.addEventListener("click", () => {
      dialog.close();
    });

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  }
});

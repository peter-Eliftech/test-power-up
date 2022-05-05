const estimateForm = document.getElementById("estimate");

const estimateFormSubmit = function (e) {
  e.preventDefault();
  const { target } = e;
  const data = new FormData(target);

  const to = data.get("to");
  const messageText = data.get("msg-text");
  console.log(to, messageText);
};

estimateForm.addEventListener("submit", estimateFormSubmit);

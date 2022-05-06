var t = TrelloPowerUp.iframe();
const estimateFormSubmit = function (e) {
  e.preventDefault();
  const { target } = e;
  const data = new FormData(target);

  const to = data.get("to");
  const messageText = data.get("msg-text");
  console.log(to, messageText);
  t.card("all").then((card) => {
    console.log(card, "---all");
  });
};

window.estimate.addEventListener("submit", estimateFormSubmit);

var GRAY_ICON =
  "https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg";

var btnCallback = function (t, opts) {
  return t.popup({
    title: "Snooze Card",
    items: [
      {
        text: "Choose Time",
        callback: function (t, opts) {},
      },
      {
        text: "In 1 hour",
        callback: function (t, opts) {},
      },
      {
        text: "In 2 hours",
        callback: function (t, opts) {},
      },
    ],
  });
};

window.TrelloPowerUp.initialize({
  "card-buttons": function (t, opts) {
    return [
      {
        icon: GRAY_ICON,
        text: "Snooze",
        callback: btnCallback,
      },
    ];
  },
});

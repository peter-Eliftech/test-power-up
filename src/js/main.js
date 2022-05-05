var GRAY_ICON =
  "https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg";

window.TrelloPowerUp.initialize({
  "card-buttons": function (t, opts) {
    return [
      {
        icon: GRAY_ICON,
        text: "Report",
        callback: function () {
          t.modal({
            // the url to load for the iframe
            url: "./html/modal.html",
            // optional arguments to be passed to the iframe as query parameters
            // access later with t.arg('text')
            args: { text: "Hello" },
            // optional color for header chrome
            accentColor: "#1DA1F2",
            // initial height for iframe
            height: 500, // not used if fullscreen is true
            // whether the modal should stretch to take up the whole screen
            fullscreen: false,
            // optional function to be called if user closes modal (via `X` or escape, etc)
            callback: () => console.log("Goodbye."),
            // optional title for header chrome
            title: "Send telega message",
            // optional action buttons for header chrome
            // max 3, up to 1 on right side
          });
        },
      },
    ];
  },
});

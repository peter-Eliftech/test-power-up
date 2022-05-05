var GRAY_ICON =
  "https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg";

window.TrelloPowerUp.initialize({
  "card-buttons": function (t, opts) {
    return [
      {
        // usually you will provide a callback function to be run on button click
        // we recommend that you use a popup on click generally
        icon: GRAY_ICON, // don't use a colored icon here
        text: "Open Popup",
        callback: () => {},
        condition: "edit",
      },
      {
        icon: GRAY_ICON,
        text: "Snooze",
        callback: function () {
          t.modal({
            // the url to load for the iframe
            url: "./html/modal.html",
            // optional arguments to be passed to the iframe as query parameters
            // access later with t.arg('text')
            args: { text: "Hello" },
            // optional color for header chrome
            accentColor: "#F2D600",
            // initial height for iframe
            height: 500, // not used if fullscreen is true
            // whether the modal should stretch to take up the whole screen
            fullscreen: true,
            // optional function to be called if user closes modal (via `X` or escape, etc)
            callback: () => console.log("Goodbye."),
            // optional title for header chrome
            title: "appear.in meeting",
            // optional action buttons for header chrome
            // max 3, up to 1 on right side
            actions: [
              {
                icon: GRAY_ICON,
                url: "https://google.com",
                alt: "Leftmost",
                position: "left",
              },
              {
                icon: GRAY_ICON,
                callback: (tr) =>
                  tr.popup({
                    title: tr.localizeKey("appear_in_settings"),
                    url: "settings.html",
                    height: 164,
                  }),
                alt: "Second from left",
                position: "left",
              },
              {
                icon: GRAY_ICON,
                callback: () => console.log(":tada:"),
                alt: "Right side",
                position: "right",
              },
            ],
          });
        },
      },
    ];
  },
});

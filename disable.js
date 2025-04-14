DisableDevtool({
  url: "https://gooplay.xyz/", // Redirect URL when devtools open
  ondevtoolopen: function() { 
    alert("Developer tools detected!");
    window.location.href = "https://example.com/detected";
  },
  interval: 1000, // detection interval in milliseconds
  disableMenu: true // disable right-click menu
});

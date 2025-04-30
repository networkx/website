window.addEventListener("DOMContentLoaded", function () {
  var current_lang = document.documentElement.lang;
  fetch("/"+ current_lang + "/languages.json")
    .then((response) => response.json())
    .then((data) => {
      const select = document.getElementById("language-switcher");
      select.innerHTML = "";
      Object.entries(data).forEach(([code, name]) => {
        const option = document.createElement("option");
        option.value = code;
        option.text = name;
        option.selected = code === document.documentElement.lang;
        select.appendChild(option);
      });
    });
});

function change_language() {
  var current_lang = document.documentElement.lang;
  var new_lang = document.getElementById("language-switcher").value;
  var url = window.location.href;
  var regex = new RegExp("/" + current_lang + "(?=/)");
  window.location.href = url.replace(regex, "/" + new_lang);
}

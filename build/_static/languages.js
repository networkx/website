function change_language() {
    var current_lang = document.documentElement.lang;
    var new_lang = document.getElementById("language-switcher").value;
    var url = window.location.href;
    window.location.href = url.replace(current_lang, new_lang);
}

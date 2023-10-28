var versions = ['3.2.1','3.2', '3.1', '3.0', '2.8.8', '2.8.7', '2.8.6', '2.8.5', '2.8.4', '2.8.3', '2.8.2', '2.8.1', '2.8', '2.7.1', '2.7', '2.6.2', '2.5', '2.4', '2.3', '2.2', '2.1', '2.0', '1.11', '1.10', '1.9.1', '1.9', '1.8.1', '1.8', '1.7', '1.6', '1.5', '1.4', '1.3', '1.2', '1.1', '1.0.1', '1.0', '0.99', '0.37'];

function insert_version_links() {
    for (i = 0; i < versions.length; i++){
        open_list = '<li>'
        if (typeof(DOCUMENTATION_OPTIONS) !== 'undefined') {
            if ((DOCUMENTATION_OPTIONS['VERSION'] == versions[i]) ||
                (DOCUMENTATION_OPTIONS['VERSION'].match(/latest$/) && (i == 0))) {
                open_list = '<li id="current">'
            }
        }
        document.write(open_list);
        document.write('<a href="URL">networkx VERSION</a> </li>\n'
                        .replace('VERSION', versions[i])
                        .replace('URL', 'https://networkx.github.io/documentation/networkx-' + versions[i]));
    }
}

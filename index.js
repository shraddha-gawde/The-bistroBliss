function includeHTML(file, containerId) {
    const container = document.getElementById(containerId);
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            container.innerHTML = this.responseText;

            // Extract and execute scripts
            const scripts = container.getElementsByTagName('script');
            for (let i = 0; i < scripts.length; i++) {
                const script = document.createElement('script');
                script.text = scripts[i].text;
                container.appendChild(script).parentNode.removeChild(script);
            }
        }
    };

    xhttp.open('GET', file, true);
    xhttp.send();
}

// Load header and footer
includeHTML('rindex.html', 'header-container');
// includeHTML('vlanding_page.html', 'landingPage-container');
// includeHTML('scripts/room-list.js', 'roomContainer');
includeHTML('mayank.html', 'footer-container');

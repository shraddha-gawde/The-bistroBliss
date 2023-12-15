function includeHTML(file, containerId) {
    const container = document.getElementById(containerId);
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            container.innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
  }
  
  // Load header and footer
  includeHTML('rindex.html', 'header-container');
  includeHTML('mayank.html', 'footer-container');
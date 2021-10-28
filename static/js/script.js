console.log("Loaded script.js")

function loadDirectory() {
  console.log("Running loadDirectory()...");

  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "/Directory", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhttp.onreadystatechange = function() {
    console.log(xhttp.readyState);

    if (xhttp.readyState === 4) {
      console.log(xhttp.status);

      if (xhttp.status === 200) {
        var text = xhttp.responseText;
        console.log(text);

        var directory = JSON.parse(text);
        console.log(directory);

        
        
        for (var key in directory) {

          var tr = document.createElement("tr");
          var tdk = document.createElement("td");
          var tdv = document.createElement("td");

          tdk.appendChild(document.createTextNode(key));
          tdv.appendChild(document.createTextNode(directory[key]));
          tr.appendChild(tdk);
          tr.appendChild(tdv);

          document.getElementById('directoryTable').appendChild(tr);
        }
      } else {
        console.log(xhttp.statusText);
        console.error(xhttp.statusText);
      }
    }
  };

  xhttp.send();
}
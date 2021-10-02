const builingRocket = document.getElementById("builingRocket");
builingRocket.style.display = "none"

const showDetailsbutton = document.getElementById("showDetails");
showDetailsbutton.style.display = "none"

function lunchRocket() {
  const btnshowRocket = document.getElementById("buildRocket");
  builingRocket.style.display = "block";
  setTimeout(function () {
    document.getElementById("rocketMessage").innerHTML = "Rocket Launched!!!"
    document.getElementById("rocketMessage").setAttribute('style', 'color: green;text-align: center;')
    document.getElementById("showDetails").setAttribute('style', 'margin-left: 100px !important;')
    showDetailsbutton.style.display = "block"
  }, 1000)
}

const rocketlaunchmessage = document.getElementById("rocketlaunchmessage");
rocketlaunchmessage.style.display = "none"

function getAstronauts() {
  var listastronauts = document.getElementById('list-astronauts');

  fetch('http://api.open-notify.org/astros.json').then(responce => responce.json())
    .then(responce => {
      var ol = document.createElement('ol');
     
      //ul.setAttribute('style', 'padding: 0; margin: 0;');
      ol.setAttribute('id', 'theList');

      if (responce.message === "success") {
        rocketlaunchmessage.style.display = "block";

        for (i = 0; i < responce.people.length; i++) {
          var li = document.createElement('li');               // create li element.
          var a = document.createElement('a')

          a.innerHTML = responce.people[i].name;
          a.setAttribute('href', "https://www.google.co.in/search?q="+ responce.people[i].name)
          a.setAttribute("target","_blank")
          a.addAt
          li.appendChild(a)
          ol.appendChild(li); 

        }
        listastronauts.appendChild(ol);
      } else {
        document.getElementById("rocketlaunchmessage").innerHTML = "Sorry Rocket failed to reach space build new one!!!!"
        document.getElementById("rocketlaunchmessage").setAttribute('style', 'color: red;text-align: center;')
      }
    })

    document.getElementById("rocketlaunchmessage").innerHTML = "Sorry Rocket failed to reach space build new one!!!!"
    document.getElementById("rocketlaunchmessage").setAttribute('style', 'color: red;text-align: center;')
}









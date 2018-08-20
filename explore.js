function searchCities() {
    // Declare variables
    var input, search, i;
    input = document.getElementById("myInput");
    search = input.value.toUpperCase();
    // var notThere = "Sorry! No information for your search is available at this time.";
    // ul = document.getElementById("myUL");
    // li = ul.getElementsByTagName('li');
    // Loop through all list items, and hide those who don't match the search query
    // for (i = 0; i < li.length; i++) {
    //     a = li[i].getElementsByTagName("a")[0];
    //     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
    //         li[i].style.display = "";
    //     } else {
    //         li[i].style.display = "none";
    //     }
    // }

    var citiesArray = [["BANGKOK", 100.523186, 13.736717],
    ["DUBAI", 55.296249, 25.276987],
    ["LOS ANGELES", 241.7563, 34.0522],
    ["HONG KONG", 114.1095, 22.3964],
    ["ISTANBUL", 28.9784, 41.0082],
    ["LONDON", 0.118092, 51.509865],
    ["NEW YORK CITY", 286.064758, 40.730610],
    ["PARIS", 2.352222, 48.856614],
    ["SEOUL", 127.024612, 37.532600],
    ["SINGAPORE", 103.851959, 1.290270],
    ["TOKYO", 139.691706, 35.689487],
    ["CHICAGO", 272.3702, 41.8781],
    ["SEATTLE", 237.6679, 47.6062],
    ["BOSTON", 288.9411, 42.3601],
    ["DENVER", 255.0097, 39.7392],
    ["HONOLULU", 202.1417, 21.3069],
    ["MIAMI", 279.8082, 25.7617],
    ["TAHITI", 210.574, 342.3491],
    ["ROME", 12.4964, 41.9028],
    ["BEIJING", 116.4074, 39.9042],
    ["MADRID", 356.2962, 40.4168],
    ["TAIPEI", 121.5654, 25.0330]];

    var cityNames = ["BANGKOK","DUBAI","LOS ANGELES","HONG KONG","ISTANBUL","LONDON","NEW YORK CITY","PARIS", "SEOUL", "SINGAPORE", "TOKYO", "CHICAGO", "SEATTLE","BOSTON","DENVER","HONOLULU", "MIAMI","TAHITI","ROME", "BEIJING","MADRID","TAIPEI"];


    console.log(cityNames.includes(search));

    if (cityNames.includes(search) === true) {
    for (i = 0; i < citiesArray.length; i++) {
      if(search === citiesArray[i][0]) {
        if(search == citiesArray[0][0]){
          showBangkok();
        } else if (search === citiesArray[1][0]) {
          showDubai();
        } else if (search === citiesArray[3][0]) {
          showHongKong();
        } else if (search === citiesArray[4][0]) {
          showIstanbul();
        } else if (search === citiesArray[5][0]) {
          showLondon();
        } else if (search === citiesArray[6][0]) {
          showNYC();
        } else if (search === citiesArray[7][0]) {
          showParis();
        } else if (search === citiesArray[8][0]) {
          showSeoul();
        } else if (search === citiesArray[9][0]) {
          showSingapore();
        } else if (search === citiesArray[10][0]) {
          showTokyo();
        }
        console.log(search);
        map.getView().setCenter(ol.proj.fromLonLat([citiesArray[i][1], citiesArray[i][2]]));
        console.log(citiesArray[i][1], citiesArray[i][2]);
      }
      }
      // else if (search != citiesArray[i][0]) {
      //     document.getElementById("sorry").innerHTML = notThere;
      //     break;
      // }

  } else {
  console.log("nope"); //ADD SOMETHING BOIIIII
  showSorry();
}

// map.getView().setCenter(ol.proj.fromLonLat([55.296249, 25.276987]))"><a href="#">Dubai</a></li>
// <li onclick="showHongKong(); map.getView().setCenter(ol.proj.fromLonLat([114.1095,22.3964 ]))"><a href="#">Hong Kong</a></li>
// <li onclick="showIstanbul(); map.getView().setCenter(ol.proj.fromLonLat([28.9784,41.0082 ]))"><a href="#">Istanbul</a></li>
// <li onclick="showLondon(); map.getView().setCenter(ol.proj.fromLonLat([0.118092, 51.509865]))"><a href="#">London</a></li>
// <li onclick="showNYC(); map.getView().setCenter(ol.proj.fromLonLat([286.064758, 40.730610    ]))"><a href="#">New York City</a></li>
// <li onclick="showParis(); map.getView().setCenter(ol.proj.fromLonLat([2.352222, 48.856614]))"><a href="#">Paris</a></li>
// <li onclick="showSeoul(); map.getView().setCenter(ol.proj.fromLonLat([127.024612, 37.532600    ]))"><a href="#">Seoul</a></li>
// <li onclick="showSingapore(); map.getView().setCenter(ol.proj.fromLonLat([103.851959, 1.290270]))"><a href="#">Singapore</a></li>
// <li onclick="showTokyo(); map.getView().setCenter(ol.proj.fromLonLat([139.691706, 35.689487]))"
}

function showBangkok() {
  var x = document.getElementById("bangkokInfo");
  // if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("dubaiInfo").style.display = "none";
      document.getElementById("hkInfo").style.display = "none";
      document.getElementById("istanInfo").style.display = "none";
      document.getElementById("londonInfo").style.display = "none";
      document.getElementById("nycInfo").style.display = "none";
      document.getElementById("parisInfo").style.display = "none";
      document.getElementById("seoulInfo").style.display = "none";
      document.getElementById("singaporeInfo").style.display = "none";
      document.getElementById("tokyoInfo").style.display = "none";
      document.getElementById("sorry").style.display="none";
  // }  else {
  //     x.style.display = "none";
  // }
}
function showDubai() {
  var x = document.getElementById("dubaiInfo");
  // if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("bangkokInfo").style.display = "none";
      document.getElementById("hkInfo").style.display = "none";
      document.getElementById("istanInfo").style.display = "none";
      document.getElementById("londonInfo").style.display = "none";
      document.getElementById("nycInfo").style.display = "none";
      document.getElementById("parisInfo").style.display = "none";
      document.getElementById("seoulInfo").style.display = "none";
      document.getElementById("singaporeInfo").style.display = "none";
      document.getElementById("tokyoInfo").style.display = "none";
      document.getElementById("sorry").style.display="none";
  // } else {
  //     x.style.display = "none";
  // }
}
function showHongKong() {
  var x = document.getElementById("hkInfo");
  // if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("dubaiInfo").style.display = "none";
      document.getElementById("bangkokInfo").style.display = "none";
      document.getElementById("istanInfo").style.display = "none";
      document.getElementById("londonInfo").style.display = "none";
      document.getElementById("nycInfo").style.display = "none";
      document.getElementById("parisInfo").style.display = "none";
      document.getElementById("seoulInfo").style.display = "none";
      document.getElementById("singaporeInfo").style.display = "none";
      document.getElementById("tokyoInfo").style.display = "none";
      document.getElementById("sorry").style.display="none";
  // } else {
  //     x.style.display = "none";
  // }
}
function showIstanbul() {
  var x = document.getElementById("istanInfo");
  // if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("dubaiInfo").style.display = "none";
      document.getElementById("hkInfo").style.display = "none";
      document.getElementById("bangkokInfo").style.display = "none";
      document.getElementById("londonInfo").style.display = "none";
      document.getElementById("nycInfo").style.display = "none";
      document.getElementById("parisInfo").style.display = "none";
      document.getElementById("seoulInfo").style.display = "none";
      document.getElementById("singaporeInfo").style.display = "none";
      document.getElementById("tokyoInfo").style.display = "none";
      document.getElementById("sorry").style.display="none";
  // } else {
  //     x.style.display = "none";
  // }
}
function showLondon() {
  var x = document.getElementById("londonInfo");
  // if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("dubaiInfo").style.display = "none";
      document.getElementById("hkInfo").style.display = "none";
      document.getElementById("istanInfo").style.display = "none";
      document.getElementById("bangkokInfo").style.display = "none";
      document.getElementById("nycInfo").style.display = "none";
      document.getElementById("parisInfo").style.display = "none";
      document.getElementById("seoulInfo").style.display = "none";
      document.getElementById("singaporeInfo").style.display = "none";
      document.getElementById("tokyoInfo").style.display = "none";
      document.getElementById("sorry").style.display="none";
  // } else {
  //     x.style.display = "none";
  // }
}
function showNYC() {
  var x = document.getElementById("nycInfo");
  // if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("dubaiInfo").style.display = "none";
      document.getElementById("hkInfo").style.display = "none";
      document.getElementById("istanInfo").style.display = "none";
      document.getElementById("londonInfo").style.display = "none";
      document.getElementById("bangkokInfo").style.display = "none";
      document.getElementById("parisInfo").style.display = "none";
      document.getElementById("seoulInfo").style.display = "none";
      document.getElementById("singaporeInfo").style.display = "none";
      document.getElementById("tokyoInfo").style.display = "none";
      document.getElementById("sorry").style.display="none";
  // } else {
  //     x.style.display = "none";
  // }
}
function showParis() {
  var x = document.getElementById("parisInfo");
  // if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("dubaiInfo").style.display = "none";
      document.getElementById("hkInfo").style.display = "none";
      document.getElementById("istanInfo").style.display = "none";
      document.getElementById("londonInfo").style.display = "none";
      document.getElementById("nycInfo").style.display = "none";
      document.getElementById("bangkokInfo").style.display = "none";
      document.getElementById("seoulInfo").style.display = "none";
      document.getElementById("singaporeInfo").style.display = "none";
      document.getElementById("tokyoInfo").style.display = "none";
      document.getElementById("sorry").style.display="none";
  // } else {
  //     x.style.display = "none";
  // }
}
function showSeoul() {
  var x = document.getElementById("seoulInfo");
  // if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("dubaiInfo").style.display = "none";
      document.getElementById("hkInfo").style.display = "none";
      document.getElementById("istanInfo").style.display = "none";
      document.getElementById("londonInfo").style.display = "none";
      document.getElementById("nycInfo").style.display = "none";
      document.getElementById("parisInfo").style.display = "none";
      document.getElementById("bangkokInfo").style.display = "none";
      document.getElementById("singaporeInfo").style.display = "none";
      document.getElementById("tokyoInfo").style.display = "none";
      document.getElementById("sorry").style.display="none";
  // } else {
  //     x.style.display = "none";
  // }
}
function showSingapore() {
  var x = document.getElementById("singaporeInfo");
  // if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("dubaiInfo").style.display = "none";
      document.getElementById("hkInfo").style.display = "none";
      document.getElementById("istanInfo").style.display = "none";
      document.getElementById("londonInfo").style.display = "none";
      document.getElementById("nycInfo").style.display = "none";
      document.getElementById("parisInfo").style.display = "none";
      document.getElementById("seoulInfo").style.display = "none";
      document.getElementById("bangkokInfo").style.display = "none";
      document.getElementById("tokyoInfo").style.display = "none";
      document.getElementById("sorry").style.display="none";
}
function showTokyo() {
  var x = document.getElementById("tokyoInfo");
  // if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("dubaiInfo").style.display = "none";
      document.getElementById("hkInfo").style.display = "none";
      document.getElementById("istanInfo").style.display = "none";
      document.getElementById("londonInfo").style.display = "none";
      document.getElementById("nycInfo").style.display = "none";
      document.getElementById("parisInfo").style.display = "none";
      document.getElementById("seoulInfo").style.display = "none";
      document.getElementById("singaporeInfo").style.display = "none";
      document.getElementById("bangkokInfo").style.display = "none";
      document.getElementById("sorry").style.display="none";
}

function showSorry() {
  var x = document.getElementById("sorry");
  x.style.display = "block";
      document.getElementById("dubaiInfo").style.display = "none";
      document.getElementById("hkInfo").style.display = "none";
      document.getElementById("istanInfo").style.display = "none";
      document.getElementById("londonInfo").style.display = "none";
      document.getElementById("nycInfo").style.display = "none";
      document.getElementById("parisInfo").style.display = "none";
      document.getElementById("seoulInfo").style.display = "none";
      document.getElementById("singaporeInfo").style.display = "none";
      document.getElementById("bangkokInfo").style.display = "none";
  map.getView().setCenter(ol.proj.fromLonLat([285.9224, 40.728793]));
}

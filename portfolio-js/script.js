// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// function for chnage tabs
function changetab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}

const list = document.querySelectorAll(".list");
const tabcontent = document.getElementsByClassName("tabcontent");
function activeLink(evt, cityName) {
  list.forEach((item) => item.classList.remove("active"));
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
  evt.currentTarget.classList.add("active");
}

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if ("geolocation" in navigator) {
  // check if geolocation is supported/enabled on current browser
  navigator.geolocation.getCurrentPosition(
    function success(position) {
      // for when getting location is a success
      console.log(
        "latitude",
        position.coords.latitude,
        "longitude",
        position.coords.longitude
      );
    },
    function error(err) {
      // for when getting location results in an error
      console.error("An error has occured while retrieving location", err);
    }
  );
} else {
  // geolocation is not supported
  // get your location some other way
  console.log("geolocation is not enabled on this browser");
}


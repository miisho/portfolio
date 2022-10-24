const navigation = ["Home",  "Contact", "Work"]
const pages = ["index.html", "contact.html", "index.html#works"]

let navtext = "<ul>"

for (let i=0; i < navigation.length; i++){
  navtext += '<li><a href="' + pages[i] + '">' + navigation[i] + "</a></li>";
}

navtext += "</ul>";
document.getElementById("navigation").innerHTML = navtext;


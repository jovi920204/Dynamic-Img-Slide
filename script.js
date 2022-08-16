var URL = "/pics/";
var id = 100000; // default

function prevImg(){
  if(id > 100000){
    id--;
  }
  const Img = document.getElementById("image");
  Img.src = URL+String(id)+".jpg";
};
function nextImg(){
  if(id <= 100020){
    id++;
  }
  const Img = document.getElementById("image");
  Img.src = URL+String(id)+".jpg";
};

function search(){
  var text = document.getElementById("searchBar").value;
  const Img = document.getElementById("image");
  id = parseInt(text);
  Img.src = URL+String(id)+".jpg";
}
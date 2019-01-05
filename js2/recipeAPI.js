var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
    console.log("load good, ready to create app infrastucture!!");
  }
});

xhr.open("GET", "https://edamam-recipe-search-and-diet-v1.p.mashape.com/search");
xhr.setRequestHeader("x-mashape-key", "ozDXN1q9sxmshXBnTzTxM7mUmwIsp1wwh5ujsnBxsy7z1D3ZRp");
xhr.setRequestHeader("_app_id", "691b076d");
xhr.setRequestHeader("_app_key", "3e8c229f325ab89e7d270b29c8294a35");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("q", "carrots");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "011fbb8d-2ba9-905d-feb2-e330d16db1ad");

xhr.send(data);

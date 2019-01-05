var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
    console.log("working on access and authorization with aws!!");
  }
});

xhr.open("GET", "https://nutritionix-api.p.mashape.com/v1_1/search/apples");
xhr.setRequestHeader("x-mashape-key", "ozDXN1q9sxmshXBnTzTxM7mUmwIsp1wwh5ujsnBxsy7z1D3ZRp");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "c290f3a7-7a48-b3f1-2774-9834d90b3e67");

xhr.send(data);


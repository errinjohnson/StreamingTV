var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
    console.log("working on access and authorization issues with aws!!");
  }
});

xhr.open("GET", "https://api.darksky.net/forecast/3540700d33aa48a1266ab57d21d2c714/37.8267,-122.4233");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "64f9375e-5524-8c38-4081-d2cd7d17edb1");

xhr.send(data);

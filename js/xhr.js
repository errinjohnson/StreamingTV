var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
});

xhr.open("GET", "https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972");
xhr.setRequestHeader("authorization", "Bearer mXjagJCZHe3z8KXDnQgV-f278iKdIhC0OLDRU1DrQXzvmPMqzSPzXQ504TGUm9kH6bsjxdsKtGu7SSX5ufkTthKnoU_ggqyDzaT4YuGJAY9qbHTz1Mkab6AM1PexWHYx");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);

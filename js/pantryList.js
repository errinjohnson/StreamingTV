$(function () {
    var edit = document.getElementById('list');
    if (localStorage) {
        $(edit).blur(function () {
            localStorage.setItem('listData', this.innerHTML);
        });

        //when page loads
        if (localStorage.getItem('listData')) {
            edit.innerHTML = localStorage.getItem('listData');
            console.log('listData');
        }
    }else {
        alert("javascript needs to be enabled to use localStorage");
        console.log("javascript needs to be enabled to use localStorage");
    }

});

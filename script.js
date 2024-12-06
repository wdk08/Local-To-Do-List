function load() {
    if(localStorage.length == 1){
        localStorage.setItem("latest", 0);
    }
    var i = 1;
    const vals = Number(localStorage.getItem("latest"));
    while (i <= vals){
        if (localStorage.getItem(i)){
            document.getElementById("items").innerHTML += "<button class='item' onclick='complete("+i+")'>complete</button><p class='item'>"+localStorage.getItem(i)+"</p><br>"
        }
        i++
    }
    document.getElementById("num").innerHTML = localStorage.length - 1;
}
function add() {
    const name = document.getElementById("name").value;
    const key = Number(localStorage.getItem("latest"));
    localStorage.setItem(key+1, name);
    localStorage.setItem("latest", key+1);
    document.getElementById("items").innerHTML = "";
    load();
}
function complete(i) {
    localStorage.removeItem(i);
    document.getElementById("items").innerHTML = "";
    load()
}

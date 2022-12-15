items = document.getElementById("additem")
let count = 0;
function Add(btn){
    property = document.getElementsByClassName(btn);
    count = count + 1;
    items.innerHTML = "ITEMS (" + count +")";
}


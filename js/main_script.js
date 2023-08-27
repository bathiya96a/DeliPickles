function openstore() {
    window.open("./pages/store.html");
}

function openproducts() {
    window.open("./pages/products.html");
}

function addtocart() {
    alert("One item added to cart.");
    alert("But, There will be no item in cart. because this is a demo work. :)");
    
    var table = document.getElementsByTagName('Table');

    var item = document.getElementById("item");
    var price = document.getElementById("price");
    var discount = document.getElementById("discount");

    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = item;
    cell2.innerHTML = quantity;
}

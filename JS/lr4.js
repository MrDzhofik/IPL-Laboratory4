var product_price = 0;
var product_name = "a";
var id = 0;
// window.onload = read_and_add_data();


function read_data() {
    product_name = document.getElementById('name').value;
    product_price = document.getElementById('price').value;
    // id_cell.innerHTML = id;
    // name_cell.innerHTML = product_name;
    // price_cell.innerHTML = product_price;
    // table.innerHTML += "<tr><td>" + id + "</td><td>" + product_name + "</td><td>" + product_price + "</td></tr>";
    // table.style.display = "none";
}

function add_data() {
    id++;
    read_data();
    var tbody = document.getElementById("products").getElementsByTagName("tbody")[0];
    var row = tbody.insertRow(0);
    var id_cell = row.insertCell();
    var name_cell = row.insertCell();
    var price_cell = row.insertCell();
    var p_id = document.createTextNode(id);
    var p_name = document.createTextNode(name);
    var p_price = document.createTextNode(price);
    id_cell.appendChild(p_id);
    name_cell.appendChild(p_name);
    price_cell.appendChild(p_price);
    // tbody.appendChild(row);
}
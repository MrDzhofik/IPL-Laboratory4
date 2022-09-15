var product_price = 0;
var product_name = "a";
var id = 0;
// window.onload = read_data();


function read_data() {
    product_name = document.getElementById('name').value;
    product_price = document.getElementById('price').value;

}

function add_data() {
    id++;
    read_data();
    var tbody = document.getElementById("products").getElementsByTagName("tbody")[0];
    var row = tbody.insertRow();
    var id_cell = row.insertCell();
    var name_cell = row.insertCell();
    var price_cell = row.insertCell();
    var p_id = document.createTextNode(id);
    var p_name = document.createTextNode(product_name);
    var p_price = document.createTextNode(product_price);
    id_cell.appendChild(p_id);
    name_cell.appendChild(p_name);
    price_cell.appendChild(p_price);
    document.tbody.appendChild(row);
    // var row = document.createElement('tr');
    // var id_cell = document.createElement('td');
    // id_cell.innerHTML = id;
    // var name_cell = document.createElement('td');
    // name_cell.innerHTML = product_name;
    // var price_cell = document.createElement('td');
    // price_cell.innerHTML = product_price;
    // row.appendChild(id_cell);
    // row.appendChild(name_cell);
    // row.appendChild(price_cell);
    // tbody.appendChild(row);
}
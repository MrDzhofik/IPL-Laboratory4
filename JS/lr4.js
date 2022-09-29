var product_price = 0;
var product_name = "a";
var id = 0;
var flag = false;


function read_data() {
    product_name = document.getElementById('name').value;
    product_price = document.getElementById('price').value;
    if ((Number(product_price) == parseInt(product_price)) && (product_price > 0)) {
        document.getElementById('name').value = "";
        document.getElementById('price').value = "";
        return true;
    }
    else {
        alert("Only positive numbers!");
    }
    return false;
}

function add_data() {
    if (read_data()) {
        id++;
        var tbody = document.getElementById("products").getElementsByTagName('tbody')[0];
        var row = tbody.insertRow();
        row.setAttribute("onMouseOver", "Mouse_Over(this)");
        row.setAttribute("onMouseOut", "Mouse_Out(this)");
        row.setAttribute("onClick", "add_to_bin(this)");
        var id_cell = row.insertCell();
        var name_cell = row.insertCell();
        var price_cell = row.insertCell();
        var p_id = document.createTextNode(id);
        var p_name = document.createTextNode(product_name);
        var p_price = document.createTextNode(product_price);
        id_cell.appendChild(p_id);
        name_cell.appendChild(p_name);
        price_cell.appendChild(p_price);
    };
}

function add_to_bin(elem) {
    var bin_body = document.getElementById("bin").getElementsByTagName('tbody')[0];
    var p_name = elem.firstChild.nextSibling.innerText;
    var p_price = elem.firstChild.nextSibling.nextSibling.innerText;
    var row = bin_body.insertRow();
    row.setAttribute("onMouseOver", "Mouse_Over(this)");
    row.setAttribute("onMouseOut", "Mouse_Out(this)");
    row.setAttribute("onClick", "delete_from_bin(this)");
    var bin_name = row.insertCell();
    var bin_price = row.insertCell();
    var p_name = document.createTextNode(p_name);
    var p_price = document.createTextNode(p_price);
    bin_name.appendChild(p_name);
    bin_price.appendChild(p_price);
    show_sum();
}

function Mouse_Over(elem) {
    elem.style.backgroundColor = "yellow";
}

function Mouse_Out(elem) {
    elem.style.backgroundColor = "white";
}

function delete_from_bin(elem) {
    var index = 0;
    var bin_body = document.getElementById("bin").getElementsByTagName('tbody')[0];
    var row_count = bin_body.rows.length;
    var name_p = elem.firstChild.innerText;
    for (i = 0; i < row_count; i++) {
        if (bin_body.rows[i].firstChild.innerText != name_p) {
            index++;
        }
        else {
            bin_body.deleteRow(index);
            break;
        }
    }
    show_sum();
}

function show_sum() {
    var sum = 0;
    var bin_body = document.getElementById("bin").getElementsByTagName('tbody')[0];
    var row_count = bin_body.rows.length;
    for (i = 0; i < row_count; i++) {
        row = bin_body.rows[i];
        sum += Number(row.firstChild.nextSibling.innerText);
    }
    var summa = document.getElementById("sum");
    summa.innerText = "Сумма: " + sum + " ₽";
}
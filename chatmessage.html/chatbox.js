function chat() {
    var teks = document.getElementById('input_1').value;
    var node = document.createElement("p");
    var textnode = document.createTextNode(teks);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
    document.getElementById("input_1").value = "";
}
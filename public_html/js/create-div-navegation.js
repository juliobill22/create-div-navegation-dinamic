window.onload = function () {
    createDivs(10);
};

function createDivs(qtde) {
    var div_list_naveg = document.querySelector("#div-list-navegation");
    var div_navegation = document.querySelector("#div-navegation");

    var new_div_pag = document.createElement("div");
    new_div_pag.setAttribute("class", "pagination-arrow-left");
    new_div_pag.setAttribute("onclick", "clickArrowLeft()");    
    div_navegation.appendChild(new_div_pag);

    for (var i = 1; i < qtde + 1; i++) {

        var new_div = document.createElement("div");
        new_div.setAttribute("class", "div-child");
        new_div.setAttribute("id", "div-child-" + i);
        new_div.innerHTML = i;
        if (i == 1) {
            new_div.style.display = '';
        }
        else {
            new_div.style.display = 'none';
        }
        div_list_naveg.appendChild(new_div);

        var new_div_pag = document.createElement("div");
        new_div_pag.setAttribute("class", "pagination-circle");
        div_navegation.appendChild(new_div_pag);

        var name = "div-child-" + i;
        var name_formated = String.fromCharCode(39) + name + String.fromCharCode(39);
        var new_link = document.createElement("a");
        new_link.setAttribute("href", "#" + name);
        new_link.setAttribute("onclick", "clickCircle(" + name_formated + ")");
        new_link.innerHTML = i;
        new_div_pag.appendChild(new_link);
    }

    var new_div_pag = document.createElement("div");
    new_div_pag.setAttribute("class", "pagination-arrow-right");
    new_div_pag.setAttribute("onclick", "clickArrowRigth()");    
    div_navegation.appendChild(new_div_pag);
    
}

function escondeAllDivs() {
    var all = document.querySelectorAll(".div-child");
    for (var i = 0; i < all.length; i++) {
        all.item(i).style.display = 'none';
    }
//    var all = document.querySelectorAll(".div-navegation");
//    for (var i = 0; i < all.length; i++) {
//        all.item(i).classList.remove("pagination-botton-selected");
//    }
}

function mostraAtualDiv(parameter) {
    var div_atual = document.getElementById(parameter);
    div_atual.style.display = '';
}

function clickCircle(name) {
    escondeAllDivs();
    mostraAtualDiv(name);
}

function clickArrowLeft() {
    alert("clickArrowLeft()");
}

function clickArrowRigth() {
    alert("clickArrowRigth()");
}
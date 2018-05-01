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

        var name = i;
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
    
    marcarPageAtual(1);
    
}

function escondeAllDivs() {
    var all = document.querySelectorAll(".div-child");
    for (var i = 0; i < all.length; i++) {
        all.item(i).style.display = 'none';
    }
}

function marcarPageAtual(id_atual) {
    var all = document.querySelector("#div-navegation");
    for (var i = 0; i < all.childElementCount; i++) {
        all.childNodes[i].classList.remove("pagination-circle-active");
    }
    all.childNodes[id_atual].classList.add("pagination-circle-active");
}

function mostraAtualDiv(id_atual) {
    var div_name = "div-child-"+id_atual;
    var div_atual = document.getElementById(div_name);
    div_atual.style.display = '';
    
}

function clickCircle(id_atual) {
    escondeAllDivs();
    mostraAtualDiv(id_atual);
    marcarPageAtual(id_atual);    
}

function clickArrowLeft() {
    id_atual = getPageAtualId() - 1;
    if (id_atual == 0) {
        id_atual = 1;
    }
    escondeAllDivs();
    mostraAtualDiv(id_atual);
    marcarPageAtual(id_atual);        
}

function clickArrowRigth() {
    id_atual = getPageAtualId() + 1;
    var all = document.querySelector("#div-navegation");
    if (id_atual == (all.childElementCount-1)) {
        id_atual = id_atual - 1;
    }
    escondeAllDivs();
    mostraAtualDiv(id_atual);
    marcarPageAtual(id_atual);        
}

function getPageAtualId() {
    var all = document.querySelector("#div-navegation");
    var id_atual;
    for (var i = 0; i < all.childElementCount; i++) {
        if (all.childNodes[i].classList.contains("pagination-circle-active")) {
            id_atual = i;
            break;
        }
    }
    return id_atual;
}
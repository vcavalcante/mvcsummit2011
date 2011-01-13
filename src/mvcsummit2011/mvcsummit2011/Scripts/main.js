/// <reference path="jquery-1.4.4.js" />

$(function () {
    $("tr:not(.descricaoPalestra)").click(click_exibeDescricao);
    $("tr.descricaoPalestra").click(function () { $(this).prev("tr").click(); });
    $("#trilhas a").click(click_trilhas);
})

function click_exibeDescricao(obj) {
    $(this)
        .next("tr")
        .toggle("fast")
        .end()
        .find("span")
        .toggleClass("oculta");
}

function click_trilhas() {
    var dest = $(this).attr("href");
    $("table").hide();
    $(dest).show();
    $("#trilhas a").removeClass("selected");
    $(this).addClass("selected");
}
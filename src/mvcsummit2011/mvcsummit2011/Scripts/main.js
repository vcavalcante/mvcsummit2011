/// <reference path="jquery-1.4.4.js" />

$(function () {
    $("tr:not(.descricaoPalestra)").click(click_exibeDescricao);
    $("tr.descricaoPalestra").click(function () { $(this).prev("tr").click(); });
})

function click_exibeDescricao(obj) {
    $(this)
        .next("tr")
        .toggle("fast")
        .end()
        .find("span")
        .toggleClass("oculta");
}
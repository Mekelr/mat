document.getElementById("somar").onclick = function () {
    let port = Number(document.getElementById("port").value);
    let mat = Number(document.getElementById("mat").value);
    let en = Number(document.getElementById("en").value);
    let cien = Number(document.getElementById("cien").value);

    let total = port + mat + en + cien 
 
    let subtotal  = total < 200 ? "reprovado": "aprovado"

    document.getElementById("h1").textContent = ` voce foi ${subtotal} `
}
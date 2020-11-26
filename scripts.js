function calculateLTV(event) {
    event.preventDefault();
    let tkm = document.getElementById('TKM').value;
    let pedido = document.getElementById('Pedido').value;
    let periodo = document.getElementById('Período').value;
    let ltv = tkm * pedido * periodo;
    ltv = ltv.toFixed(2);
    document.getElementById('calculo').innerHTML = ltv;
    document.getElementById('result').style.display = "block";
}

 document.getElementById('result').style.display = "none";
 document.getElementById('form').addEventListener('submit', calculateLTV);

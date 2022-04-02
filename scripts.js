let cuenta = 0;
let propina = 0;
totalPropina = 0;
totalPagar = 0;

capturarCuenta();

function capturarCuenta() {
  let cuenta = document.getElementById("button");
  cuenta.addEventListener("click", calcular);
}

function calcular() {
  cuenta = Number(document.getElementById("account").value);
  propina = Number(document.getElementById("tips").value);
  totalPropina = (cuenta * propina) / 100;
  totalPagar = cuenta + totalPropina;
  document.getElementById("totalAccount").value = f.format(cuenta);
  document.getElementById("totalTips").value = f.format(totalPropina);
  document.getElementById("totalPay").value = f.format(totalPagar);
}

//DAR FORMATO DE MONEDA AL RESULTADO
const f = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "COP",
  minimumFractionDigits: 0,
});

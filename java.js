let suunta = "CtoF";

function vaihdaYksikko() {
  const nappi = document.getElementById("vaihda-nappi");
  const input = document.getElementById("input");
  input.value = '';
  document.getElementById("tulos").textContent = "Tulos: ";

  if (suunta === "CtoF") {
    suunta = "FtoC";
    nappi.textContent = "Fahrenheit → Celsius";
    input.placeholder = "Syötä Fahrenheit";
  } else {
    suunta = "CtoF";
    nappi.textContent = "Celsius → Fahrenheit";
    input.placeholder = "Syötä Celsius";
  }
}

function muunna() {
  const arvo = parseFloat(document.getElementById("input").value);
  const tulos = document.getElementById("tulos");

  if (isNaN(arvo)) {
    tulos.textContent = "Syötä kelvollinen luku!";
    return;
  }

  let muunnettu;
  if (suunta === "CtoF") {
    muunnettu = arvo * 9/5 + 32;
    tulos.textContent = `${arvo} °C = ${muunnettu.toFixed(1)} °F`;
  } else {
    muunnettu = (arvo - 32) * 5/9;
    tulos.textContent = `${arvo} °F = ${muunnettu.toFixed(1)} °C`;
  }
}

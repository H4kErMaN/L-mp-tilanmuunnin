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

function haeDesimaaliMaara() {
  const valittu = document.querySelector('input[name="desimaali"]:checked');
  return parseInt(valittu.value, 10);
}

function muunna() {
  const arvo = parseFloat(document.getElementById("input").value);
  const tulos = document.getElementById("tulos");
  const tarkkuus = haeDesimaaliMaara();

  if (isNaN(arvo)) {
    tulos.textContent = "Syötä kelvollinen luku!";
    return;
  }

  let muunnettu;
  if (suunta === "CtoF") {
    muunnettu = arvo * 9/5 + 32;
    tulos.textContent = `${arvo} °C = ${muunnettu.toFixed(tarkkuus)} °F`;
  } else {
    muunnettu = (arvo - 32) * 5/9;
    tulos.textContent = `${arvo} °F = ${muunnettu.toFixed(tarkkuus)} °C`;
  }
}

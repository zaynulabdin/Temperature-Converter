function convertTemperature() {
  const inputTemp = document.getElementById("inputTemperature").value;
  const scale = document.getElementById("scale").value;
  let result;

  if (scale === "C") {
    result = (inputTemp * 9) / 5 + 32;
    result = `${inputTemp} °C is ${result.toFixed(2)} °F`;
  } else {
    result = ((inputTemp - 32) * 5) / 9;
    result = `${inputTemp} °F is ${result.toFixed(2)} °C`;
  }

  document.getElementById("result").innerText = result;
}

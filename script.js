function getResponse() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const response = document.getElementById("botResponse");

  // Oddiy javoblar
  if (input.includes("salom")) {
    response.innerText = "Salom! Qanday yordam bera olaman?";
  } else if (input.includes("isming nima")) {
    response.innerText = "Meni oddiy AI bot deya chaqirishingiz mumkin.";
  } else if (input.includes("qalesan")) {
    response.innerText = "Yaxshi, rahmat! Sizchi?";
  } else {
    response.innerText = "Kechirasiz, bu savolga hali o‘rganmaganman.";
  }
}

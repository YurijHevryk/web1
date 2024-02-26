function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    noButton.style.position = "absolute";
    
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    document.getElementById("question").textContent =
      "Кнопка 'ні' тут по приколу";
      
    document.getElementById("name").style.display = "none";
  }

  if (response === "Yes") {
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    const yesMessage = document.getElementById("question");
    yesMessage.textContent =
      "Вітаю саму ахуєнну дівчину з днем української жінки!!!";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    
    document.getElementsByClassName("image")[0].src =
      "images/dance.gif";

    document.getElementById("yesButton").remove();
  }
}

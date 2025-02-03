document.querySelector(".btn").onclick = function () {
  let cityName = document.querySelector(".input").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid={api link}&units=metric`
  )
    .then((respond) => respond.json())
    .then((data) => {
      let temp = data.main.temp.toFixed(0);
      document.querySelector(".dig").textContent = temp + `º`;
      document.querySelector(".cityName").textContent = data.name;

      if (temp < 10) {
        document.querySelector("img").src = "../imgs/snow.png";
      } else if (temp < 20) {
        document.querySelector("img").src = "../imgs/clouds.png";
      } else if (temp > 20) {
        document.querySelector("img").src = "../imgs/clear.png";
      }
    })
    .catch(() => alert("Please Enter a Correct City Name"));
};

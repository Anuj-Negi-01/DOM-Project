function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  let session = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  document.getElementById("hours").textContent =
    hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").textContent =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").textContent =
    seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("session").textContent = session;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  document.getElementById("date").textContent = now.toLocaleDateString(
    undefined,
    options
  );
}
updateClock();
setInterval(updateClock, 1000);

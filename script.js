dayjs.extend(window.dayjs_plugin_timezone);
dayjs.extend(window.dayjs_plugin_utc);

let timezone = dayjs.tz.guess();



function changeTimezone() {
  timezone = document.querySelector("select").value;
  document.querySelector(".timezone h3").innerHTML = timezone;
}

apply.addEventListener("click", () => {
  changeTimezone();
  MicroModal.close("modal-1");
});

setInterval(() => {
  document.querySelector(".timezone h3").innerHTML = timezone;
  const time = dayjs().tz(timezone).format("HH:mm:ss");
  document.querySelector(".time h1").innerHTML = time;
  const date = dayjs().tz(timezone).format("dddd, D MMMM, YYYY");
  document.querySelector(".date").innerHTML = date;
}, 1000);



MicroModal.init();

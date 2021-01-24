function changeBg() {
  const images = [
    'url("./bg/1.jpg")',
    'url("./bg/2.jpg")',
    'url("./bg/3.jpg")',
    'url("./bg/4.jpg")',
    'url("./bg/5.jpg")',
    'url("./bg/8.jpg")',
  ];
  const section = document.querySelector("section");
  const bg = images[Math.floor(Math.random() * images.length)];
  section.style.backgroundImage = bg;
}
setInterval(changeBg, 4000);

function toogleMode() {
  const html = document.documentElement
  const srcImg = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    html.classList.remove("light")
    srcImg.setAttribute("src", "assets/avatar.png")
  } else {
    html.classList.add("light")
    srcImg.setAttribute("src", "assets/avatar-light.png")
  }
}

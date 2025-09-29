document.addEventListener("DOMContentLoaded", () => {
  const subtitle = document.getElementById("subtitle");
  const text = "Desenvolvedora Front-end | HTML | CSS | JavaScript";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      subtitle.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }

  subtitle.innerHTML = "";
  typeWriter();
});

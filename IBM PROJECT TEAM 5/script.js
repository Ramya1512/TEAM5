function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

function generatePalette() {
  const palette = document.getElementById('palette');
  palette.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const div = document.createElement('div');
    div.className = 'color';
    div.style.background = color;
    div.textContent = color;
    div.onclick = () => navigator.clipboard.writeText(color);
    palette.appendChild(div);
  }
}

generatePalette();

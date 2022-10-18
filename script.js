  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const overlay = document.getElementById('overlay');
  openBtn.onclick = () => {
  overlay.style.display = 'block';
  document.body.style.position = 'fixed';
};
  closeBtn.onclick = () => {
  overlay.style.display = 'none';
  document.body.style.position = 'relative';
};
function close() {
  overlay.style.display = 'none';
  document.body.style.position = 'relative';
}
document.querySelectorAll('.overlay_link').forEach((btn) => {
  btn.onclick = () => { close(); };
});

openBtn.onclick = () => {
  overlay.style.display = 'block';
  document.body.style.position = 'fixed';
};

closeBtn.onclick = () => {
  overlay.style.display = 'none';
  document.body.style.position = 'relative';
};
  function close () {
    overlay.style.display = 'none';
    document.body.style.position = 'relative';
  }
  document.querySelectorAll('.overlay_link').forEach((btn) => {
    btn.onclick = () => { close(); };
  });

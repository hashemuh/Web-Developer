// Show a note instead of a broken image if a screenshot is missing
document.querySelectorAll('figure img').forEach(function (img) {
  function miss() { img.parentElement.classList.add('noimg'); }
  img.addEventListener('error', miss);
  if (img.complete && img.naturalWidth === 0) miss();
});
// Hero listing: the dashed "Website" pill fills in once, shortly after load
setTimeout(function () {
  var b = document.getElementById('webBtn'), n = document.getElementById('webNote');
  if (!b) return;
  b.classList.remove('missing'); b.classList.add('added');
  n.textContent = 'Website added. Customers can see your services and call you in one tap.';
}, 2200);
document.getElementById('yr').textContent = new Date().getFullYear();

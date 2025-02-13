// script.js
document.getElementById('abrirCartaBtn').addEventListener('click', function() {
    document.querySelector('.portada').style.display = 'none';
    document.getElementById('mensajeCarta').style.display = 'block';
  });
  
  document.getElementById('cerrarCartaBtn').addEventListener('click', function() {
    document.querySelector('.portada').style.display = 'block';
    document.getElementById('mensajeCarta').style.display = 'none';
  });
  
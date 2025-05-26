(function() {
  var container = document.getElementById('simulator-container');
  if (!container) return;
  var iframe = document.createElement('iframe');
  iframe.src = 'https://<tu-usuario>.github.io/simulador-hipoteca/';
  iframe.width = '100%';
  iframe.height = '800';
  iframe.style.border = 'none';
  iframe.scrolling = 'no';
  iframe.onload = function() {
    this.style.height = this.contentWindow.document.body.scrollHeight + 'px';
  };
  container.appendChild(iframe);
})();

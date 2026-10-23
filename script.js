(() => {
  const BUTTON_ID = '924L6EDHR8UR8';
  const FALLBACK_LINK = 'https://www.paypal.com/ncp/payment/' + BUTTON_ID;
  const loading = document.getElementById('pp-loading');
  const notice = document.getElementById('notice');
 
  function fallback() {
    loading.remove();
    notice.className = 'show err';
    notice.innerHTML = `Checkout couldn't load here. <a href="${FALLBACK_LINK}" target="_blank" rel="noopener" style="color:#ffd0e5">Continue on PayPal</a>.`;
  }
 
  if (!window.paypal || !window.paypal.HostedButtons) return fallback();
 
  window.paypal.HostedButtons({ hostedButtonId: BUTTON_ID })
    .render('#paypal-container-' + BUTTON_ID)
    .then(() => loading.remove())
    .catch(fallback);
})();
 
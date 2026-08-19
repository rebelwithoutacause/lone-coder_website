(function(){
  var hamburger = document.getElementById('hamburger');
  var navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu){
    hamburger.addEventListener('click', function(){
      var isOpen = navMenu.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navMenu.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var navbar = document.getElementById('navbar');
  if (navbar){
    window.addEventListener('scroll', function(){
      navbar.style.boxShadow = window.scrollY > 8 ? '0 4px 16px rgba(0,0,0,.35)' : 'none';
    });
  }

  var emailBtn = document.getElementById('emailBtn');
  var emailReveal = document.getElementById('emailReveal');
  var EMAIL = 'lonecoder@nsh.one';
  var hideTimer;

  if (emailBtn && emailReveal){
    emailBtn.addEventListener('click', function(){
      if (navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(EMAIL).catch(function(){});
      }
      var copiedLabel = (window.LC_I18N && window.LC_I18N.t('email_copied')) || '(copied)';
      emailReveal.textContent = EMAIL + ' ' + copiedLabel;
      emailReveal.classList.add('visible');
      clearTimeout(hideTimer);
      hideTimer = setTimeout(function(){
        emailReveal.classList.remove('visible');
      }, 2500);
    });
  }

  var inquiryForm = document.getElementById('inquiryForm');
  var formStatus = document.getElementById('formStatus');

  if (inquiryForm && formStatus){
    inquiryForm.addEventListener('submit', function(e){
      e.preventDefault();

      var i18n = window.LC_I18N;
      var tr = function(key, fallback){ return (i18n && i18n.t(key)) || fallback; };

      var honeypot = inquiryForm.querySelector('[name="_gotcha"]');
      if (honeypot && honeypot.value) return;

      if (typeof grecaptcha !== 'undefined' && grecaptcha.getResponse().length === 0){
        formStatus.textContent = tr('form_captcha_required', 'Please confirm the reCAPTCHA before sending.');
        formStatus.className = 'form-status error';
        return;
      }

      formStatus.textContent = tr('form_sending', 'Sending...');
      formStatus.className = 'form-status';

      fetch(inquiryForm.action, {
        method: 'POST',
        body: new FormData(inquiryForm),
        headers: { 'Accept': 'application/json' }
      }).then(function(response){
        if (response.ok){
          formStatus.textContent = tr('form_success', "Thanks — your inquiry has been sent. I'll get back to you soon.");
          formStatus.className = 'form-status success';
          inquiryForm.reset();
        } else {
          formStatus.textContent = tr('form_error', 'Something went wrong — please email me directly instead.');
          formStatus.className = 'form-status error';
        }
        if (typeof grecaptcha !== 'undefined') grecaptcha.reset();
      }).catch(function(){
        formStatus.textContent = tr('form_error', 'Something went wrong — please email me directly instead.');
        formStatus.className = 'form-status error';
        if (typeof grecaptcha !== 'undefined') grecaptcha.reset();
      });
    });
  }
})();

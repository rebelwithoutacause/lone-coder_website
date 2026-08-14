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
  var EMAIL = 'teodor.kostov.qa@gmail.com';
  var hideTimer;

  if (emailBtn && emailReveal){
    emailBtn.addEventListener('click', function(){
      if (navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(EMAIL).catch(function(){});
      }
      emailReveal.textContent = EMAIL + ' (copied)';
      emailReveal.classList.add('visible');
      clearTimeout(hideTimer);
      hideTimer = setTimeout(function(){
        emailReveal.classList.remove('visible');
      }, 2500);
    });
  }
})();

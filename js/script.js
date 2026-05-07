function setActiveNav(button) {
  document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('selected'));
  if (button) button.classList.add('selected');
}

function showView(sectionId) {
  document.querySelectorAll('.view').forEach(v => {
    if (v.id === sectionId) {
      v.classList.remove('hidden');
      v.classList.remove('view-enter');
      void v.offsetWidth;
      v.classList.add('view-enter');
      v.addEventListener('animationend', () => v.classList.remove('view-enter'), { once: true });
    } else {
      v.classList.add('hidden');
      v.classList.remove('view-enter');
    }
  });
}

window.addEventListener('load', () => {
  const aboutBtn = document.getElementById('nav-about-top');
  const projectsBtn = document.getElementById('nav-lte');
  const writingsBtn = document.getElementById('nav-writings');

  if (aboutBtn) {
    aboutBtn.addEventListener('click', () => {
      setActiveNav(aboutBtn);
      showView('right-about');
    });
  }

  if (projectsBtn) {
    projectsBtn.addEventListener('click', () => {
      setActiveNav(projectsBtn);
      showView('right-lte');
    });
  }

  if (writingsBtn) {
    writingsBtn.addEventListener('click', () => {
      setActiveNav(writingsBtn);
      showView('right-writings');
    });
  }

  showView('right-about');
  setActiveNav(aboutBtn);
});

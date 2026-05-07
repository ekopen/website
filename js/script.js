function setActiveNav(button) {
  document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('selected'));
  if (button) button.classList.add('selected');
}

function showView(sectionId) {
  document.querySelectorAll('.view').forEach(v => {
    v.classList.toggle('hidden', v.id !== sectionId);
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

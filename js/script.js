// Simple in-page navigation for single-page layout

function setActiveNav(button) {
  document.querySelectorAll('.nav-pill').forEach(b => b.classList.remove('selected'));
  if (button) button.classList.add('selected');
}

function showRightSection(sectionId) {
  const sections = ['right-about', 'right-lte', 'right-pma', 'right-writings'];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('hidden', id !== sectionId);
  });
}

window.addEventListener('load', () => {
  const aboutTopBtn = document.getElementById('nav-about-top');
  const writingsBtn = document.getElementById('nav-writings');
  const lteBtn = document.getElementById('nav-lte');
  const pmaBtn = document.getElementById('nav-pma');

  // About (landing) -> show initial about section
  if (aboutTopBtn) {
    aboutTopBtn.addEventListener('click', () => {
      setActiveNav(aboutTopBtn);
      showRightSection('right-about');
    });
  }

  // Writings -> show writings section
  if (writingsBtn) {
    writingsBtn.addEventListener('click', () => {
      setActiveNav(writingsBtn);
      showRightSection('right-writings');
    });
  }

  // Live Trading Engine -> show combined section on right
  if (lteBtn) {
    lteBtn.addEventListener('click', () => {
      setActiveNav(lteBtn);
      showRightSection('right-lte');
    });
  }

  // Prediction Market Aggregator -> placeholder content
  if (pmaBtn) {
    pmaBtn.addEventListener('click', () => {
      setActiveNav(pmaBtn);
      showRightSection('right-pma');
    });
  }

  // Initial state: About selected and visible
  showRightSection('right-about');
  setActiveNav(aboutTopBtn);
});


// ===== Tiny router (hash-based): #about or #projects =====
function show(view) {
  const isAbout = view !== 'projects';
  document.getElementById('left-about').classList.toggle('hidden', !isAbout);
  document.getElementById('left-projects').classList.toggle('hidden', isAbout);
  document.getElementById('right-about').classList.toggle('hidden', !isAbout);
  document.getElementById('right-projects').classList.toggle('hidden', isAbout);
}

function route() {
  const hash = location.hash.replace('#','');
  show(hash === 'projects' ? 'projects' : 'about');
}

window.addEventListener('hashchange', route);
window.addEventListener('load', () => {
  route();

  // Project button click
  document.querySelectorAll('.proj-header-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // remove highlight from other buttons
      document.querySelectorAll('.proj-header-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      // update right column
      const title = btn.dataset.title || '';
      const desc  = btn.dataset.desc  || '';
      const github = btn.dataset.github || '';

      document.getElementById('p-title').textContent = title;
      document.getElementById('p-desc').innerHTML = desc;

        const githubLink = document.getElementById('p-github');
        if (github) {
        githubLink.href = github;
        githubLink.classList.remove('hidden');
        } else {
        githubLink.href = "#";              // Clear any old href
        githubLink.classList.add('hidden'); // Hide icon
        }


      // hide iframe wrapper since we embed iframes in desc now
      document.getElementById('proj-frame-wrap').style.display = 'none';
    });
  });

  // Default load: show Overview when Projects first opens
  if (location.hash === '#projects') {
    const first = document.querySelector('.proj-btn');
    if (first) first.click();
  }
});


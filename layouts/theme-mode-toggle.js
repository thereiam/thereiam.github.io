// Check localStorage for theme preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  // Change the link to load dark-mode.css
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/assets/css/dark-mode.css';
  document.head.appendChild(link);
}

// Add a button to toggle themes
const toggleButton = document.createElement('button');
toggleButton.innerText = "Toggle Dark Mode";
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px';
toggleButton.style.backgroundColor = '#007bff';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  if (document.body.classList.contains('dark-theme')) {
    document.body.classList.remove('dark-theme');
    // Remove the dark-mode.css link
    let darkModeLink = document.querySelector('link[href="/assets/css/dark-mode.css"]');
    if (darkModeLink) darkModeLink.remove();
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.add('dark-theme');
    // Load dark-mode.css
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/css/dark-mode.css';
    document.head.appendChild(link);
    localStorage.setItem('theme', 'dark');
  }
});

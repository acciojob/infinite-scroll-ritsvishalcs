const list = document.getElementById('infi-list');

let itemCount = 0;

// Function to add items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    itemCount++;
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Initial 10 items
addItems(10);

// Infinite scroll detection
window.addEventListener('scroll', () => {
  // Check if scrolled to bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addItems(2);
  }
});


//your code here!
const list = document.getElementById('infinite-list');

// Helper to create and append list items
let itemCount = 0;
function addListItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    itemCount++;
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Initial 10 items
addListItems(10);

// Scroll event to trigger infinite loading
list.addEventListener('scroll', function () {
  // Check if we've scrolled to the bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addListItems(2); // Add 2 more items
  }
});


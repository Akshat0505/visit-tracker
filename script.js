// Get data from localStorage
let visits = JSON.parse(localStorage.getItem('visits')) || [];
let count = visits.length;

// Add new timestamp
const now = new Date().toLocaleString();
visits.push(now);

// Save back to localStorage
localStorage.setItem('visits', JSON.stringify(visits));

// Update UI
document.getElementById('visit-count').textContent = visits.length;

const list = document.getElementById('timestamp-list');
visits.slice().reverse().forEach(timestamp => {
  const li = document.createElement('li');
  li.textContent = timestamp;
  list.appendChild(li);
});

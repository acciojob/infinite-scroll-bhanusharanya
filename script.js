//your code here!

document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('infi-list');
  let itemCount = 10;

  // Function to add list items
  function addListItems(count) {
    for (let i = 0; i < count; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Item ${itemCount + 1}`;
      list.appendChild(listItem);
      itemCount++;
    }
  }

  // Initial load of 10 items
  addListItems(10);

  // Function to handle scroll event
  function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      addListItems(2);
    }
  }

  // Attach scroll event listener
  window.addEventListener('scroll', handleScroll);
});

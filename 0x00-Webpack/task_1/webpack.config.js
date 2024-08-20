let count = 0;
function updateCounter() {
    count += 1;
    document.getElementById('count').textContent = `${count} clicks on the button`;
}
const debouncedUpdateCounter = _.debounce(updateCounter, 300); 
document.getElementById('myButton').addEventListener('click', debouncedUpdateCounter);

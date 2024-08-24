// Function to update the clock display
function updateClock() {
    // Get the current date and time
    const now = new Date();

    // Extract hours, minutes, seconds, and date components
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = now.toLocaleDateString('en-US', { weekday: 'long' });
    let month = now.toLocaleDateString('en-US', { month: 'long' });
    let year = now.getFullYear();

    // Format hours, minutes, and seconds with leading zeros if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update the content of the time elements
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // Update the content of the date elements
    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
    document.getElementById('year').textContent = year;
}

// Call the updateClock function every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately on page load
updateClock();

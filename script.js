// Set the launch date (adjust this to your desired launch date)
const launchDate = new Date('August 18, 2025 00:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = launchDate - now;
    
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result
    document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
    
    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "Website is now live!";
    }
}, 1000);

// Email form submission
document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // This is where you would typically send the email to your server or service
    // For now, we'll just show an alert
    alert(`Thank you! We'll notify ${email} when the website launches.`);
    
    // Reset the form
    this.reset();
});

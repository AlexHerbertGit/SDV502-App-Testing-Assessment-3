function calculateFare(name, destination, seats) {
    const pricePerSeat = 10;

    // Validate name and destination are strings without numbers
    const isStringValid = (value) => typeof value === "string" && isNaN(value);

    // Check if inputs are valid
    if (!isStringValid(name) || !isStringValid(destination) || !seats || isNaN(seats) || seats <= 0 || seats > 30) {
        throw new Error("Please fill in all fields correctly.");
    }

    return seats * pricePerSeat;
}

// Event listener for the form
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bookingForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form values
            const name = document.getElementById("name").value;
            const destination = document.getElementById("destination").value;
            const seats = parseInt(document.getElementById("seats").value, 10);

            try {
                // Calculate fare
                const totalFare = calculateFare(name, destination, seats);

                // Display confirmation message
                document.getElementById("message").innerText = 
                    `Booking confirmed for ${name} to ${destination}. Seats: ${seats}. Total fare: $${totalFare}.`;
            } catch (error) {
                // Display error message
                document.getElementById("message").innerText = error.message;
            }
        });
    }
});

// Export the function for testing
module.exports = { calculateFare };
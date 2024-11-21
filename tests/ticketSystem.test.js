const { calculateFare } = require('../src/script');

beforeEach(() => {
    // Set up a mock DOM structure
    document.body.innerHTML = `
        <form id="bookingForm">
            <input type="text" id="name" />
            <input type="text" id="destination" />
            <input type="number" id="seats" />
            <p id="message"></p>
        </form>
    `;
});

describe('Bus Ticket Booking System Tests', () => {
    // Test 1 - Booked a ticket for a valid destination
    test('Booking a ticket for a valid destination', () => {
        const name = 'Alice';
        const destination = 'Nelson';
        const seats = 1;

        const result = calculateFare(name, destination, seats);
        expect(result).toBe(10);
    });

    // Test 2 - Verify seat availability with valid input
    test('Verify seat availability with valid input', () => {
        const name = 'Fred';
        const destination = 'Motueka';
        const seats = 3;

        expect(() => calculateFare(name, destination, seats)).not.toThrow();
    });

    // Test 3 - Verifying seat availability with invalid input
    test('Verify seat availability with invalid input', () => {
        const name = 'George';
        const destination = 'Blenheim';
        const seats = 0;

        expect(() => calculateFare(name, destination, seats)).toThrow("Please fill in all fields correctly.");
    });

    // Test 4 - Test error handling empty name input
    test("Error handling of empty name input", () => {
        const name = '';
        const destination = 'City Centre';
        const seats = 2;

        expect(() => calculateFare(name, destination, seats)).toThrow("Please fill in all fields correctly.");
    });

    // Test 5 - Test error handling empty destination input
    test("Error handling of empty destination input", () => {
        const name = 'Frank';
        const destination = '';
        const seats = 3;

        expect(() => calculateFare(name, destination, seats)).toThrow("Please fill in all fields correctly.");
    });

    // Test 6 - Test error handling empty seat input
    test("Error handling of empty seat input", () => {
        const name = 'Amy';
        const destination = 'Richmond';
        const seats = '';

        expect(() => calculateFare(name, destination, seats)).toThrow("Please fill in all fields correctly.");
    });

    //Test 7 - Error handling when numbers are entered where strings are expected.
    test('Error handling when a number is entered as a name input', () => {
        const name = 1234;
        const destination = 'Nelson';
        const seats = 1;

        expect(() => calculateFare(name, destination, seats)).toThrow("Please fill in all fields correctly."); 
    });

    //Test 8 - Error handling when a number is entered into the destination input field
    test("Error handling when a number is entered as a destination input", () => {
        const name = 'Frank';
        const destination = 4567;
        const seats = 3;

        expect(() => calculateFare(name, destination, seats)).toThrow("Please fill in all fields correctly.");
    });

    //Test 9 - Error handling when a string is entered into seats input field that should require numbers
    test("Error handling when a string is entered into seats input field", () => {
        const name = 'Alan';
        const destination = 'Nelson';
        const seats = "two";

        expect(() => calculateFare(name, destination, seats)).toThrow("Please fill in all fields correctly.");
    });

    //Test 10 - Error handling with a large number of seats submitted
    test("Error handling with a large number of seats submitted", () => {
        const name = 'Tyler';
        const destination = 'Stoke';
        const seats = 10000;

        expect(() => calculateFare(name, destination, seats)).toThrow("Please fill in all fields correctly.");
    });
});
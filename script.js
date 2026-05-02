// This function MUST be defined BEFORE the export at the bottom
function calculate(p, r, t) {
    return (Number(p) * Number(r) * Number(t)) / 100;
}

function calculateInterest() {
    // Task 2: Convert to Numbers (1 point)
    const principal = document.getElementById('principal') ? Number(document.getElementById('principal').value) : 0;
    const rate = document.getElementById('rate') ? Number(document.getElementById('rate').value) : 0;
    const years = document.getElementById('years') ? Number(document.getElementById('years').value) : 0;

    // Task 2: Prevent TypeErrors (1 point)
    const resultDisplay = document.getElementById('result');
    if (!resultDisplay) {
        return; 
    }

    const interest = calculate(principal, rate, years);
    resultDisplay.innerText = `Total Interest: ${interest}`;
}

// THIS PART FIXES YOUR ERROR:
// It checks if we are in a testing environment (Node) and exports the function
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculate };
}

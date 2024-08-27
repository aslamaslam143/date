document.getElementById('submit').addEventListener('click', function() {
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);
    const result = document.getElementById('result');
    const differenceText = document.getElementById('difference');

    // Validate if dates are chosen
    if (!document.getElementById('start-date').value || !document.getElementById('end-date').value) {
        result.style.opacity = 1;
        result.innerText = "Please select both start and end dates.";
        return;
    }

    // Calculate the difference in milliseconds
    const diffTime = endDate - startDate;

    // Calculate the number of days, taking negative values for past dates
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Update the result display with the accurate difference
    result.style.opacity = 1;

    if (diffDays === 0) {
        result.innerText = "The dates are the same. Difference is 0 days.";
    } else if (diffDays < 0) {
        result.innerText = `The start date is later. Difference is ${Math.abs(diffDays)} days earlier.`;
    } else {
        result.innerText = `Difference between the two dates is ${diffDays} days.`;
    }
});
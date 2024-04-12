document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('incomeTaxForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Fetch values of input fields
        const grossAnnualIncome = parseFloat(document.getElementById('grossAnnualIncome').value)||0;
        const extraIncome = parseFloat(document.getElementById('extraIncome').value)||0;
        const ageGroup = document.getElementById('ageGroup').value;
        const totalApplicableDeductions = parseFloat(document.getElementById('totalApplicableDeductions').value)||0;
        

        // Calculate total income after deductions
        const totalIncome = grossAnnualIncome + extraIncome - totalApplicableDeductions;
        
        let tax = 0;
        if (totalIncome > 8) {
            if (ageGroup === 'below_40') {
                tax = 0.3 * (totalIncome - 8);
            } else if (ageGroup === 'above_40 & below_60') {
                tax = 0.4 * (totalIncome - 8);
            } else if (ageGroup === 'above 60 ') {
                tax = 0.1 * (totalIncome - 8);
            }
        }
        let actualIncome = totalIncome-tax;
     // Insert the calculated tax into the modal body
     document.getElementById('pot').innerHTML = `Your Overall Income will be ${actualIncome} lakhs <br>after deducting tax of ${tax.toFixed(2)}lakhs`;
        
     // Show the modal
     var myModal = new bootstrap.Modal(document.getElementById('taxModal'));
     myModal.show();
        // Add your logic to display the tax in the modal or elsewhere
    });
});






document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const errorIcon = this.nextElementSibling;
            if (!isNaN(this.value) && this.value.trim() !== '' && parseFloat(this.value) >= 0) {
                errorIcon.style.display = 'none';
            } else {
                errorIcon.style.display = 'block';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('incomeTaxForm');
    form.addEventListener('submit', function(event) {
        const ageGroup = document.getElementById('ageGroup');
        const errorIcon = ageGroup.nextElementSibling;
        if (ageGroup.value === '') {
            event.preventDefault();
            errorIcon.style.display = 'inline-block';
        } else {
            errorIcon.style.display = 'none';
        }
    });
});
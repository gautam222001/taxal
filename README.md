# Income Tax Calculator
![Screenshot 2024-04-12 190214](https://github.com/gautam222001/taxal/assets/166819056/364168cf-c843-42f1-a58b-94c82b827d42)
![Screenshot 2024-04-12 185939](https://github.com/gautam222001/taxal/assets/166819056/99561176-acc7-4343-b68b-10bc3d4eb181)
![Screenshot 2024-04-12 190112](https://github.com/gautam222001/taxal/assets/166819056/c1828eb7-6099-47b2-ae91-3cd19c8d9cde)
![Screenshot 2024-04-12 190137](https://github.com/gautam222001/taxal/assets/166819056/25df03e5-0300-4b9b-8bbd-46ed2561471b)

This is a simple income tax calculator web application that calculates tax based on the provided income, extra income, age group, and applicable deductions.

## Features

- Input fields for gross annual income, extra income, age group, and total applicable deductions.
- Calculation of tax based on provided inputs and age group.
- Error handling for invalid input values.
- Display of tax calculation result in a modal.

## Usage

1. Enter the gross annual income, extra income, age group, and total applicable deductions in the respective input fields.
2. Click the "Submit" button to calculate the tax.
3. View the calculated tax amount in the modal.

## Tax Calculation Formula

- Overall income (after deductions) under 8 Lakhs is not taxed.
- Income over 8 Lakhs is taxed at:
  - 30% for people with age < 40
  - 40% for people with age ≥ 40 but < 60
  - 10% for people with age ≥ 60

## Technologies Used

- HTML
- CSS (Bootstrap)
- JavaScript (Vanilla JS)

Bootstrap library is included locally using the following files:
- `bootstrap.min.css` (Bootstrap CSS file)
- `popper.min.js` (Popper.js for Bootstrap)
- `bootstrap.min.js` (Bootstrap JavaScript file)

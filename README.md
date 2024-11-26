# Mortgage Single Repayment Savings Calculator

## Description

This app will allow the user to fill in a form with details of their monthly mortgage (Loan Amount, Annual Interest Rate (APR), Loan Term), alongside a sole overpayment amount.

This will then calculate the amount of money in interest saved for the remainder of your mortgage based on this one payment.

**Note:** For now, this will only calculate as if the APR was consistent for the entire duration of the total term and WILL NOT take into account any potential changes in interest rate that would realistically occur (e.g. moving to a Standard Variable Rate or fluctuations in Tracker Mortgages).

---

## TODO

#### utils/calculateSavings - Make it so that the monthly payment for postOverpaymentTable is the same as preOverpaymentTable
- **ISSUE**: Monthly payments are currently being calculated relative to the balance. The monthly payments need to be the same for the balance calculated before and after the payment
- **FIX**: Add an optional parameter to calculateMortgagePayments to override the monthly payment amount, then just reduce the final payment

#### App.jsx - Create form allowing user to fill in their details and return calculation to them

#### utils/numToGBP - Create a function that takes the balance and returns it as a GBP string
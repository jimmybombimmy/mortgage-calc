export default function calculateMortgagePayments(
  loanAmount,
  annualInterestRate,
  loanTermMonths,
  monthlyPayment
) {
  const monthlyInterestRate = annualInterestRate / 12 / 100; // Convert annual rate to monthly decimal

  // Calculate fixed monthly payment (M) if not already provided
  let payment;

  if (monthlyPayment) {
    payment = monthlyPayment;
  } else {
    payment =
      (loanAmount *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, loanTermMonths))) /
      (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1);
  }

  let remainingBalance = loanAmount;
  const paymentSchedule = [];

  for (let month = 1; month <= loanTermMonths; month++) {
    const interestPayment = remainingBalance * monthlyInterestRate;
    const capitalPayment = payment - interestPayment;
    remainingBalance -= capitalPayment;

    // Push the details for this month
    paymentSchedule.push({
      month,
      capitalPayment: parseFloat(capitalPayment.toFixed(2)),
      interestPayment: parseFloat(interestPayment.toFixed(2)),
      totalPayment: parseFloat(payment.toFixed(2)),
      remainingBalance: parseFloat(remainingBalance.toFixed(2)),
    });

    // Prevent negative balance due to rounding
    if (remainingBalance < 0) remainingBalance = 0;
  }

  return paymentSchedule;
}

// // Example usage
// const loanAmount = 250000; // Loan amount in GBP
// const annualInterestRate = 6; // Annual interest rate in percent
// const loanTermMonths = 30; // Loan term in years

// const payments = calculateMortgagePayments(loanAmount, annualInterestRate, loanTermMonthsYears);

// // Log each month's payment schedule
// console.log(payments);

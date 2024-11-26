import calculateMortgagePayments from "./calculateMortgagePayment"

export default function calculateSavings(mortgageInfo, overpayment) {


  const preOverpaymentTable = calculateMortgagePayments(mortgageInfo.loanAmount, mortgageInfo.annualInterestRate, mortgageInfo.loanTermYears)

  const postOverpaymentTable = calculateMortgagePayments(mortgageInfo.loanAmount - overpayment, mortgageInfo.annualInterestRate, mortgageInfo.loanTermYears)
}
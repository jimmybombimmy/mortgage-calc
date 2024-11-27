import calculateMortgagePayments from "./calculateMortgagePayment"

export default function calculateSavings(mortgageInfo, overpayment) {
  const preOverpaymentTable = calculateMortgagePayments(mortgageInfo.loanAmount, mortgageInfo.annualInterestRate, mortgageInfo.loanTermYears)

  const newLoanAmount = mortgageInfo.loanAmount - overpayment
  const preOverpaymentMonthlyPayment = preOverpaymentTable[0].totalPayment

  const postOverpaymentTable = calculateMortgagePayments(newLoanAmount, mortgageInfo.annualInterestRate, mortgageInfo.loanTermYears, preOverpaymentMonthlyPayment)

  const savingsCalculated = []
  let totalInterestSaved = 0

  for (let i = 0; i < preOverpaymentTable.length; i++) {
    const interestSaved = preOverpaymentTable[i].interestPayment - postOverpaymentTable[i].interestPayment
    totalInterestSaved += interestSaved
    const savingsData = {
      month: i + 1,
      interestSaved,
      savingsAccumulator: totalInterestSaved
    }

    savingsCalculated.push(savingsData)
  }

  console.log(savingsCalculated)
  console.log(totalInterestSaved)

  return savingsCalculated
}
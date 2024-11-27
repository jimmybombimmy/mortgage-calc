import "./App.css";
import calculateMortgagePayments from "./utils/calculateMortgagePayment";
import calculateSavings from "./utils/calculateSavings";

export default function App() {
  const mortgageDetails = {
    loanAmount: 200000,
    annualInterestRate: 5,
    loanTermYears: 30,
  };

  const overpayment = 100

  calculateSavings(mortgageDetails, overpayment)

  return (
    <main>
      <h1>Mortgage Calulcator</h1>
      <h2></h2>
      <form action="">
        <label>
          Hello
          <input type="text" />
        </label>
      </form>
    </main>
  );
}

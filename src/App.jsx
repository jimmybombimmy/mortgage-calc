import "./App.css";
import calculateMortgagePayments from "./utils/calculateMortgagePayment";

//todo is currently

function App() {
  const mortgageDetails = {
    loanAmount: 200000,
    annualInterestRate: 5,
    loanTermYears: 300,
  };

  const overpayment = 50



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

export default App;

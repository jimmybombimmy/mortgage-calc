import "./App.css";
import calculateSavings from "./utils/calculateSavings";
import { useState } from "react";

import convertNumToGBP from "./utils/convertNumToGBP";
import convertGBPToNum from "./utils/convertGBPToNum";

export default function App() {
  let [amount, setAmount] = useState("£200,000");
  let [interest, setInterest] = useState(5);
  let [term, setTerm] = useState([25, 0]);
  let [overpayment, setOverpayment] = useState("£100");

  const handleSubmit = (e) => {
    const mortgageDetails = {
      loanAmount: convertGBPToNum(amount),
      annualInterestRate: interest,
      loanTermMonths: (Number(term[0] * 12) + Number(term[1])),
    };
    e.preventDefault();
    calculateSavings(mortgageDetails, convertGBPToNum(overpayment));
  };

  return (
    <main>
      <h1>Mortgage Calulcator</h1>
      <h2></h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Loan amount - </label>
        <input
          type="text"
          name="amount"
          value={amount}
          onChange={(e) => convertNumToGBP(e.target.value, setAmount)}
        />
        <br />
        <label htmlFor="interest">Interest Rate (APR) - </label>
        <input
          type="number"
          name="interest"
          defaultValue={interest}
          step="0.1"
        />
        %
        <br />
        Term - 
        <label htmlFor="termYears"> Years: </label>
        <input type="number" name="termYears" defaultValue={term[0]} onChange={(e) => setTerm([e.target.value, term[1]])} />
        <label htmlFor="termMonths"> Months: </label>
        <input type="number" name="termMonths" defaultValue={term[1]} onChange={(e) => setTerm([term[0], e.target.value])}/>
        <br />
        <label htmlFor="overpayment">Overpayment amount - </label>
        <input
          type="text"
          name="overpayment"
          value={overpayment}
          onChange={(e) => convertNumToGBP(e.target.value, setOverpayment)}
        />
        <br />
        <input type="submit" />
      </form>
    </main>
  );
}

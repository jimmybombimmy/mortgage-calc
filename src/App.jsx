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
      loanTermMonths: Number(term[0] * 12) + Number(term[1]),
    };
    e.preventDefault();
    calculateSavings(mortgageDetails, convertGBPToNum(overpayment));
  };

  return (
    <main>
      <h1>Mortgage Overpayment Savings Calulcator</h1>
      <h2></h2>
      <form onSubmit={handleSubmit}>
        <div className="label-inner">
          <label htmlFor="amount">
            <strong>Loan amount</strong> -{" "}
          </label>
          <input
            type="text"
            name="amount"
            value={amount}
            onChange={(e) => convertNumToGBP(e.target.value, setAmount)}
          />
        </div>
        <br />
        <div className="label-inner">
          <label htmlFor="interest">
            <strong>Interest Rate (APR %) </strong> -{" "}
          </label>
          <input
            type="number"
            name="interest"
            defaultValue={interest}
            step="0.1"
          />
        </div>
        <br />
        <p className="term-title">
          <strong>Term</strong> -{" "}
        </p>
        <div className="term-inner">
          <label htmlFor="termYears"> Years: </label>
          <input
            type="number"
            name="termYears"
            defaultValue={term[0]}
            onChange={(e) => setTerm([e.target.value, term[1]])}
          />
        </div>
        <div className="term-inner">
          <label htmlFor="termMonths"> Months: </label>
          <input
            type="number"
            name="termMonths"
            defaultValue={term[1]}
            onChange={(e) => setTerm([term[0], e.target.value])}
          />
        </div>
        <div className="label-inner">
          <label htmlFor="overpayment">
            <strong>Overpayment amount</strong> -{" "}
          </label>
          <input
            type="text"
            name="overpayment"
            value={overpayment}
            onChange={(e) => convertNumToGBP(e.target.value, setOverpayment)}
          />
        </div>
        <br />
        <button className="form-button" type="submit">Submit</button>
      </form>
    </main>
  );
}

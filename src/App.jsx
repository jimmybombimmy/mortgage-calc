import "./App.css";
import calculateSavings from "./utils/calculateSavings";
import { useState } from "react";

import convertNumToGBP from "./utils/convertNumToGBP";

export default function App() {
  let [amount, setAmount] = useState("£200,000")
  let [overpayment, setOverpayment] = useState("£100")

  // const mortgageDetails = {
  //   loanAmount: 200000,
  //   annualInterestRate: 5,
  //   loanTermYears: 30,
  // };

  // const overpaymentAmount = 100;


  // calculateSavings(mortgageDetails, overpaymentAmount);

  return (
    <main>
      <h1>Mortgage Calulcator</h1>
      <h2></h2>
      <form action="">
        <label htmlFor="amount">Loan amount - </label>
        <input type="text" name="amount" value={amount} onChange={(e) => convertNumToGBP(e.target.value, setAmount)} />
        <br />
        <label htmlFor="interest">Interest Rate (APR) - </label>
        <input type="number" name="interest" defaultValue={5} step="0.1"/>
        %
        <br />
        <label htmlFor="term">Term in Years - </label>
        <input type="number" name="term" defaultValue={5}/>
        <br />
        <label htmlFor="overpayment">Overpayment amount - </label>
        <input type="text" name="overpayment" value={overpayment} onChange={(e) => convertNumToGBP(e.target.value, setOverpayment)} />
      </form>
    </main>
  );
}

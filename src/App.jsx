import "./App.css";
import calculateSavings from "./utils/calculateSavings";
import Graph from "./Graph";
import { useState } from "react";

import convertNumToGBP from "./utils/convertNumToGBP";
import convertGBPToNum from "./utils/convertGBPToNum";

export default function App() {
  let [amount, setAmount] = useState("£200,000");
  let [interest, setInterest] = useState(5);
  let [term, setTerm] = useState([25, 0]);
  let [singleOverpayment, setSingleOverpayment] = useState("£100");
  let [monthlyOverpayment, setMonthlyOverpayment] = useState("£50")
  let [totalSavings, setTotalSavings] = useState("")
  let [submittedDetails, setSubmittedDetails] = useState(undefined)

  const handleSubmit = (e) => {
    const mortgageDetails = {
      loanAmount: convertGBPToNum(amount),
      annualInterestRate: interest,
      loanTermMonths: Number(term[0] * 12) + Number(term[1]),
    };
    e.preventDefault();

    const savings = calculateSavings(mortgageDetails, convertGBPToNum(singleOverpayment), convertGBPToNum(monthlyOverpayment));
    setTotalSavings("£" + savings.totalInterestSaved)

    setSubmittedDetails({...mortgageDetails, singleOverpayment, monthlyOverpayment, savings})
  };

  return (
    <main>
      <section className="main-left">
      <h1>Mortgage Overpayment Savings Calculator</h1>
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
            onChange={(e) => setInterest(e.target.value)}
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
          <label htmlFor="singleOverpayment">
            <strong>Single Overpayment amount</strong> -{" "}
          </label>
          <input
            type="text"
            name="singleOverpayment"
            value={singleOverpayment}
            onChange={(e) => convertNumToGBP(e.target.value, setSingleOverpayment)}
          />
        </div>
        <div className="label-inner">
          <label htmlFor="singleOverpayment">
            <strong>Monthly Overpayment amount</strong> -{" "}
          </label>
          <input
            type="text"
            name="singleOverpayment"
            value={monthlyOverpayment}
            onChange={(e) => convertNumToGBP(e.target.value, setMonthlyOverpayment)}
          />
        </div>
        <br />
        <button className="form-button" type="submit">Submit</button>
      </form>
      </section>
      <section className="main-right">
      
      {submittedDetails !== undefined ? (
        <div className="mortgage-details">
        <h2>Mortgage Details</h2>
        <p>Original Balance: {amount}</p>
        <p>Single Overpayment amount: {singleOverpayment}</p>
        <p>Monthly Overpayment amount: {monthlyOverpayment}</p>
        <p>New Balance: {  convertNumToGBP(String(convertGBPToNum(amount) - convertGBPToNum(singleOverpayment)))}</p>
        <p>Total Term: {term[0]} Years, {term[1]} Months</p>
        <p>Interest: (APR) {interest}%</p>
        <p>Monthly Payment: {"£" + submittedDetails.savings.monthlyPayment}</p>
        </div>
    ) : (<></>)}
    <h1>Total Savings: {totalSavings}</h1>
    {submittedDetails !== undefined ? (<Graph data={submittedDetails}/>) : (<p>No data</p>)}
    </section>
    </main>
  );
}

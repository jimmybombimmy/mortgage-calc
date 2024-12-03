// import { Chart } from "chart.js";
import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";
import { Line } from "react-chartjs-2";
import { useState } from "react";

export default function Graph({ data }) {
  const [graphSwitch, setGraphSwitch] = useState(true);

  let preNumbers = [];
  let postNumbers = [];
  let monthlySavings = [];
  let labels = [];

  function handleGraphSwitch() {
    setGraphSwitch(!graphSwitch)
  }

  data.savings.postOverpaymentTable.map((d, i) => {
    // --alternative code with interest payment--
    // preNumbers.push(
    //   data.savings.preOverpaymentTable[i].interestPayment +
    //     (i > 0
    //       ? data.savings.preOverpaymentTable[i].interestPayment +
    //         preNumbers[i - 1]
    //       : 0)
    // );
    // postNumbers.push(
    //   d.interestPayment +
    //     (i > 0
    //       ? data.savings.postOverpaymentTable[i].interestPayment +
    //         postNumbers[i - 1]
    //       : 0)
    // );

    // --alternative code with remaining balance--
    preNumbers.push(data.savings.preOverpaymentTable[i].remainingBalance);
    postNumbers.push(d.remainingBalance < 0 ? 0 : d.remainingBalance);

    monthlySavings.push(data.savings.savingsCalculated[i].savingsAccumulator);
    labels.push(i);
  });

  return (
    <section onClick={handleGraphSwitch}>
      {graphSwitch ? (
        <Line
          datasetIdKey="id"
          data={{
            labels,
            datasets: [
              {
                id: 1,
                label: "Before Overpayment",
                data: preNumbers,
              },
              {
                id: 2,
                label: "After Overpayment",
                data: postNumbers,
              },
            ],
          }}
        />
      ) : (
        <Line
          datasetIdKey="id"
          data={{
            labels,
            datasets: [{ id: 3, label: "Total Savings", data: monthlySavings }],
          }}
        />
      )}
    </section>
  );
}

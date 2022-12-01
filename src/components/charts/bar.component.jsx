import React from "react";
import { BarChart, Bar, Tooltip } from "recharts";

const BarComponent = () => {
  var data = [
    {
      WH: 1,
      Date: "7-oct",
      "Start Inv": 345,
      "Bi weekly Inv Update": 234,
      SKU1: 3454,
      SKU2: 4734,
      SKU3: 2479,
      SKU4: 2235,
      SKU5: 435,
    },
    {
      WH: 1,
      Date: "14-oct",
      "Start Inv": 345,
      "Bi weekly Inv Update": 234,
      SKU1: 3454,
      SKU2: 4734,
      SKU3: 2479,
      SKU4: 2235,
      SKU5: 2235,
    },
    {
      WH: 1,
      Date: "14-oct",
      "Start Inv": 345,
      "Bi weekly Inv Update": 234,
      SKU1: 3454,
      SKU2: 4734,
      SKU3: 2479,
      SKU4: 2235,
      SKU5: 545,
    },
    {
      WH: 1,
      Date: "21-oct",
      "Start Inv": 345,
      "Bi weekly Inv Update": 234,
      SKU1: 3454,
      SKU2: 4734,
      SKU3: 2479,
      SKU4: 2235,
      SKU5: 1035,
    },
    {
      WH: 1,
      Date: "28-oct",
      "Start Inv": 345,
      "Bi weekly Inv Update": 234,
      SKU1: 3454,
      SKU2: 4734,
      SKU3: 2479,
      SKU4: 2235,
      SKU5: 1235,
    },
    {
      WH: 1,
      Date: "4-Nov",
      "Start Inv": 345,
      "Bi weekly Inv Update": 234,
      SKU1: 3454,
      SKU2: 4734,
      SKU3: 2479,
      SKU4: 2235,
      SKU5: 2035,
    },
    {
      WH: 1,
      Date: "11-Nov",
      "Start Inv": 345,
      "Bi weekly Inv Update": 234,
      SKU1: 3454,
      SKU2: 4734,
      SKU3: 2479,
      SKU4: 2235,
      SKU5: 2235,
    },
    {
      WH: 1,
      Date: "18-oct",
      "Start Inv": 345,
      "Bi weekly Inv Update": 234,
      SKU1: 3454,
      SKU2: 4734,
      SKU3: 2479,
      SKU4: 2235,
      SKU5: 935,
    },
  ];
  return (
    <>
      <div className="w-full hidden xl:block">
        <BarChart
          width={400}
          height={100}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Tooltip />
          <Bar barSize={30} dataKey="SKU5" fill="#1a1aff" />
        </BarChart>
      </div>
      <div className="w-full md:block xl:hidden">
        <BarChart
          width={300}
          height={100}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Tooltip />
          <Bar barSize={30} dataKey="SKU5" fill="#1a1aff" />
        </BarChart>
      </div>
      <div className="w-full sm:block md:hidden">
        <BarChart
          width={200}
          height={100}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Tooltip />
          <Bar barSize={30} dataKey="SKU5" fill="#1a1aff" />
        </BarChart>
      </div>
    </>
  );
};

export default BarComponent;

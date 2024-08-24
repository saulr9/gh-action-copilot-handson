"use client";
import { formatToMoney } from "@/lib/utils";
import { Button } from "../ui/button";
import { columns, Transaction } from "./columns";
import { DataTable } from "./data-table";

function getData(): Transaction[] {
  return [
    {
      id: "1",
      date: "2024-07-31",
      description: "Salary Deposit",
      amount: formatToMoney(+4000),
      balance: formatToMoney(7700),
    },
    {
      id: "2",
      date: "2024-08-01",
      description: "Payment Kids School",
      amount: formatToMoney(-1000),
      balance: formatToMoney(6700),
    },
    {
      id: "3",
      date: "2024-08-07",
      description: "Payment Rent",
      amount: formatToMoney(-1000),
      balance: formatToMoney(5700),
    },
    {
      id: "4",
      date: "2024-08-08",
      description: "Payment Car Loan",
      amount: formatToMoney(-250),
      balance: formatToMoney(5450),
    },
    {
      id: "5",
      date: "2024-08-11",
      description: "Payment Credit Card",
      amount: formatToMoney(-450),
      balance: formatToMoney(5000),
    },
    {
      id: "6",
      date: "2024-08-14",
      description: "Payment Groceries",
      amount: formatToMoney(-100),
      balance: formatToMoney(4900),
    },
  ].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

const TransactionHistory = () => {
  const data = getData();
  return (
    <>
      <h2 className="text-xl font-bold text-left mb-2">Latest Transactions</h2>
      <div className="bg-white p-4">
        <DataTable columns={columns} data={data} />
        <div className="flex justify-center">
          <Button>View All Transactions</Button>
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;

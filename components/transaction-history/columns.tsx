import { ColumnDef } from "@tanstack/react-table";

export type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number | string;
  balance: number | string;
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "date",
    header: "Transaction Date",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "balance",
    header: "Balance",
  },
];

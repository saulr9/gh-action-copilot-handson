import AccountCards from "@/components/account-cards/AccountCards";
import Greeting from "@/components/greeting/Greeting";
import Navbar from "@/components/navbar/Navbar";
import TransactionHistory from "@/components/transaction-history/TransactionHistory";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container my-8">
        <Greeting name="Jhon" />
        <AccountCards />
        <TransactionHistory />
      </div>
    </main>
  );
}

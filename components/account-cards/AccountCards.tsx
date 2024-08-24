import { formatToMoney } from "@/lib/utils";
import { CircleDollarSign, CreditCard, HeartHandshake } from "lucide-react";
import Card from "../card/Card";

const AccountCards = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <Card
        title="Current Account"
        amount={formatToMoney(4900)}
        icon={<CircleDollarSign color="#5a6fe8" size={36} />}
      />
      <Card
        title="Saving Account"
        amount={formatToMoney(27000)}
        icon={<HeartHandshake color="#1cc31d" size={36} />}
      />
      <Card
        title="Credit Account"
        amount={formatToMoney(2000)}
        icon={<CreditCard color="#fc5621" size={36} />}
      />
    </div>
  );
};

export default AccountCards;

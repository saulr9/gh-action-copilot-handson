interface CardProps {
  title: string;
  amount: number | string;
  icon: React.ReactNode;
}
const Card = ({ title, amount, icon }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="flex justify-center items-center gap-4">
        {icon}
        <div>
          <span className="text-sm text-gray-500">{title}</span>
          <p className="text-3xl font-bold">{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

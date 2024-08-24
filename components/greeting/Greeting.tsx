interface GreetingProps {
  name: string;
}
const Greeting = (props: GreetingProps) => {
  const { name } = props;
  return (
    <h2 className="text-2xl font-bold text-left mb-8">
      Hello {name}, Welcome back to Online Banking!
    </h2>
  );
};

export default Greeting;

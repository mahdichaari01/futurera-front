import logo from "../assets/logo.png";
import Button from "../components/Button";
export default function Home() {
  return (
    <div className="h-full flex flex-col justify-between text-center items-center text-white">
      <img src={logo} className="h-7" />
      <div className="sm:text-2xl text-xl font-bold">Free Mint</div>
      <div className="w-full flex flex-col gap-2 font-bold sm:text-2xl text-xl">
        Price:
        <hr className="w-full" />
        <div className="sm:text-3xl text-2xl">0.08 ETH</div>
      </div>
      <div className="w-full">
        <Button onClick={() => {}}>Connect Wallet</Button>
        <div className="text-center text-[.625rem] mt-3">
          Please ensure you understand the risks before mining.
        </div>
      </div>
    </div>
  );
}

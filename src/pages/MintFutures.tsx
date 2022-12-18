import { useState } from "react";
import logo from "../assets/logo.png";
import Button from "../components/Button";
export default function Home() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="h-full flex flex-col justify-between text-center items-center text-white">
      <img src={logo} className="h-7" />
      <div className="sm:text-2xl text-xl font-bold">Free Mint</div>
      <div className="w-full flex flex-col gap-2 font-bold sm:text-2xl text-xl">
        <div className="w-full">
          <div className="flex flex-row justify-between">
            <span>Amount</span>
            <input className="w-24 bg-transparent text-2xl sm:text-3xl text-right" />
          </div>
          <hr className="w-full" />
        </div>
        <div className="w-full">
          <div className="flex flex-row justify-between ">
            <span>Total</span>
            <span className="text-2xl sm:text-3xl">0 ETH</span>
          </div>
          <hr className="w-full" />
        </div>

        <label
          className="text-[10px] font-medium w-full leading-tight flex flex-row justify-center gap-3 px-2 mt-2"
          htmlFor="terms"
        >
          <input
            type="checkbox"
            checked={checked}
            name="terms"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="text-left">
            Yes, I understand and agree to the Hertz terms of service.
          </span>
        </label>
      </div>
      <div className="w-full">
        <Button disabled={!checked} onClick={() => {}}>
          Mint Futures
        </Button>
        <div className="text-center text-[.625rem] mt-3">
          Please ensure you understand <a>the risks before mining</a>.
        </div>
      </div>
    </div>
  );
}

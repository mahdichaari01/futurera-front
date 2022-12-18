import { useContext, useState } from "react";
import { WalletConnection } from "../contexts/context";
import { ReactComponent as Arrow } from "../assets/downArrow.svg";
import { ReactComponent as Wallet } from "../assets/wallet.svg";
export default function WalletInfo() {
  const connection = useContext(WalletConnection);
  const [opended, setOpened] = useState(false);
  return (
    <div className="bg-black cursor-pointer border-white border-[1px] rounded-xl p-2 text-white gap-2 flex flex-row justify-between items-center">
      <Wallet className="h-6" />
      <span className="text-sm leading-none font-bold">
        {connection.address.slice(0, 5) + "..." + connection.address.slice(-4)}{" "}
        - {connection.balance} ETH
      </span>
      <Arrow className="h-6" />
    </div>
  );
}

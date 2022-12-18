import React, { useContext } from "react";
import { WidgetContainer } from "./components/Widget";
import Button from "./components/Button";
import logo from "./assets/logo.png";
import SocialMedia from "./components/SocialMedia";
import { WalletConnection } from "./contexts/context";
import WalletInfo from "./components/WalletInfo";
import Home from "./pages/Home";
import MintFutures from "./pages/MintFutures";
import Risks from "./pages/Risks";
import placeholder from "./assets/placeholder.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const SM: {
  name: "facebook" | "twitter" | "instagram" | "discord";
  link: string;
}[] = [
  { name: "twitter", link: "https://twitter.com/" },
  { name: "discord", link: "https://discord.com/" },
  { name: "facebook", link: "https://facebook.com/" },
  { name: "instagram", link: "https://instagram.com/" },
];
function App() {
  const connection = useContext(WalletConnection);
  return (
    <div className="App bg-back p-9 min-h-screen">
      <header className="flex justify-center md:justify-between flex-row items-center w-full">
        <img src={logo} className="h-6 md:block hidden" />
        {connection.loggedIn ? (
          <WalletInfo />
        ) : (
          <div className="md:block hidden">
            <Button size="sm" onClick={() => console.log("clicked")}>
              Connect Wallet
            </Button>
          </div>
        )}
      </header>
      <main className="grid grid-cols-1 md:grid-cols-[1fr,34rem,1fr] w-full h-full place-items-center">
        <div className="max-md:hidden text-white w-full">
          <img className="object-contain w-full" src={placeholder} />
        </div>
        <div className="w-full max-w-lg">
          <WidgetContainer>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mint" element={<MintFutures />} />
                <Route path="/risks" element={<Risks />} />
              </Routes>
            </BrowserRouter>
          </WidgetContainer>
          <ul className="w-full p-5 flex flex-row justify-between">
            {SM.map((item, index) => (
              <SocialMedia key={index} icon={item.name} link={item.link} />
            ))}
          </ul>
        </div>
        <div className="text-white w-full">
          <img className="object-contain w-full" src={placeholder} />
        </div>
      </main>
    </div>
  );
}

export default App;

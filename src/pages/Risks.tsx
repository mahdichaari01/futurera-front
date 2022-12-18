import Button from "../components/Button";

export default function Risks() {
  return (
    <div className="flex flex-col h-full w-full justify-between gap-4 sm:gap-8  text-white">
      <div className="text-center text-2xl sm:text-3xl font-bold">
        Understand the risks
      </div>
      <p className="overflow-y-scroll cleanScrollbar text-xs sm:text-base">
        The buyer should comprehend that the blockchain commodities or
        cryptocurrencies have extremely high volatility and uncertainty in their
        market prices. This product is not a financial product nor any
        investment or wealth management product, and it is not designed for
        investment purposes. No matter buying or selling this product, it is the
        buyer’s own decision and responsibility. The Company cannot predict or
        manage the future price changes of the product. For any price
        fluctuation of the product, it has nothing to do with the Company. The
        company has no legal or financial responsibilities for any profits or
        losses{" "}
      </p>
      <Button onClick={() => {}}>Back</Button>
    </div>
  );
}

// components/PayPalDonateButton.tsx
"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    paypal?: any;
  }
}

export default function PayPalDonateButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [amount, setAmount] = useState("20.00"); // Default donation amount
  const amounts = ["10.00", "20.00", "50.00", "100.00"]; // Predefined donation amounts
  const [customAmount, setCustomAmount] = useState(""); // Custom amount input

  const amountRef = useRef(amount);
  amountRef.current = amount; // keep ref in sync so createOrder reads the latest value

  const handlePresetClick = (value: string) => {
    setAmount(value);
    setCustomAmount(""); // clear custom field when a preset is picked
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) setAmount(value);
  };

  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
    script.onload = () => {
      window.paypal
        .Buttons({
          style: { color: "gold", shape: "pill", label: "donate" },
          createOrder: (_data: any, actions: any) => {
            const value = parseFloat(amountRef.current);
            if (isNaN(value) || value <= 0) {
              alert("Please enter a valid donation amount.");
              return Promise.reject(new Error("Invalid amount"));
            }
            return actions.order.create({
              purchase_units: [
                { description: "Donation", amount: { value: value.toFixed(2) } },
              ],
            });
          },
          onApprove: async (_data: any, actions: any) => {
            const details = await actions.order.capture();
            alert(`Thank you, ${details.payer.name.given_name}!`);
          },
        })
        .render(containerRef.current);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Preset amount buttons */}
      <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
        {amounts.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => handlePresetClick(value)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors md:text-3xl lg:text-6xl hover:bg-orange-400 hover:text-white ${
              amount === value && !customAmount
                ? "border-haiti-navy bg-haiti-navy text-white"
                : "border-haiti-navy/30 text-haiti-navy hover:bg-haiti-green-light hover:text-haiti-navy"
            }`}
          >
            ${value}
          </button>
        ))}
      </div>

      {/* Custom amount input */}
      <div className="flex items-center gap-1">
        <span className="text-haiti-navy font-semibold text-5xl pr-4">$</span>
        <input
          type="number"
          min="1"
          step="1"
          placeholder="Other amount"
          value={customAmount}
          onChange={handleCustomAmountChange}
          className="h-20 rounded border border-haiti-navy/30 px-2 py-1 text-center text-haiti-navy md:text-3xl lg:text-5xl w-full"
        />
      </div>

      {/* PayPal button */}
      <div className="mt-4 w-full text-3xl items-center justify-center max-w-6xl pl-24" style={{ minHeight: "90px" }}>
      <div ref={containerRef} />
      </div>
    </div>
  );
}
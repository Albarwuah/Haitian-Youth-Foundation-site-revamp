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
    <div className="flex w-full flex-col items-center gap-4">
      {/* Preset amount buttons */}
      <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
        {amounts.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => handlePresetClick(value)}
            className={`rounded-full border-2 px-6 py-2 text-lg font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-haiti-navy ${
              amount === value && !customAmount
                ? "border-haiti-navy bg-haiti-navy text-white"
                : "border-haiti-navy/30 bg-white text-haiti-navy hover:border-haiti-navy hover:bg-haiti-offwhite"
            }`}
          >
            ${value}
          </button>
        ))}
      </div>

      {/* Custom amount input */}
      <div className="flex w-full max-w-xs items-center gap-2">
        <span className="text-2xl font-bold text-haiti-navy" aria-hidden="true">$</span>
        <input
          aria-label="Custom donation amount in dollars"
          type="number"
          min="1"
          step="1"
          placeholder="Other amount"
          value={customAmount}
          onChange={handleCustomAmountChange}
          className="w-full rounded-lg border border-haiti-navy/30 bg-white px-4 py-3 text-center text-lg text-haiti-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-haiti-navy"
        />
      </div>

      {/* PayPal button */}
      <div className="mt-4 w-full max-w-md" style={{ minHeight: "90px" }}>
      <div ref={containerRef} />
      </div>
    </div>
  );
}
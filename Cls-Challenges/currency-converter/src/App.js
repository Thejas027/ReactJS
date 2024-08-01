import React, { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [error, setError] = useState(null);

  const handleConversion = async () => {
    try {
      if (!amount || isNaN(amount)) {
        throw new Error("Please enter a valid amount");
      }
      const response = { success: true, rate: 0.85 }; // Mock response
      if (response.success) {
        setConvertedAmount((amount * response.rate).toFixed(2));
        setError(null);
      } else {
        throw new Error("Currency conversion failed");
      }
    } catch (err) {
      setError(err.message);
      setConvertedAmount("");
    }
  };

  const handleReset = () => {
    setAmount("");
    setFromCurrency("USD");
    setToCurrency("EUR");
    setConvertedAmount("");
    setError(null);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Currency Converter</h1>
      </div>
      <div className="select-box">
        <div>
          <i
            className={`flag-icon flag-icon-${fromCurrency.toLowerCase()}`}
          ></i>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </div>
        <div>
          <i className={`flag-icon flag-icon-${toCurrency.toLowerCase()}`}></i>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </div>
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className="button" onClick={handleConversion}>
        Convert
      </button>
      {convertedAmount && (
        <>
          <div className="result">
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </div>
          <button className="button reset" onClick={handleReset}>
            Reset
          </button>
        </>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
}

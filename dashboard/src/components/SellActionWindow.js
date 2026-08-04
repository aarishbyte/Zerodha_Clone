import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";
import { Button } from "@mui/material";

const SellActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [error, setError] = useState("");

  const handleSellClick = async () => {
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:3002/newOrder",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "SELL",
        },
        {
          withCredentials: true,
        },
      );

      console.log(response.data);
    
      generalContext.refreshHoldings();
      generalContext.closeSellWindow();
    } catch (err) {
        console.log("Catch executed");
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
            {error && ( 
                <p style={{color: "red", marginBottom: "10px"}}>
                    {error}
                </p>
            )}
          <Button className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Button>
          <Button to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;

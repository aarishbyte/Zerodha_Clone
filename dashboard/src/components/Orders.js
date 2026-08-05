import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-clone-j3m4.onrender.com/allOrders",{
      withCredentials:true,
    })
    .then((res) => {
      console.log(res.data);
      setOrders(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <div className="orders">
      <h3>Orders ({orders.length})</h3>

      <table className="order-table">
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key = {order._id}>
              <td>{order.name}</td>
              <td>{order.qty}</td>
              <td>{order.price}</td>
              <td>{order.mode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;

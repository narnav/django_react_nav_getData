import * as React from "react";

import { useParams, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

export default function Invoice() {
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.myInvoiceId, 10));
  console.log(invoice);
  return (
    <main style={{ padding: "1rem", backgroundColor: "red" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
        <br></br>
        {/* <img src="/media/p1.jpg"></img> */}
        <img src={`/media/${invoice.img}`} alt="" />
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices");
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}

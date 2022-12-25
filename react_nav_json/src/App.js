import * as React from "react";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/baga">Baga</Link> |{" "}
        <Link to="/invo">Invo</Link> |{" "}
        <Link to="/prod">Prod</Link> |{" "}
        <Link to="/students">stuuudents</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

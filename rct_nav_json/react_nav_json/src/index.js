import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Prod from "./Prod";
import Cat from "./Cat";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import Students from "./routes/Students";
import Student from "./routes/Student";
import Baga from "./components/Baga";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="expenses" element={<Expenses />} />
                    <Route path="baga" element={<Baga />} />
                    <Route path="prod" element={<Prod />} />
                    <Route path="students" element={<Students />}>
                        <Route
                            index
                            element={
                                <main style={{ padding: "1rem" }}>
                                    <p>Select a student</p>
                                </main>
                            }
                        />
                        <Route path=":myStudentName" element={<Student />} />
                    </Route>
                    <Route path="invoices" element={<Invoices />}>
                        <Route
                            index
                            element={
                                <main style={{ padding: "1rem" }}>
                                    <p>Select an invoice</p>
                                </main>
                            }
                        />
                        <Route path=":myInvoiceId" element={<Invoice />} />
                    </Route>
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

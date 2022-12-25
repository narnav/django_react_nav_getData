/**
 * @type {Invoice[]}
 */
let invoices = [
  {
    name: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
    img: "p1.jpg",
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
    img: "p2.jpg",
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
    img: "p3.jpg",
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
    img: "p1.jpg",
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/2998",
    img: "p2.jpg",
  },
  {
    name: "my test invoice",
    number: 2005,
    amount: "$2,600",
    due: "01/27/2988",
    img: "p3.jpg",
  },
];

export function getInvoices() {
  return invoices;
}

/**
 * @param {number} number
 * @returns {Invoice}
 */
export function getInvoice(number) {
  return invoices.find((invoice) => invoice.number === number);
}

/**
 * @param {number} number
 * @returns {void}
 */
export function deleteInvoice(number) {
  invoices = invoices.filter((invoice) => invoice.number !== number);
}

/**
 * @typedef {{ name: string; number: number; amount: string; due: string }} Invoice
 */

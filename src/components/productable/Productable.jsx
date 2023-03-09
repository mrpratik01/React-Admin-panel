import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./productable.scss";

export const rows = [
  {
    partNumber: "V001",
    img: "https://source.unsplash.com/random",
    product: "Nissan Truck",
    brands: "TATA",
    price: "NRS 4000",
    stock: "in stock",
    addtoCart: "Details",
  },
  {
    partNumber: "V002",
    img: "https://source.unsplash.com/random",
    product: "Nissan Truck",
    brands: "TATA",
    price: "NRS 4000",
    stock: "in stock",
    addtoCart: "Details",
  },
  {
    partNumber: "V003",
    img: "https://source.unsplash.com/random",
    product: "Nissan Truck",
    brands: "TATA",
    price: "NRS 4000",
    stock: "in stock",
    addtoCart: "Details",
  },
  {
    partNumber: "V004",
    img: "https://source.unsplash.com/random",
    product: "Nissan Truck",
    brands: "TATA",
    price: "NRS 4000",
    stock: "in stock",
    addtoCart: "Details",
  },
  {
    partNumber: "V005",
    img: "https://source.unsplash.com/random",
    product: "Nissan Truck",
    brands: "TATA",
    price: "NRS 4000",
    stock: "in stock",
    addtoCart: "Details",
  },
  {
    partNumber: "V006",
    img: "https://source.unsplash.com/random",
    product: "Nissan Truck",
    brands: "TATA",
    price: "NRS 4000",
    stock: "in stock",
    addtoCart: "Details",
  },
  
];
const Productable = () => {
  return (
    <div className="productable">
      <TableContainer component={Paper} className="tablecontainer">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Vehicle ID</TableCell>
              <TableCell className="tableCell">Vehicle</TableCell>
              <TableCell className="tableCell">Brands</TableCell>
              <TableCell className="tableCell">Price / hr</TableCell>
              <TableCell className="tableCell">Stock</TableCell>
              <TableCell className="tableCell">View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.partNumber}>
                <TableCell className="tableCell">{row.partNumber}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.brands}</TableCell>
                <TableCell className="tableCell">{row.price}</TableCell>
                <TableCell className="tableCell">{row.stock}</TableCell>
                <TableCell className="tableCell">
                  <span> {row.addtoCart}</span>
                </TableCell>
                {/* <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Productable;

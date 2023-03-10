import React, {useEffect, useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./list.scss";





const rows = [
  {
    id: 1,
    packageDescription: "Bootels",
    PickupAddress: "Jhapa, damak",
    DropOffAddress: "jhapa, Birtamod",
    category: "Plastic",
    amount: 1200,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2,
    packageDescription: "Beer",
    PickupAddress: "Jhapa, damak",
    DropOffAddress: "jhapa, Birtamod",
    category: "Plastic",
    amount: 1200,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 3,
    packageDescription: "Sugarcane",
    PickupAddress: "Jhapa, damak",
    DropOffAddress: "jhapa, Birtamod",
    category: "Plastic",
    amount: 1200,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 4,
    packageDescription: "Trouser",
    PickupAddress: "Jhapa, damak",
    DropOffAddress: "jhapa, Birtamod",
    category: "Plastic",
    amount: 1200,
    method: "Cash on Delivery",
    status: "Approved",
  },
];

const List = () => {

  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3001/api/packages").then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
    })

  }

  useEffect(() => {
    fetchData()
  }, [])



  return (
    <div className="list">

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Package ID</TableCell>
              <TableCell className="tableCell">Package Description</TableCell>
              <TableCell className="tableCell">Pickup Address</TableCell>
              <TableCell className="tableCell">Drop-off Address</TableCell>
              <TableCell className="tableCell">category</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">{row.packageDescription}</TableCell>
                <TableCell className="tableCell">{row.PickupAddress}</TableCell>
                <TableCell className="tableCell">{row.DropOffAddress}</TableCell>
                <TableCell className="tableCell">{row.category}</TableCell>
                <TableCell className="tableCell">{row.method}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;

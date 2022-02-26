
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import { CAREER_LIST } from "../../sample";
import ProjectDetail from "./ProjectDetail";

function Row(props) {
  const { row } = props;

  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.index}</TableCell>
        <TableCell component="th" scope="row">
          {row.project}
        </TableCell>
        <TableCell>{row.type}</TableCell>
        <TableCell sx={{ minWidth: "200px" }}>{row.summary}</TableCell>
        <TableCell>{row.skills}</TableCell>
        <TableCell sx={{ minWidth: "200px" }}>
          {row.features.map((feature) => {
            return <li>{feature}</li>;
          })}
        </TableCell>

        <TableCell>{row.role}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <ProjectDetail row={row} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export const Project = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>No</TableCell>
            <TableCell>Project</TableCell>
            <TableCell>Project Type</TableCell>
            <TableCell>Summary</TableCell>
            <TableCell>Skills</TableCell>
            <TableCell>Features</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {CAREER_LIST.map((row, index) => (
            <Row key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Project;

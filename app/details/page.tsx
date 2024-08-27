"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableContainer = styled(TableContainer)`
  min-width: 47vw;
  overflow-x: auto;

  @media (min-width: 768px) {
    max-width: 20vw; 
  }
`;
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface Station {
  station: string;
  arrivalTime: string;
  departureTime: string;
}

interface Trip {
  trip: number;
  stations: Station[];
}

const Details = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [value, setValue] = useState<string>("");
  const [data, setData] = useState<Trip[]>([]);

  useEffect(() => {
    const url = new URL(window.location.href);
    const busNumber = url.searchParams.get("value");

    if (busNumber) {
      setValue(busNumber);
      fetchData(busNumber);
    }
  }, [router]);

  async function fetchData(busNumber: string) {
    setLoading(true);
    try {
      const res = await fetch(
        `https://busapi.amithv.xyz/api/v1/search?vehicle_number=${busNumber}`
      );
      if (!res.ok) {
        throw new Error("Fetching failed");
      }
      const result: Trip[] = await res.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="h-[100vh] gap-4 flex flex-col justify-center items-center max-w-4xl mx-auto p-4">
        <div className="overflow-y-scroll z-10 max-h-[80vh]">
          {data.map((trip) => (
            <div key={trip.trip}>
                <div className="flex flex-col items-center gap-1">
              <div className="mt-2 flex flex-col justify-center items-center text-white max-w-[80vh] min-w-32 mb-4">
                <h2>Trip No: {trip.trip}</h2>
                <h4>Bus Number: {value}</h4>
              </div>

              <Paper>
                <StyledTableContainer>
                  <Table aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Station</StyledTableCell>
                        <StyledTableCell align="right">
                          Arrival Time
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          Departure Time
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {trip.stations.map((station, i) => (
                        <StyledTableRow key={i}>
                          <StyledTableCell>{station.station}</StyledTableCell>
                          <StyledTableCell align="right">
                            {station.arrivalTime}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {station.departureTime}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </StyledTableContainer>
              </Paper>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;

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
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import {Spinner} from "@nextui-org/react";


const StyledTableContainer = styled(TableContainer)`

   min-width: 40vw;
  overflow-x: auto;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    max-width: 20vw; 
    min-height: 20vh;
    padding-bottom: 2rem;
  }

  @media (max-width: 768px) {
    max-width: 90vw;
    min-height: 15vh; /* Adjust this height as needed */
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
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const url = new URL(window.location.href);
    const busNumber = url.searchParams.get("value");

    if (busNumber) {
      setValue(busNumber);
      fetchData(busNumber);
    }
  }, []);

  const changePage = () => {
    router.push("/");
  };
  async function fetchData(busNumber: string) {
    setLoading(true);
    try {
      const res = await fetch(
        `https://busapi.amithv.xyz/api/v1/search?vehicle_number=${busNumber}`
      );
      if (!res.ok) {
       // throw new Error("Fetching failed");
        setError("Bus not found try with old bus number with that permit");
        return;
      }
      const result: Trip[] = await res.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
     setError("Bus not found try with old bus number with that permit");
    } finally {
      setLoading(false);
    }
   
  }

  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      
      <div className="h-[100vh] gap-4 flex flex-col justify-center items-center max-w-4xl mx-auto p-4">
     <div className="absolute cursor-pointer z-10 sm:left-56 sm:top-10 left-9 top-6">
     <IoMdArrowRoundBack onClick={changePage} color="white" size="30" />
  
     </div>
     <h1 className="relative z-9 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300  text-center font-sans font-bold">
        Track My Bus
      </h1>
      {loading ? (
  <div className="flex flex-col items-center justify-center mx-auto my-auto text-white">
    <Spinner color="warning" label="Loading..." size="md" />
  </div>
) : error ? (
  <p className="flex flex-col items-center justify-center mx-auto my-auto text-red-800 text-2xl font-bold">
    {error}
  </p>
) : (
  <div className="no-scrollbar mb-32 md:mb-20 overflow-y-scroll z-10 max-h-[78vh] my-9 border-2 border-neutral-500">
    {data.map((trip) => (
      <div key={trip.trip}>
        <div className="flex flex-col items-center ">
          <div className="mt-2 flex flex-col justify-center items-center text-white max-w-[80vh] min-w-32 min-h[10vh] md:min-h[80vh] mb-4 md:mb-10 no-scrollbar">
            <h2 className="text-2xl uppercase text-bold">Trip No: {trip.trip}</h2>
            <h4 className="text-sm">Bus Number: {value}</h4>
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
)}
</div>
      <Link href="https://dsc.gg/upzare" className="flex flex-row items-center justify-center">
      <div className="z-10 text-bold flex items-center md:opacity-25 text-slate-400 absolute sm:bottom-3 bottom-20 opacity-75 hover:opacity-100 cursor-pointer ">
  <Image 
    width={40}
    height={40}
    src="/upzare.svg" 
    alt="Upzare Logo"
  />
  <span>Powered By Upzare</span>
</div>
</Link>
    </div>
  );
};

export default Details;

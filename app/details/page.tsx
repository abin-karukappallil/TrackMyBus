"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface Station {
    station: string;
    arrivalTime: string;
    departureTime: string;
  }

interface Trip {
    trip: number;
    stations: Station[];
  }


const Details = ()=>  {
       const router = useRouter();
       const [loading, setLoading] = useState<boolean>(true);
       const[value,setvalue] = useState<string>('');
       const [data, setData] = useState<any[]>([]); 
       useEffect(() => {
        const url = new URL(window.location.href);
        const busNumber = url.searchParams.get('value');
    
        if (busNumber) {
          setvalue(busNumber);
          fetchData(busNumber);
        }
      }, [router]);
    

      async function fetchData(busNumber: string) {
        setLoading(true); 
        try {
          const res = await fetch(`https://busapi.amithv.xyz/api/v1/search?vehicle_number=${busNumber}`);
          if (!res.ok) {
            throw new Error('Fetching failed');
          }
          const result: Trip[] = await res.json();
          setData(result); 
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      }
    
  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="h-[80vh] gap-4 flex flex-col justify-center items-center w-[100vh] mx-auto p-4">
    <div className="overflow-y-scroll z-10">
       {data.map((trip)=>(
            <div  key={trip.trip}>
                
                <div className="text-yellow-400 w-full">
                    <h2>
                    Trip No: {trip.trip}</h2>
                    <h4>Bus Number: {value} </h4>
                    </div>

                    {trip.stations.map((station:any,i:any)=>(
                        <div key={i} className='w-full bg-yellow-300'>
                        <p>Station: {station.station}</p>
                        <p>Arrival Time: {station.arrivalTime}</p>
                        <p>depart time: {station.departureTime}</p>
                        </div>
                    ))};
            </div>
       ))};

    </div>
    </div>
    </div>
  )
}

export default Details
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
    <div className=" min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="gap-4 flex flex-col justify-center items-center max-w-2xl mx-auto p-4">
    <div className="overflow-y-hidden">
       {data.map((trip)=>(
       
            <div className="overflow-y-hidden" key={trip.trip}>
                
                <p className="text-yellow-400">Trip No: {trip.trip}</p>
                    {trip.stations.map((station:any,i:any)=>(
                        <div  key={i} className='overflow-y-hidden bg-yellow-300'>
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
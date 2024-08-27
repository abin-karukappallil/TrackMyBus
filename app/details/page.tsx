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
    
      if (loading) {
        return <p>Loading...</p>;
      }
  return (

    <div>
       {data.map((trip)=>(
            <div key={trip.trip}>
                <p>Trip No: {trip.trip}</p>
                    {trip.stations.map((station:any,i:any)=>(
                        <div key={i} className='bg-yellow-300'>
                        <p>Station: {station.station}</p>
                        <p>Arrival Time: {station.arrivalTime}</p>
                        <p>depart time: {station.departureTime}</p>
                        </div>
                    ))};
            </div>
       ))};

    </div>
  )
}

export default Details
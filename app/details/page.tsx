import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Details = ()=>  {
       const router = useRouter();
       const[value,setvalue] = useState<string>('');
       const [data, setData] = useState<any[]>([]); 
       useEffect(()=>{
        if(router.isReady){
            const busNumber = router.query.value as string;            if(busNumber){
                if(busNumber){
                    setvalue(busNumber)
                    fetchData(busNumber);
                }
            }
        }
       })



    async function fetchData(busNumber:string){
        const res = await fetch(`https://busapi.amithv.xyz/api/v1/search?vehicle_number=${busNumber}`);
        if(!res.ok){
            throw new Error('Fetching failed');
        }
        const result =  await res.json();
        setData(result.trip);
        
    }
   
  return (

    <div>
       {data.map((trip)=>(
            <div key={trip.trip}>
                <p>Trip No: {trip.trip}</p>
                    {trip.station.map((station:any,i:any)=>(
                        <div key={i} className='bg-yellow-300'>
                        <p>Station: {station.station}</p>
                        </div>
                    ))};
                <p>arrival</p>
            </div>
       ))};

    </div>
  )
}

export default Details
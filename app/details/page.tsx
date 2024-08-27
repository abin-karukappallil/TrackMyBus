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
                   const data = fetchData(busNumber);
                }
            }
        }
       })



    async function fetchData(busNumber:string){
        const res = await fetch(`https://busapi.amithv.xyz/api/v1/search?vehicle_number=${busNumber}`);
        if(!res.ok){
            throw new Error('Fetching failed');
        }
        return await res.json();
        
    }
   
  return (

    <div>
        {data.forEach(trip => {
            
        });}

    </div>
  )
}

export default Details

import { UserSquare } from 'iconic-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import run from '../api/dbconfig';
import Link from 'next/link';

const x = await run();
const page = () => {
  return (
    <div>
       <div className='h-screen   bg-slate-50 text-green-600 dark:bg-slate-800 mr-2 ml-2 mt-1'>
        <div className='flex justify-between  mb-autoh-screen text-slate-950 dark:text-slate-200'>
           
            <div className='flex space-x-2 align-center justify-around text-sm'>
            <UserSquare size="32" className="text-red-500" />
            <h1 className='text-2xl'>Welcome, Nishant</h1>
            
            </div>
            <Avatar className="text-xl">
                   <AvatarImage src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Lovely_Professional_University_logo.png/120px-Lovely_Professional_University_logo.png" />
                   <AvatarFallback>CN</AvatarFallback>
                   </Avatar>
            </div>
          {x.map((x) => (
            <div  key={x._id} className='flex border border-green-900 mt-2 p-2 rounded-lg'>
            <div   className='flex flex-row justify-around space-x-2   text-slate-950 dark:text-slate-200 '>
            <div className='   border-slate-600 w-52 h-52 space-y-5 p-2  rounded-lg rs-cover-image' style={{backgroundImage: `url(${x.image})`}}>
          <h1 className='text-2xl text-slate-50 bg-green-600 h-10 p-2 text-right mr-0 ml-1'>{x.name}</h1>
            </div>
            <div className='grid grid-cols-1 space-y-0'>
            <h1 className='text-2xl'>{x.address}</h1>
            <h1>lorem</h1>
           <Link href="(/restaurant/${x.name})">  ORDER NOW</Link>
            </div>
            </div> 
            </div>
            ))}
   
            
            
    </div>

      </div>
  
  )
}

export default page
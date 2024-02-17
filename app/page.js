import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const page = () => {
 
  return (
   <div>
    <div className="grid bg-slate-50  text-green-600 dark:bg-slate-800  justify-center place-content-center text-center  h-screen w-screen">
      <h1 className="text-4xl font-bold">Meal Mingle</h1>
      <h1 className="text-orange-800">Together We Eat , Mingle, Repeat</h1>
      <div className="flex space-x-4 justify-center mt-6 text-slate-950 dark:text-slate-200">
      <Button variant="outline">
        <Link href="/signup" >Signup</Link>
      </Button>
      <Button variant="ghost">
        <Link href="/login">Login</Link>
      </Button>
        </div>
       <Link href="/home" className="mt-5 text-red-500">Continue as guest</Link>
       </div>
       </div>
  )
}

export default page
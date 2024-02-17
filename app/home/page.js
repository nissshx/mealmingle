import Image from 'next/image'

import connectDB from '../db'
connectDB();
export default function Page() {
  return (
    <Image
      src="https://images.unsplash.com/photo-1682687220198-88e9bdea9931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  )
}

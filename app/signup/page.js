
import  Link  from 'next/link'

const page = () => {
  return (
    <div className='h-screen grid place-items-center bg-slate-50 text-green-600 dark:bg-slate-800'>
        <form className='grid space-y-2 text-center p-4 border border-gray-600 rounded' method='POST' action='register()'>
            <input type="text" className='p-2 text-slate-500'  placeholder="Name" />
            <input type="email"  className='p-2 text-slate-500' placeholder="Email" />
            <input type="password"  className='p-2 text-slate-500'  placeholder="Password" />
            <input type="password" className='p-2 text-slate-500'  placeholder="confirm password" />
            <button className='bg-transparent p-3 border  border-green-600 hover:bg-green-600 hover:text-slate-50 hover:rounded' type="submit">Register</button>
            <Link href='/login'>Already Registered? Login</Link>
        </form>
    </div>
  )
}

export default page
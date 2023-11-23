import React from 'react'
import Link from 'next/link'
import { badgeVariants } from "@/components/ui/badge"

const Navbar = () => {
  return (
    <div className='flex justify-between mt-3'>
        <div>
            <h3>CoolabHub</h3>
        </div>
        <div className='flex'>
            <div className='mr-4'>
                <Link href={"/login"}>Log In</Link>
            </div>
            <div>
            <Link href={"/signup"} className={`${badgeVariants({ variant: "secondary" })}`}>Get Coolab for free</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
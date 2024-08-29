import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"
import { Button } from '@/components/ui/button';
import useractivity from '../assets/useractivity.png'
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { FcGoogle } from "react-icons/fc";
  import { FaApple } from "react-icons/fa";

  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 


export default function UserHome(){

    return <>
    {/* navbar section */}
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center p-4 space-x-4">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <div className="text-xl font-bold">Sisiphus-Donaty</div>
          </div>
    
          {/* Navigation Links */}
          <div className="flex items-center mr-4 space-x-4">
            <NavLink
              to="/who-we-are"
              className={({ isActive }) =>
                isActive ? 'text-white  font-extrabold' : 'text-gray-700 hover:text-black'
              }
            >
              Who we are
            </NavLink>
    
            <NavLink
              to="/our-campaign"
              className={({ isActive }) =>
                isActive ? 'text-black  font-extrabold' : 'text-gray-700 hover:text-black'
              }
            >
              Our campaign
            </NavLink>
    
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? 'text-black  font-extrabold' : 'text-gray-700 hover:text-black'
              }
            >
              Contact us
            </NavLink>
            <NavLink
                to="Donate-now">
                    <Button className=' bg-cyan-400 item-center'> Donate Now</Button> 
            </NavLink>
          </div>
        </div>
    {/* main Page section  */}
    <div className='flex justify-center mt-20 space-x-40'>
        <div className='flex-col space-y-8 w-[450px] ml-28 ' >
            <div className='font-semibold text-purple-500'>
            <p>TRUSTED CHARITY COMPANY</p>
            </div>
            <div className='text-4xl font-bold'>
            <p>Let’s Help And Make People Smile By <span className='text-purple-500'>Giving</span> Of Yours</p>
            </div>
            <div className='text-xs text-gray-400'>
            <p>No matter how small the donation you give will mean a lot to them, let's donate now to help fellow humans in need</p>
            </div>
            <div className='flex items-center justify-start space-x-10'>
                <div>
                    <Button className='bg-cyan-400'>Get started</Button>
                </div>
                <div>
                    <img src={useractivity} alt="image-2" />
                </div>
            </div>
            
        </div>
        <div className='relative z-10 '>
        <Card className="w-[420px] space-y-8  ">

            <Button className='mt-4 ml-4 bg-cyan-400'>Education</Button>
      <CardHeader className='space-y-4'>
        <CardTitle>TrustChain : Revolutionizing Charity with Blockchain</CardTitle>
        <CardDescription className="text-gray-400">A blockchain-based platform that ensures transparency and trust in charitable donations, making every contribution count towards a brighter future.</CardDescription>
      </CardHeader>
     
      <CardFooter className="flex justify-between">
        <Button className='w-[150px]' variant="outline"> <span className='mr-1'><FaApple /></span>Pay</Button>
        <Button variant="outline" className='w-[150px]'> <span className='mr-1'> <FcGoogle /></span>Pay</Button>
      </CardFooter>
    </Card>
        </div>
        <div className='absolute bottom-0  mb-[136px] -z-1  right-[255px] w-[255px] h-[310px] bg-cyan-400 rounded-lg'>

        </div>
        <div></div>
    </div>

      </>
    
}
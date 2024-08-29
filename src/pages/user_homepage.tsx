import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"
import profile1 from "../assets/profile1.svg";
import profile2 from "../assets/profile2.svg";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
import useractivity from '../assets/useractivity.png'

import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import EmblaCarousel from '../components/ui/EmblaCarousel';
import { EmblaOptionsType } from '../components/ui/EmblaCarousel';
import '../css/embla.css';
import SLIDES from '../components/ui/SlideData'

  import { FcGoogle } from "react-icons/fc";
  import { FaApple } from "react-icons/fa";
  import { IoCheckmarkCircleSharp } from "react-icons/io5";


const OPTIONS: EmblaOptionsType = { align: 'start' };

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
        <div className='absolute bottom-0  mb-[136px] -z-1  right-[245px] w-[255px] h-[310px] bg-cyan-400 rounded-lg'>

        </div>
        <div></div>
    </div>
    {/* second page section */}
    <div className='flex justify-around mt-32'>
    <div className="w-[450px] relative">
        <div className="relative z-0">
            <img src={profile1} alt="image-3" className="object-contain w-full h-auto rounded-lg" />
        </div>
        <div className="absolute -bottom-10 -right-32 z-1 w-[300px] h-[320px] rounded-lg">
            <img src={profile2} alt="image-4" className="object-contain w-full h-full" />
        </div>
    </div>  
        <div className='flex-col space-y-4 w-[450px]'>
            <div className='text-xl font-bold text-purple-500'>
                who we are 
            </div>
            <div className='text-3xl font-bold'>
                <p>We’re Non-Profit Charity & NGO Organization</p>
            </div>
            <div><p className='text-gray-400'>Join us and make your life more valuable and useful, be a part of us and contribute to the nation and state and the simplest for the environment and yourself</p>
            </div>
            <div className='flex-col space-y-4 font-bold '>
                <div className='flex items-center justify-start space-x-2'>
                <IoCheckmarkCircleSharp className='text-xl text-cyan-400' />
                <p>Support people in extreme need</p>
                </div>
                <div className='flex items-center justify-start space-x-2 '>
                <IoCheckmarkCircleSharp className='text-xl text-cyan-400'/>
                <p>Largest global crowdfunding community</p>
                </div>
                <div className='flex items-center justify-start space-x-2'>
                <IoCheckmarkCircleSharp  className='text-xl text-cyan-400'/>
                <p>Make the world a better place</p>
                </div>
                <div className='flex items-center justify-start space-x-2'> 
                <IoCheckmarkCircleSharp className='text-xl text-cyan-400' />
                <p>Share your love for community</p>
                </div>
            </div>
            <Button className='bg-cyan-400'>About Us</Button>

            
        </div>
    </div>

        {/* Third Page section  */}
    <div className='flex-col items-center justify-center mt-32 ml-8 '>
        <div className='w-[400px] ml-20 space-y-4'>
        <p className='font-bold text-purple-500 '>Our campaign</p>
        < div className='text-3xl font-bold'><p> Giving Help To Those </p>
       <p>Who need It</p>
        </div>
        </div>

        <div className='m-20'>
        <EmblaCarousel slides={SLIDES} />
        </div>
         
       
       
    </div>

    {/* Fourth Page section */}
    <div className='flex items-center justify-around'> 
        <div className='flex-col'>
            <div className='text-3xl font-bold'>
                Newsletter
            </div>
            <p className='text-gray-400'>Bring together who care about a cause</p>
        </div>
        <div className='flex space-x-4 w-[500px]'>
        <Input placeholder='Email'/>
        <Button className='bg-cyan-400'>Subscribe</Button>
        </div>
    </div>
    {/* fifth page section */}
            <div className='relative bg-cyan-400'>
              <div></div>
              

            </div>

    {/* Sixth page section */}
    <div className='flex flex-col items-center justify-center mt-20 space-y-8'>
  <div className='flex flex-col text-center'>
    <div className='m-2 text-xl font-bold text-purple-500'>
      Need help?
    </div>
    <div className='p-[2px] bg-purple-500 w-[50px] ml-[20rem]  ' ></div>
    <p className='text-3xl font-bold'>The Answer to All Your Questions</p>
    <p className='text-gray-400'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
    </p>
  </div>

  <div className='flex flex-col items-center justify-center max-w-[800px] ' >
    <Accordion type="single" collapsible>
      <AccordionItem className="px-4 m-5 rounded-xl bg-gray-50" value="item-1">
        <AccordionTrigger className='min-w-[650px] text-xl font-bold no-underline'>How much time do I need to volunteer?</AccordionTrigger>
        <AccordionContent className='text-gray-400'>
        Neque laoreet suspendisse interdum consectetur libero. Lacinia quis vel eros donec ac odio tempor. Massa tempor nec feugiat nisl pretium fusce id velit. Vestibulum lorem sed risus ultricies tristique nulla. Sit amet cursus sit amet dictum sit amet.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="px-4 m-5 rounded-xl bg-gray-50" value="item-2">
        <AccordionTrigger className='min-w-[650px] text-xl font-bold'>How Will My Donation Be Used?</AccordionTrigger>
        <AccordionContent className='text-gray-400'>
        Neque laoreet suspendisse interdum consectetur libero. Lacinia quis vel eros donec ac odio tempor. Massa tempor nec feugiat nisl pretium fusce id velit. Vestibulum lorem sed risus ultricies tristique nulla. Sit amet cursus sit amet dictum sit amet.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="px-4 m-5 rounded-xl bg-gray-50" value="item-3">
        <AccordionTrigger className='min-w-[650px] text-xl font-bold'>How Can I Apply for a Job with You?</AccordionTrigger>
        <AccordionContent className='text-gray-400'>
        Neque laoreet suspendisse interdum consectetur libero. Lacinia quis vel eros donec ac odio tempor. Massa tempor nec feugiat nisl pretium fusce id velit. Vestibulum lorem sed risus ultricies tristique nulla. Sit amet cursus sit amet dictum sit amet.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem  className="px-4 m-5 rounded-xl bg-gray-50"value="item-4">
        <AccordionTrigger className='min-w-[650px] text-xl font-bold'>How Can I Participate?</AccordionTrigger>
        <AccordionContent className='text-gray-400'>
        Neque laoreet suspendisse interdum consectetur libero. Lacinia quis vel eros donec ac odio tempor. Massa tempor nec feugiat nisl pretium fusce id velit. Vestibulum lorem sed risus ultricies tristique nulla. Sit amet cursus sit amet dictum sit amet.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="px-4 m-5 rounded-xl bg-gray-50" value="item-5">
        <AccordionTrigger className='min-w-[650px] text-xl font-bold'>We Help Non-Profits Become More Effective</AccordionTrigger>
        <AccordionContent className='text-gray-400'>
        Neque laoreet suspendisse interdum consectetur libero. Lacinia quis vel eros donec ac odio tempor. Massa tempor nec feugiat nisl pretium fusce id velit. Vestibulum lorem sed risus ultricies tristique nulla. Sit amet cursus sit amet dictum sit amet.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</div>

      </>
    
}
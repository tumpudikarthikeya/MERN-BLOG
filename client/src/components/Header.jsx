import { Navbar,TextInput , Button, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'
import React from 'react'
import {Link, useLocation} from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { FaMoon } from "react-icons/fa6";

const Header = () => {
  const path =  useLocation().pathname;
  return (
    <Navbar className='border-b-2 md:text-2xl dark:text-white'>
      <Link to = "/">
        <span>Karthikeya's Blogs</span>
      </Link>
      <form action="">
        <TextInput 
          type='text'
          placeholder='Search...'
          rightIcon={CiSearch }
          className='hidden lg:inline'
        />
      </form>
      <Button className='lg:hidden' color="gray" pill>
        <CiSearch className='text-xl'/>
      </Button>
      

      <div className='flex gap-3 items-center md:order-2'>
        <Button className='hidden  sm:inline ' color="gray" pill >
          <FaMoon className='text-lg' />
        </Button>
        <Link to= "/signin">
          <Button  color= "gray" pill>
            <p className='text-base'>Sign In</p>
          </Button>
        </Link>
        <NavbarToggle />
      </div>
      <Navbar.Collapse >
        <Navbar.Link active = {path === "/"} as={"div"} color='black'>
          <Link to="/">
              Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active = {path === "/about"} as={"div"}>
          <Link to="/about">
              About
          </Link>
        </Navbar.Link>
        <Navbar.Link active = {path === "/projects"} as={"div"}>
          <Link to="/projects">
              Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>

    </Navbar>
  )
}

export default Header
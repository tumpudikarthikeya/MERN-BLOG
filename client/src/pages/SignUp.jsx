import React from 'react'
import {Link} from "react-router-dom"
import {Label,TextInput,Button} from "flowbite-react";

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex flex-col p-3 mx-auto gap-6 max-w-3xl md:flex-row md:items-center '>
        {/*left*/}
        <div className='flex-1 '>
            <p className='text-3xl'><span className='font-medium'>Karthikeya's</span> Blogs</p>
            <p>Join Karthikeya's Blogs and let's learn and grow together through shared insights and stories.</p>
        </div>
        {/*right*/}
        <div className='flex-1'>
            <form className='flex flex-col gap-4' >
              <div>
                <Label value="username"/>
                <TextInput type="text" placeholder="UserName" id="username"/>
              </div>
              <div>
                <Label value="Email"/>
                <TextInput type="text" placeholder="name@company.com" id="email"/>
              </div>
              <div>
                <Label value="Password"/>
                <TextInput type="password" placeholder="Password" id="password"/>
              </div>
              <Button color="dark" type='submit'>
                Sign Up
              </Button>
            </form>
            <div className='flex mt-2 text-sm gap-1 items-center justify-center'>
              <span>Have an account?</span>
              <Link to="/signin" className="text-blue-500">SignIn</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
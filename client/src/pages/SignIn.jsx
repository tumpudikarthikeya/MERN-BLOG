import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import {Label,TextInput,Button, Alert, Spinner} from "flowbite-react";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({});
  const [errorMessage,setErrorMessage] = useState(null);
  const [loading,setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(! formData.email || !formData.password){
      return setErrorMessage("Please fill all the fields.")
    }


    try{
      setLoading(true)
      setErrorMessage(null)
      const res = await fetch("/api/auth/signin",{
        method : "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formData)
      })
      console.log(res)
      const data = await res.json();
      if(data.success == false) {
        return setErrorMessage(data.message);
      }
      setLoading(false)
      if(res.ok){
        navigate('/home')
      }
    }catch (error) {
        setLoading(false)
        setErrorMessage(error.message)
    }
  }

  const handleChange = (e) =>{
    setFormData({...formData,[e.target.id]: e.target.value.trim()})
  }
  console.log(formData);

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex flex-col p-3 mx-auto gap-6 max-w-3xl md:flex-row md:items-center '>
        {/*left*/}
        <div className='flex-1'>
            <p className='text-3xl'><span className='font-medium'>Karthikeya's</span> Blogs</p>
            <p>Join Karthikeya's Blogs and let's learn and grow together through shared insights and stories.</p>
        </div>
        {/*right*/}
        <div className='flex-1'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div>
                <Label value="Email"/>
                <TextInput type="text" placeholder="name@company.com" id="email" onChange={handleChange}/>
              </div>
              <div>
                <Label value="Password"/>
                <TextInput type="password" placeholder="Password" id="password" onChange={handleChange}/>
              </div>
              <Button color="dark" type='submit' disabled={loading}>
                {
                  loading ? (
                    <>
                      <Spinner size="sm"/>
                      <span className='pl-3'>Loading...</span>
                    </>
                  ): 'Sign In'
                }
              </Button>
            </form>
            <div className='flex mt-2 text-sm gap-1 items-center justify-center'>
              <span>Don't Have an account?</span>
              <Link to="/signup" className="text-blue-500">SignUp</Link>
            </div>
            {
              errorMessage && (
                <Alert className='mt-2' color="failure"> 
                  {errorMessage}
                </Alert>
              )
            }
        </div>
      </div>
    </div>
  )
}

export default SignIn
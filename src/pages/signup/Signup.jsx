import { useState } from 'react'
import './Signup.css'

export default function Signup() {

    const [data, setData]= useState({
        name:"",
        email:"",
        password:"",
        phone:""
    })

  const handleChange  = (e) => {
    setData({
      ...data, [e.target.name]: e.target.value
    })
  }

  const handleSubmit =  (e)=>{
    e.preventDefault()
    console.log(data)
  }


  const handleClick = (e)=>{
    e.target.value = e.target.value.replace(/[^0-9]/g, "")
  }

    return (
        <>
            <div className="signup">
                <div className="signup-mid">
                    <h1>Signup</h1>

                    <form className="start" onSubmit={handleSubmit}>
                        <label>Name</label><br></br>
                        <input type='text' placeholder='enter your name' name='name' onChange={handleChange}></input><br></br>
                        <label>Email</label><br></br>
                        <input type='email' placeholder='enter your email' name='email' onChange={handleChange}></input><br></br>
                        <label>Password</label><br></br>
                        <input type='password' placeholder='enter your password' name='password' onChange={handleChange}></input><br></br>
                        <label>Phone</label><br></br>
                        <input type='tel' placeholder='+91' name='phone' maxLength={10} onChange={handleChange} onClick={handleClick}></input><br></br>

                        <div className='btn'>
                            <button className='btn1'>signup</button>
                            <button className='btn1'>login</button>
                        </div>

                       {/* <div className='google'>
                        <button>Continue with google</button>
                       </div>
                         <div className='google'>
                        <button>Continue with google</button>
                       </div>  <div className='google'>
                        <button>Continue with google</button>
                       </div> */}




                    </form>
                </div>
            </div>
        </>
    )
}
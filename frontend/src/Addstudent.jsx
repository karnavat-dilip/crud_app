import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Addstudent() {

  const [name, setname] = useState()
  const [email, setemail] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
    document.getElementById('addstudent').style.top="20px"
        document.getElementById('addstudent').style.transition= 'top 0.2s ease-in-out 0s';
  })

  const handlesubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/add', {
      Name: name,
      Email: email
    }).then((res) => console.log(res))
      .catch(err => console.log(err))
    toast('Added successfully!')
    setTimeout(() => {
      navigate('/')
    }, 5000);

  }
  return (
    <div className='parent' id='addstudent'>
      <form onSubmit={handlesubmit}>
        <h2 className='h2'>Add student</h2>
        <div>
          <label className='lbl'>Name</label>
          <input type="text" name="" id="" className='input' onChange={(e) => setname(e.target.value)} required placeholder='Enter your name' />
        </div>
        <div>
          <label className='lbl'>Email</label>
          <input type="email" name="" id="" className='input' onChange={(e) => setemail(e.target.value)} required placeholder='Enter your email' />
        </div>
        <button id='submit'>Submit</button>
        <ToastContainer />
      </form>
    </div>
  )
}

export default Addstudent

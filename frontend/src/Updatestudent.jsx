import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Updatestudent() {
    const id = useParams()
    const [oldvalue,setoldvalue]=useState({})
    useEffect(()=>{
        document.getElementById('updatestudent').style.top="20px"
        document.getElementById('updatestudent').style.transition= 'top 0.2s ease-in-out 0s';

            axios.get('http://localhost:4000/get/'+JSON.stringify(id))
            .then((res)=>{
                setoldvalue(res.data[0])
            })
            
    },[])
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const navigate = useNavigate()

    console.log(id);
    
        const handleupdate =  (e) => {
            e.preventDefault()
            try {
            axios.put(`http://localhost:4000/update/${JSON.stringify(id)}`, {
                Name: name,
                Email: email
            })
            toast('Updated successfully!')
            setTimeout(() => {
                navigate('/')
            }, 5000);
            
        } catch (error) {
            toast.error('Bad credential!');
            
        }
    }
        console.log(oldvalue);
    return (
        <div className='parent' id='updatestudent'>
            <form onSubmit={handleupdate}>
                <h2 className='h2'>Update student</h2>
                <div>
                    <label className='lbl'>Name</label>
                    <input type="text" name="" id="name" defaultValue={oldvalue.name} className='input' required onChange={(e) => setname(e.target.value)} />
                </div>
                <div>
                    <label className='lbl'>Email</label>
                    <input type="email" name="" id="" defaultValue={oldvalue.email} className='input' required onChange={(e) => setemail(e.target.value)} />
                </div>
                <button type='submit' id='submit'>Update</button>
                <ToastContainer />
            </form>
        </div>
    )
}

export default Updatestudent

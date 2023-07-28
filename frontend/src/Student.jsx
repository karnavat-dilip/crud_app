import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Student() {

    const [Student, setStudent] = useState([])
    // const id=useParams()


    useEffect(() => {
        document.getElementById('parent').style.top = "20px"
        document.getElementById('parent').style.transition = 'top 0.2s ease-in-out 0s';

        axios.get('http://localhost:4000/get')
            .then((result) => {
                setStudent(result.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    console.log(Student);

    const deletestudent = async (id) => {

        await axios.delete('http://localhost:4000/delete/' + id)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
            
            toast("deleted success!")

        setTimeout(() => {
            window.location.reload()
        }, 5000);
    }

    return (
        <>
        <div className='parent' id='parent'>

            <div>
                <Link to="/create" className='btn addbtn'>Add +</Link>
                <br />
                <br />

                <table className='table' >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            Student.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td><Link to={`update/${data.id}`} className='btn' id='btn'>Update</Link></td>
                                    <td><button className='btn' style={{ background: "red" }} onClick={() => deletestudent(data.id)}>Delete</button><ToastContainer /></td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default Student

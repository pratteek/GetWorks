import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import JobService from '../services/JobService';

const Addjob = () => {
    
    const [job, setJob] = useState({
        id: "",
        company: "",
        position: "",
        url: "",
    });
    const navigate = useNavigate();
    const handleChange = (e)=>{
        const value = e.target.value;
        setJob({ ...job, [e.target.name]: value})
    }
    const saveJob = (e) =>{
        e.preventDefault();
        JobService.saveJob(job)
            .then((response)=>{
                console.log(response);
                navigate("/");
            })
            .catch((error)=>{
            console.log(error);
        })
    }

    const clearJob = (e)=>{
        e.preventDefault();
        setJob({
            id: "",
            company: "",
            position: "",
            url: "",
        });
    }
    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="text-2xl tracking-wider">
                    <h1>Add new job</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm">Id</label>
                    <input 
                    type="text" 
                    name="id" 
                    value={job.id}
                    onChange={(e)=> handleChange(e)}
                    className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm">Company</label>
                    <input 
                    type="text" 
                    name="company" 
                    value={job.company}
                    onChange={(e)=> handleChange(e)}
                    className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm">Position</label>
                    <input 
                    type="text" 
                    name="position"
                    value={job.position}
                    onChange={(e)=> handleChange(e)}
                    className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm">Url</label>
                    <input 
                    type="url"
                    name="url"
                    value={job.url}
                    onChange={(e)=> handleChange(e)} 
                    className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center py-4 h-14 w-full my-4 space-x-5
                ">
                    <button onClick={saveJob} className="rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-2">Save</button>
                    <button onClick={clearJob} className="rounded text-white font-semibold bg-red-500 hover:bg-red-700 py-2 px-2">Clear</button>
                </div>
            </div>
        </div>
    )
}

export default Addjob

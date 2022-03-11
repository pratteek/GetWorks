import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import JobService from '../services/JobService';
import {BsFillPencilFill} from 'react-icons/bs';

const JobList = () => {
    const navigate = useNavigate();
    const [loading, setloading] = useState(true);
    const [jobs, setjobs] = useState(null);

    useEffect(() => {
        const fetchData = async() =>{
            setloading(true);
            try{
                const response = await JobService.getJob();
                setjobs(response.data);
            }catch(error){
                console.log(error);
            }
            setloading(false);
        };
        fetchData();
    }, [])
    return (
        <div className="container mx-auto my-8">
            <div className="h-12 mb-2">
                <button onClick={()=> navigate("/addjob")} className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">Add Jobs</button>
            </div>
            <div className="flex shadow border-b">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left  tracking-wider py-4 px-3">Id</th>
                            <th className="text-left  tracking-wider py-4 px-3">Company</th>
                            <th className="text-left  tracking-wider py-4 px-3">Position</th>
                            <th className="text-left  tracking-wider py-4 px-3">Apply</th>
                            <th className="text-left  tracking-wider py-4 px-3">Actions</th>
                        </tr>
                    </thead>
                    {!loading && (    
                    <tbody>
                        {jobs.map((job)=>(
                        <tr key={job.id}>
                            <td className="text-left px-6 py-4 whitespace-nowrap">{job.id}</td>
                            <td className="text-left px-6 py-4 whitespace-nowrap">{job.company}</td>
                            <td className="text-left px-6 py-4 whitespace-nowrap">{job.position}</td>
                            <td className="text-left px-6 py-4 whitespace-nowrap"><a href={"https://"+job.url} target="_blank" rel="noreferrer noopener">{job.url}</a></td>
                            <td className="right-0 px-6 py-4 whitespace-nowrap"><BsFillPencilFill /></td>
                        </tr>
                    ))}
                    </tbody>
                )}
                </table>
            </div>
        </div>
    )
}

export default JobList;

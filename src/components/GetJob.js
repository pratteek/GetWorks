import React,{useState, useEffect} from 'react'
import JobService from '../services/JobService';

const GetJob = () => {
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
        <>
            {!loading && (
            <div className="w-full flex items-center justify-center flex-wrap">
                {jobs.map((job)=>(
                <div key={job.id} className="xl:w-1/4 sm:w-1/2 w-full 2xl:w-1/5 flex flex-col items-center py-16 md:py-12  rounded-lg border m-5">
                    <div className="w-full flex items-center justify-center ">
                        <div className="flex flex-col items-center ">
                            <img className="object-contain h-40" src={job.company+".png"} alt="profile" />
                        </div>
                    </div>
                    <div className="flex items-center mt-7">
                        <div className>
                            <p className="text-sm ">Position</p>
                            <p className="mt-2 text-base sm:text-lg md:text-lg 2xl:text-lg ">{job.position}</p>
                        </div>
                        <div className="ml-12">
                            <p className="text-sm ">Company</p>
                            <p className="mt-2 text-base sm:text-lg md:text-lg 2xl:text-lg ">{job.company}</p>
                        </div>
                        <div className="ml-12">
                            <p className="mt-2 text-base sm:text-lg md:text-lg 2xl:text-lg cursor-pointer text-indigo-700"><a href={"https://"+job.url} target="_blank" rel="noreferrer noopener">Apply</a></p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            )}
        </>
    );
}

export default GetJob

import axios from 'axios';

const JOB_API_BASE_URL = "http://localhost:8080/api/v1/job";

class JobService{
    saveJob(job){
        return axios.post(JOB_API_BASE_URL,job);
    }
    getJob(){
        return axios.get(JOB_API_BASE_URL);
    }
}

export default new JobService();
import axios from 'axios'

const BASE_URL = "https://jsonplaceholder.typicode.com/users"


export const fetchData=async()=>{
    try {
        const header={
            'Authorization':"bearer",
            'Content-type':'application/json'
        }
        const response= await axios.get(`${BASE_URL}`,{header})
        return response.data;
    } catch (error) {
        console.log("Error fetching the data ",error);
        throw error;
    }
}
import React,{useState,useEffect} from 'react';
import { fetchData } from './api';

const App=()=> {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  useEffect(()=>{
    const getData=async()=>{
      try {
        const result=await fetchData();
        setData(result)
      } catch (error) {
        setError(error);
      } finally{
        setLoading(false);
      }
    }
    getData();
  },[])
    if(loading) return <div>Loading ...</div>
    if(error) return <div> {error}</div>
  return (
      <div>
        <h1>List of Users</h1>
        <table className='table table-striped table-hover table-bordered'>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
          {
            data.map(index=>(
              <tr>
                <td>{index.id}</td>
                <td>{index.name}</td>
                <td>{index.username}</td>
                <td>{index.email}</td>
              </tr>
            ))
          }
        </table>
      </div>

  );
}

export default App;

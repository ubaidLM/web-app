import axios from 'axios'

const URL='http://localhost:8000'
export const addUser = async (user)=>{
    const res=await axios.post(`${URL}/user`,user);
    console.log(res)
}
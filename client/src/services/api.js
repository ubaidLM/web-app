import { auth } from '../config/firebaseConfig.js';
import {createUserWithEmailAndPassword} from 'firebase/auth'

// import axios from 'axios'
const URL='http://localhost:8000'
export const addUser = async (user)=>{
    createUserWithEmailAndPassword(auth, user.username, user.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    console.log(error)
    // ..
  });

    // const res=await axios.post(`${URL}/user`,user);
    // console.log(res)
}
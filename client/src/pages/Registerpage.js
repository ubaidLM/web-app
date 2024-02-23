import React , {useState} from 'react'
// import {toast} from 'react-toastify'
import { addUser } from '../services/api'

const Registerpage = () => {
     
   const [username , setusername] = useState('')
   const [password , setpassword ] = useState('')

    const handleSubmit = async (e) =>{
             e.preventDefault()
             try {
              const user = { username, password };
              await addUser(user);
              console.log({ username, password });
              alert('you are added')
              // toast.success('Register Successfully');
            } catch (error) {
              console.error('Error during registration:', error);
              // toast.error('Registration failed');
            }
    }

  return (
    <div>
<div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder='Enter UserName'
                    value={username}
                    onChange={(e)=>setusername(e.target.value)} 
                    required                   
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e)=>setpassword(e.target.value)}
                    required
                    
                  />
                </div>
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Registerpage

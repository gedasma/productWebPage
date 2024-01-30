import { useState } from "react";
import { registerUser } from "../../services/userService";
import { useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


const Register = ()=>{
    const [regData, setRegData] = useState({
        name:'',
        email:'',
        password:'',
        password_confirmation:''
    })

    const [errorMessages, setErrorMessages] = useState()
    const {setAuthToken, authToken} = useContext(AppContext);

    const handleChange = (event) =>{
        const { value } = event.target;
        setRegData({
            ...regData,
            [event.target.name]:value
        })
    }

    const submitHandler = (e)=>{
      e.preventDefault();
      registerUser(regData).then(data=>data.status?setAuthToken(data.data.access_token):setErrorMessages(data.errors))
    }

    const navigate = useNavigate();
    useEffect(()=>{
      if(authToken) navigate('/products/1')
    },[authToken])

    return (
        <div className="container">

    <div className="row">
        <div className="col-md-4 offset-md-4">
        <form onSubmit={submitHandler} className="card text-center card  bg-default mb-3">
          <div className="card-header">
            Register new user
          </div>
          <div className="card-body">
          <input onChange={handleChange} type="text" id="name" name="name" className="form-control input-sm chat-input" placeholder="User name" />
            <br />
            <input onChange={handleChange} type="text" id="email" name="email" className="form-control input-sm chat-input" placeholder="Email" />
            <br />
            <input onChange={handleChange} type="password" id="password" name="password" className="form-control input-sm chat-input" placeholder="Password" />
            <br />
            <input onChange={handleChange} type="password" id="password_confirmation" name="password_confirmation" className="form-control input-sm chat-input" placeholder="Confirm password" />
          </div>
          <div className="card-footer text-muted">
            <button type="submit" className="btn btn-secondary">Register</button>
            <br />
            <div className="mt-2">
            {errorMessages?
              Object.entries(errorMessages).map(([field, message]) =>(
                <p key={field} className="text-start text-danger">{message}</p>
              ))         
              :<></>}
            </div>
            <div><Link to="/login">Login here</Link></div>
          </div>
          
        </form>
        
    </div>
    </div>
</div>
    )
}


export default Register
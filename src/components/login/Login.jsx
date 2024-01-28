import { useState } from "react";
import { loginUser } from "../../services/userService";
import { useEffect } from "react";
// import { useGlobalContext } from "../../context/AppContext";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const Login = ()=>{
    const [credentials, setCredentials] = useState({
        email:'',
        password:''
    })

    const [errorMessage, setErrorMessage] = useState()
    const {setAuthToken, authToken} = useContext(AppContext);

    const handleChange = (event) =>{
        const { value } = event.target;
        setCredentials({
            ...credentials,
            [event.target.name]:value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        loginUser(credentials).then(data=>data?setAuthToken(data.data.access_token):setErrorMessage("Login data incorrect"))
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
            LOGIN
          </div>
          <div className="card-body">
            <input onChange={handleChange} type="text" id="email" name="email" className="form-control input-sm chat-input" placeholder="Email" />
            <br />
            <input onChange={handleChange} type="password" id="password" name="password" className="form-control input-sm chat-input" placeholder="Password" />
          </div>
          <div className="card-footer text-muted">
            <button type="submit" className="btn btn-secondary">LOGIN</button>
            <br />
            {errorMessage? <h5 className="text-left text-danger">{errorMessage}</h5>:<></>}
            <div><a href="">Register here</a></div>
          </div>
          
        </form>
        
    </div>
    </div>
</div>
    )
}


export default Login
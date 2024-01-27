import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const User = ()=>{
    const [userData, setUserData] = useState()
    const navigate = useNavigate();

    // useEffect(()=>{
    //     if(loading) return;
    //     if (!user) navigate("/");
    //     UserServices.getUserData(user,setUserData)
    // }, [user,loading,userData])

    return(
        <>
        {
        userData?
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tomas
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">My Products</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Log out</a></li>
                </ul>
            </li>
        :
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/login">Login</a>
            </li>
        }
        </>
    )
}

export default User
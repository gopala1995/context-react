import { useNavigate } from "react-router-dom"

export const Login = ()=>{

    const navigate = useNavigate()
    return <div>
        <input type="text" />
        <input type="text" name="" id="" />
        <button onClick={()=>{
            //imprative
            navigate("/")
        }}>login</button>
    </div>
}
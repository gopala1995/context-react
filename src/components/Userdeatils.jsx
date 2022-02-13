import { useParams } from "react-router-dom"

export const UserDetails = ()=>{
    const {id} = useParams()
    return <div>
        Deatils {id}
    </div>
}
import { Navigate } from "react-router-dom";

function UserHome({user}){
    if(user!=="user"){
        return <Navigate to="/"/>
    }
    return (
        <div>
            <h2>User Home (Private)</h2>
        </div>
    )
}

export default UserHome;
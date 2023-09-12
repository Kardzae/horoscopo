import { Navigate } from "react-router-dom";

function AdminHome({user}){
    if(user!=='admin'){
        return <Navigate to="/"/>
    }
    return (
        <div>
            <h2>Admin Home (Private, permission: 'Admin')</h2>
        </div>
    )
}

export default AdminHome;
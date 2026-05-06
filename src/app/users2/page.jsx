import UsersList from "@/Components/UsersList";
import { Suspense } from "react";

const getUsers=async()=>{
    const res= await fetch('http://localhost:8000/user')
   return res.json()
}

const Users2Page = async () => {
    const usersPromise=  getUsers()
    return (
        <div>
           <h2>Users2 with suspense </h2> 
           <Suspense fallback={<p>Loading....</p>}>
<UsersList usersPromise={usersPromise}/>
           </Suspense>
        </div>
    );
};

export default Users2Page;
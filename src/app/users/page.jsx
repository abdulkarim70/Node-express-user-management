import React from 'react';

const UsersPage = async () => {
    const res= await fetch('http://localhost:8000/user')
    const users= await res.json()
    console.log(users);
    return (
        <div>
           <h2>Users:{users.length} </h2> 
           <div className='grid grid-cols-3 gap-2'>
            {
                users.map(user=> <div key={user.id} className='border-2 p-4 rounded-xl'> 
                <h2>{user.name}</h2>
                <h2>{user.age}</h2>
                
                
                
                </div>)
            }
           </div>
        </div>
    );
};

export default UsersPage;
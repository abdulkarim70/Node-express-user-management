import { use } from "react";


const UsersList = ({usersPromise}) => {
    const users= use(usersPromise)
    return (
        <div>
            <h2>user inside user list{users.length}</h2>
        </div>
    );
};

export default UsersList;
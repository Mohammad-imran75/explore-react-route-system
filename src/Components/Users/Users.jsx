import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div className="mt-10">
            <h1 className="text-3xl font-bold text-center">Our users : {users.length} </h1>
            <div className="mt-10 md:grid grid-cols-3 gap-4">
            {
                users.map(user =><User user={user} key={user.id}></User> )
            }
            </div>
        </div>
    );
};

export default Users;
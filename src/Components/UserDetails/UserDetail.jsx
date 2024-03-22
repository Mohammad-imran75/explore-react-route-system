import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetail = () => {
    const client = useLoaderData();
    const {name,website} = client;
    const navigate = useNavigate();

    const handleGoBacks =()=>{
        navigate(-1);
    }
    return (
        <div className="bg-gray-200 text-center p-4 border-gray-500 space-y-3 mt-10">
            <h1>Show about user Details</h1>
            <h3 className="text-2xl font-bold">Name : {name}</h3>
            <p className="text-3xl font-medium">Website : {website}</p>
            <button className='bg-green-400 p-3 rounded-lg hover:bg-green-800 font-semibold' onClick={handleGoBacks}>GO Back</button>
        </div>
    );
};

export default UserDetail;
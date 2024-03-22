import { useLoaderData, useNavigate } from "react-router-dom";




const PostDetails = () => {
    const postDetails = useLoaderData();
    const {title,body} =postDetails;
    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1);
    }
    return (
        <div className="bg-gray-200 text-center p-4 border-gray-500 space-y-3 mt-10">
            <h1>EveryOne Show post Details</h1>
            <p className="text-2xl font-medium">{title}</p>
            <h1><small className="font-bold">{body}</small></h1>
            <button className='bg-green-400 p-3 rounded-lg hover:bg-green-800 font-semibold mt-4' onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;
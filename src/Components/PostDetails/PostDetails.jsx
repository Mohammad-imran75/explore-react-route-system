import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const postDetails = useLoaderData();
    const {title,body} =postDetails;
    return (
        <div className="bg-gray-200 text-center p-4 border-gray-500 space-y-3 mt-10">
            <h1>EveryOne Show post Details</h1>
            <p className="text-2xl font-medium">{title}</p>
            <h1><small className="font-bold">{body}</small></h1>
        </div>
    );
};

export default PostDetails;
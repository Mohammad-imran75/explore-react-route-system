import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className="mt-10 text-center">
            <h4 className="text-3xl font-bold">Show About posts :{posts.length}</h4>
            <div className="mt-10 md:grid grid-cols-3 gap-4">
                {
                    posts.map(post=><Post post={post} key={post.id}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;
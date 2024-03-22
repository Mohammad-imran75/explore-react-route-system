import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className="mt-10 text-center">
            <h4 className="text-3xl font-bold">Show About posts :{posts.length}</h4>
            <div>
                {
                    posts.map(post=><Post post={post} key={post.id}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;
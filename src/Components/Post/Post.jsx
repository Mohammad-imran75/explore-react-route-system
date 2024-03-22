
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Post = ({post}) => {
    const {id,title} =post;
    return (
        <div className='border-purple-400 border-2 bg-blue-200 p-5 text-center rounded-xl space-y-3'>
          <p className='text-2xl font-medium'>Post Id : {id}</p>
          <h1 className="text-3xl font-bold">{title}</h1>
          <Link to={`/post/${id}`}><button className='bg-green-400 p-3 rounded-lg hover:bg-green-800 font-semibold mt-4'>Post Details</button></Link>  
        </div>
    );
};
Post.propTypes ={
    post:PropTypes.object
}
export default Post;
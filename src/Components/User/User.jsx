import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id,name,username,phone,website} = user;
    return (
        <div className='border-purple-400 border-2 bg-blue-200 p-5 text-center rounded-xl'>
            <h1 className='text-2xl'>Id :{id}</h1>
            <h1 className='text-3xl font-bold'>Name :{name}</h1>
            <p className='text-2xl'>UserName: {username}</p>
            <h3 className='text-3xl'>Website : {website}</h3>
            <h3 className='text-2xl'>Mobile : {phone}</h3>
            <Link to={`/client/${id}`}> <button className='bg-green-400 p-3 rounded-lg hover:bg-green-800 font-semibold'>Click Me</button></Link>
        </div>
    );
};
User.propTypes ={
    user:PropTypes.object
}
export default User;
import {Link} from 'react-router-dom'
//import EarnsForm from './EarnsForm';

function Earn({earn, index}) {

    const handleDelete = () =>  {
        fetch('http://localhost:8000/earns/' + earn.id, {
            method: 'DELETE',
        })
            .then(res => res.json())       
    }

return (
    <tr className="earndelete" >
        <td>{index+1}</td>
        <td>{earn.date}</td>
        <td>{earn.suma}</td>
        <td>{earn.kategorija}</td>
        
        <button className='btn' onClick={handleDelete}>Delete</button>
    </tr>
);
}

export default Earn;
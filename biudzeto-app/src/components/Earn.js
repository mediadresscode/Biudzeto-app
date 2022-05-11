import {Link} from 'react-router-dom'


function Earn({earn, index}) {

    const handleDelete = () =>  {
        fetch('http://localhost:8000/earns/' + earn.id, {
            method: 'DELETE',
        })
            .then(res => res.json())       
    }

return (
    <tr className="sarasas" >
        <td>{index+1}</td>
        <td>{earn.date}</td>
        <td>{earn.suma}</td>
        <td>{earn.kategorija}</td>
        
        <button className='btn' onClick={handleDelete}><i class="fa-solid fa-trash-can"></i>Delete</button>
        <td><Link to={'/earns/edit/'+earn.id}><button className='btn'><i class="fa-solid fa-pencil"></i>Edit</button></Link></td>
    </tr>
);
}

export default Earn;
import Button from '../components/Button';
import './addUser.css'

  
interface UserType {
    handleAdd : ()=> void
    addToForm : (e: React.ChangeEvent<HTMLInputElement>) => void;
}



const AddUser = ({handleAdd,addToForm} : UserType) => {

    return (
        <div className="add-user-form-container"> 
            <form  style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            <input
                placeholder="Name"
                name = "name"
                onChange={(e)=>addToForm(e)}
                required
                className='input-box-add-user'
            />
            <input
                placeholder="Email"
                name="email"
                onChange={addToForm}
                required
                className='input-box-add-user'
            />
            <input
                placeholder="Company"
                name="company"
                onChange={addToForm}
                required
                className='input-box-add-user'
            />
            <div className='add-user-footer'>
                <Button title='Add User' typeButton='secondary' onclickFn={handleAdd}/>
            </div>
        </form></div>
    )
}

export default AddUser
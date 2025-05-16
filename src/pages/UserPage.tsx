import { useEffect, useState } from 'react'
import { fetchUsers } from '../services/apiService'
import './userspage.css'
import Button from '../components/Button';
import ModalContainer from '../Modals/ModalContainer';
import AddUser from './AddUser';

interface Company {
  name: string
}
interface User {
  id: number
  name: string
  email: string
  company: Company
};

interface UserFormType {
  name: string
  email: string
  company: string
}

const UserPage = () => {
  const [users, setUsers] = useState<User[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [search, setSearch] = useState('');
  const [sortAsc, setSortAsc] = useState(true);
  const [form, setForm] = useState<UserFormType>({ name: '', email: '', company: '' });


  useEffect(() => {
    fetchUsers().then((res) => setUsers(res))
  }, [])


  const openAddUserModal = () => {
    setOpenModal(true)
  }

  const closeAddUserModal = () => {
    setOpenModal(false)
  }

  const handleAdd = () => {
    const newUser: User = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      company: { name: form.company },
    };
    setUsers([newUser, ...users]);
    closeAddUserModal()
  }

  function addToForm(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value }: { name: string, value: string } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const filtered = users
    .filter(u => u.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sortAsc
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
    );


  return (
    <div className="users-page">
      <div className='users-panel'>
        <div style={{ display: 'flex', width: '80%', alignItems: 'center', gap: '10px' }}>
          <input
            placeholder="Search by name"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className='input-box-search'
          />
          <Button title={`Sort ${sortAsc ? 'A→Z' : 'Z→A'}`} typeButton='secondary' onclickFn={() => setSortAsc(a => !a)} />
        </div>
        <Button title='Add User' onclickFn={openAddUserModal} />
      </div>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {
          openModal &&
          <ModalContainer title='Add user' closeFn={closeAddUserModal}>
            <AddUser handleAdd={handleAdd} addToForm={addToForm} />
          </ModalContainer>
        }

      </div>
    </div>
  )
}

export default UserPage
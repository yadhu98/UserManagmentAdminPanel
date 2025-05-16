import { useState } from 'react';
import {useTheme} from '../context/useTheme'
import Button from '../components/Button';
import './settings.css'
const SettingsPage = () => {
  const { isdark, toggleDark } = useTheme();
  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className='settings-body'>
      <div className='settings-form'>
      <div>
          <label>Name</label>
          <input
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            style={{ width: '100%' }}
            className='settings-body-input'
          />
        </div>
        <div>
          <label>Email</label>
          <input
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            style={{ width: '100%' }}
            className='settings-body-input'

          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={isdark}
              onChange={toggleDark}
            />
            Dark Mode
          </label>
        </div>
      </div>
      <Button title='Save' typeButton='secondary' onclickFn={handleSubmit}/>
    </div>
  )
}

export default SettingsPage
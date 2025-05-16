import React, { useContext } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, 
    BarChart, 
    Bar, 
    ResponsiveContainer } from 'recharts';
import Card from '../components/Card'
import './dashboard.css'
import GraphCard from '../components/GraphCard';
import { ThemeContext } from '../context/ThemeContext';


const DashBoardPage = () => {
    const stats = {
        usersCount: 120,
        activeSessions: 45,
        pendingRequests: 8,
    };

      const registrationsData = [
        { month: 'Jan', registrations: 30 },
        { month: 'Feb', registrations: 45 },
        { month: 'Mar', registrations: 60 },
        { month: 'Apr', registrations: 40 },
        { month: 'May', registrations: 80 },
        { month: 'Jun', registrations: 70 },
      ];

      const roleData = [
        { role: 'Admin', count: 5 },
        { role: 'Editor', count: 12 },
        { role: 'Viewer', count: 25 },
      ];
      const themeContext = useContext(ThemeContext);
  const username = localStorage.getItem('username')
      

    return (
        <div className='dashboard-main'>
            <h2>Hi {username}</h2>
            <div className='dashboard-body'>
                <div className='dashboard-stats'>
                    <Card title="Users" value={stats.usersCount} />
                    <Card title="Active Sessions" value={stats.activeSessions} />
                    <Card title="Pending Requests" value={stats.pendingRequests} />
                </div>
                <div className='graph-section'>
                    <GraphCard title='User Registrations'>
                        <ResponsiveContainer width={400} height={300}>
                            <LineChart data={registrationsData}>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="registrations" stroke={themeContext?.isdark ? "#6c35de" : "#019b98"} />
                            </LineChart>
                        </ResponsiveContainer>
                    </GraphCard>
                    <GraphCard title="Active Users by Role">
                        <ResponsiveContainer width={400} height={300}>
                            <BarChart data={roleData}>
                                <XAxis dataKey="role" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="count" fill={themeContext?.isdark ? "#6c35de" :"#019b98"} />
                            </BarChart>
                        </ResponsiveContainer>
                    </GraphCard>
                </div>
            </div>
        </div>
    )
}

export default DashBoardPage
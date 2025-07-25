import { Routes, Route, NavLink } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Dashboard</h2>
      
      <nav style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#e0e0e0' }}>
        <NavLink to="/dashboard/profile" style={{ marginRight: '15px' }}>Profile</NavLink>
        <NavLink to="/dashboard/settings" style={{ marginRight: '15px' }}>Settings</NavLink>
        <NavLink to="/dashboard/analytics">Analytics</NavLink>
      </nav>
      
      <div style={{ border: '1px solid #ccc', padding: '20px' }}>
        <Routes>
          <Route path="profile" element={<>Profile page</>} />
          <Route path="settings" element={<>Settings page</>} />
          <Route path="analytics" element={<>Analytics page</>} />
          <Route path="" element={<>Welcome to Dashboard! Select an option above.</>} />
          <Route path="*" element={<>404</>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
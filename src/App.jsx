import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

// import Navigation from './components/Navigation'
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import UserProfile from './pages/UserProfile';
// import Search from './pages/Search';
// import Dashboard from './pages/Dashboard';

const Navigation = lazy(() => import('./components/Navigation'))
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const UserProfile = lazy(() => import('./pages/UserProfile'))
const Search = lazy(() => import('./pages/Search'))
const Dashboard = lazy(() => import('./pages/Dashboard'))

const ProtectedRoute = ({ children, isAuthenticated, redirectTo = "/login" }) => {
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

function App() {
	const isLoggedIn = true;

  return (<>
    <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user-profile/:id" element={<UserProfile/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/dashboard/*" element={<Dashboard/>} />
          <Route path="/admin" element={
            <ProtectedRoute isAuthenticated={isLoggedIn} redirectTo="/">
              <>Protected Content</>
            </ProtectedRoute>
          } />
        </Routes>
    </Router>
  </>);
}

export default App;
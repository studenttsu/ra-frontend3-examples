import { Route, Routes } from 'react-router';
import { useEffect } from 'react';
import { LoginPage, MastersPage, NotFoundPage } from './pages';
import { Navbar } from './components/Navbar';
import { PrivateRoute } from './components/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';
import ApiService from './api/api-service';
import './App.css';

function App() {

  useEffect(() => {
    async function fetch() {
      const customers = await ApiService.getCustomers();
      console.log(customers);
    }

    fetch();    
  }, []);

  return (
    <AuthProvider>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={
            <PrivateRoute><MastersPage /></PrivateRoute>
          } />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;

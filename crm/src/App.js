import { Route, Routes } from 'react-router';
import { LoginPage, MastersPage, NotFoundPage } from './pages';
import { AuthProvider } from './contexts/authContext';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<MastersPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './config/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Clientes from './pages/Clientes';
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

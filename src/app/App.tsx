import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/pages/HomePage';
import { ProdutosPage } from '@/app/pages/ProdutosPage';
import { SobrePage } from '@/app/pages/SobrePage';
import { NovidadesPage } from '@/app/pages/NovidadesPage';
import { ContactosPage } from '@/app/pages/ContactosPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/produtos" element={<ProdutosPage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/novidades" element={<NovidadesPage />} />
            <Route path="/contactos" element={<ContactosPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

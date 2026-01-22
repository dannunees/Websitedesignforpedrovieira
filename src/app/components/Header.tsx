import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Novidades', path: '/novidades' },
    { name: 'Contactos', path: '/contactos' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-black">PEDRO VIEIRA</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-sm font-medium text-gray-900 hover:text-[#1F4FD8] transition-colors"
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-6 left-0 right-0 h-0.5 bg-[#1F4FD8]"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contactos"
              className="px-6 py-2.5 bg-[#1F4FD8] text-white rounded-lg hover:bg-[#1845b8] transition-colors"
            >
              Contactar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm font-medium text-gray-900 hover:text-[#1F4FD8] hover:bg-gray-50 px-4 rounded-lg"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contactos"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-4 px-6 py-2.5 bg-[#1F4FD8] text-white rounded-lg text-center"
            >
              Contactar
            </Link>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

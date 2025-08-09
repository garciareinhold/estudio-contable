import { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../config/theme';
import MobileMenu from './MobileMenu';

const HeaderContainer = styled.header`
  background-color: ${theme.colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

interface NavLinkProps {
  $isActive: boolean;
}

const NavLink = styled(Link)<NavLinkProps>`
  color: ${({ $isActive }) => $isActive ? theme.colors.primary : theme.colors.text};
  font-weight: ${({ $isActive }) => $isActive ? '600' : '500'};
  transition: color ${theme.transitions.default};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  position: relative;
  padding: ${theme.spacing.sm} 0;

  &:hover {
    color: ${theme.colors.secondary};
  }

  ${({ $isActive }) => $isActive && `
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: ${theme.colors.primary};
      border-radius: 1px;
    }
  `}
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${theme.spacing.xs};
  z-index: 1002;
  color: ${theme.colors.primary};

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

interface IconWrapperProps {
  $isOpen: boolean;
}

const IconWrapper = styled.span<IconWrapperProps>`
  font-size: 28px;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(90deg)' : 'rotate(0)'};
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <img src={`${import.meta.env.BASE_URL}images/logo_estudio_contable.png`} alt="Estudio Contable" style={{ height: '80px', width: 'auto' }} />
        </Logo>
        <NavLinks>
          <NavLink to="/" $isActive={isActive('/')}>
            Inicio
          </NavLink>
          <NavLink to="/servicios" $isActive={isActive('/servicios')}>
            Servicios
          </NavLink>
          <NavLink to="/nosotros" $isActive={isActive('/nosotros')}>
            Nosotros
          </NavLink>
          <NavLink to="/clientes" $isActive={isActive('/clientes')}>
            Clientes
          </NavLink>
          <NavLink to="/contacto" $isActive={isActive('/contacto')}>
            Contacto
          </NavLink>
        </NavLinks>
        <HamburgerButton onClick={toggleMenu} aria-label="Toggle menu">
          <IconWrapper $isOpen={isMenuOpen}>
            <span className="material-icons">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </IconWrapper>
        </HamburgerButton>
      </Nav>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} currentPath={location.pathname} />
    </HeaderContainer>
  );
};

export default Header; 
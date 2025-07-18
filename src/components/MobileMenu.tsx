import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../config/theme';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const MenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  max-width: 300px;
  background-color: ${theme.colors.background};
  padding: ${theme.spacing.xl};
  z-index: 1001;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${theme.spacing.md};
  right: ${theme.spacing.md};
  font-size: 1.5rem;
  color: ${theme.colors.text};
  background: none;
  border: none;
  cursor: pointer;
  padding: ${theme.spacing.xs};
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: ${theme.spacing.xl};
`;

const MenuItem = styled(motion.li)`
  margin-bottom: ${theme.spacing.lg};
`;

const MenuLink = styled(Link)`
  color: ${theme.colors.text};
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} 0;
  transition: color ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.secondary};
  }

  .material-icons {
    font-size: 24px;
  }
`;

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuItems = [
    { path: '/', label: 'Inicio', icon: 'home' },
    { path: '/servicios', label: 'Servicios', icon: 'business_center' },
    { path: '/nosotros', label: 'Nosotros', icon: 'groups' },
    { path: '/clientes', label: 'Clientes', icon: 'people' },
    { path: '/contacto', label: 'Contacto', icon: 'contact_mail' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <MenuContainer
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <MenuList>
              {menuItems.map((item, index) => (
                <MenuItem
                  key={item.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MenuLink to={item.path} onClick={onClose}>
                    <span className="material-icons">{item.icon}</span>
                    {item.label}
                  </MenuLink>
                </MenuItem>
              ))}
            </MenuList>
          </MenuContainer>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 
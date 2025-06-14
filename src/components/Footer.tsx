import styled from 'styled-components';
import { theme } from '../config/theme';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.background};
  padding: ${theme.spacing.xl} 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: ${theme.spacing.sm};
`;

const FooterText = styled.p`
  color: ${theme.colors.lightGray};
`;

const FooterLink = styled.a`
  color: ${theme.colors.lightGray};
  transition: color ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Estudio Contable</FooterTitle>
          <FooterText>
            Brindamos servicios contables y asesoramiento fiscal de alta calidad
            para empresas y particulares.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contacto</FooterTitle>
          <FooterText>
            <strong>Dirección:</strong> Calle Principal 123, Ciudad
          </FooterText>
          <FooterText>
            <strong>Teléfono:</strong> (123) 456-7890
          </FooterText>
          <FooterText>
            <strong>Email:</strong> info@estudiocontable.com
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Horario</FooterTitle>
          <FooterText>Lunes a Viernes: 9:00 - 18:00</FooterText>
          <FooterText>Sábados: 9:00 - 13:00</FooterText>
          <FooterText>Domingos: Cerrado</FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Síguenos</FooterTitle>
          <FooterLink href="#" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </FooterLink>
          <FooterLink href="#" target="_blank" rel="noopener noreferrer">
            Facebook
          </FooterLink>
          <FooterLink href="#" target="_blank" rel="noopener noreferrer">
            Instagram
          </FooterLink>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 
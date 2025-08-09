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
    color: ${theme.colors.accent};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <img src={`${import.meta.env.BASE_URL}images/logo_estudio_contable.png`} alt="Estudio Contable" style={{ marginBottom: '1rem' }} />
          <FooterText>
            Brindamos servicios contables y asesoramiento fiscal de alta calidad
            para empresas y particulares.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contacto</FooterTitle>
          <FooterText>
            <strong>Dirección:</strong> Icalma 3150 - Tandil
          </FooterText>
          <FooterText>
            <strong>Teléfono:</strong> <FooterLink href="https://wa.me/5492494663899" target="_blank" rel="noopener noreferrer">+549(249)4663899</FooterLink>
          </FooterText>
          <FooterText>
            <strong>Email:</strong> <FooterLink href="mailto:santi.liset@hotmail.es">santi.liset@hotmail.es</FooterLink>
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Horario</FooterTitle>
          <FooterText>Lunes a Viernes: 7:00 - 17:00</FooterText>
          <FooterText>Sábados: Cerrado</FooterText>
          <FooterText>Domingos: Cerrado</FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Síguenos</FooterTitle>
          <FooterLink href="https://www.facebook.com/Estudio-Contable-y-Seguros-Generales-Liset" target="_blank" rel="noopener noreferrer">
            Facebook
          </FooterLink>
          <FooterLink href="https://www.instagram.com/santiagopabloliset/" target="_blank" rel="noopener noreferrer">
            Instagram
          </FooterLink>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 
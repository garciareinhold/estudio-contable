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
          <img src="/images/estudio_liset_blanco.png" alt="Estudio Contable" style={{ height: 'auto', width: '140px' }} />
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
            <strong>Teléfono:</strong> +549(249)4663899
          </FooterText>
          <FooterText>
            <strong>Email:</strong> santi.liset@hotmail.es
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Horario</FooterTitle>
          <FooterText>Lunes a Viernes: 8:00 - 18:00</FooterText>
          <FooterText>Sábados: 8:00 - 11:00</FooterText>
          <FooterText>Domingos: Cerrado</FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Síguenos</FooterTitle>
          <FooterLink href="https://www.linkedin.com/in/arturo-garcia-reinhold-1b1b1b1b1/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </FooterLink>
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
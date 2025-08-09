import styled from 'styled-components';
import { theme } from '../config/theme';
import ContactForm from '../components/ContactForm';

const ContactoWrapper = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xl} ${theme.spacing.md};
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${theme.spacing.xl};
  max-width: 1200px;
  width: 100%;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.xl};
  width: 100%;
`;

const Card = styled.div`
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(44, 62, 80, 0.10);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 220px;
`;

const CardTitle = styled.h2`
  color: ${theme.colors.primary};
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-family: ${theme.fonts.heading};
`;

const CardText = styled.p`
  color: ${theme.colors.text};
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const CardLink = styled.a`
  color: ${theme.colors.secondary};
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: underline;
  margin-right: 1.5rem;
  margin-bottom: 0.5rem;
  &:hover {
    color: ${theme.colors.accent};
  }
`;

const Logo = styled.img`
  height: 120px;
  width: auto;
  margin-bottom: 1.5rem;
`;

const Contacto = () => {
  return (
    <ContactoWrapper>
      <Logo src={`${import.meta.env.BASE_URL}images/logo_estudio_contable.png`} alt="Estudio Contable" />
      <ContentGrid>
        <CardGrid>
          <Card>
            <CardTitle>Sobre Nosotros</CardTitle>
            <CardText>Brindamos servicios contables, asesoramiento fiscal y en seguros de alta calidad para empresas y particulares.</CardText>
          </Card>
          <Card>
            <CardTitle>Contacto</CardTitle>
            <CardText><strong>Dirección:</strong> Icalma 3150 - Tandil</CardText>
            <CardText><strong>Teléfono:</strong> <CardLink href="tel:+5492494663899">+549(249)4663899</CardLink></CardText>
            <CardText><strong>Email:</strong> <CardLink href="mailto:santi.liset@hotmail.es">santi.liset@hotmail.es</CardLink></CardText>
          </Card>
          <Card>
            <CardTitle>Horario</CardTitle>
            <CardText>Lunes a Viernes: 8:00 - 18:00</CardText>
            <CardText>Sábados: 8:00 - 11:00</CardText>
            <CardText>Domingos: Cerrado</CardText>
          </Card>
          <Card>
            <CardTitle>Síguenos</CardTitle>
            <CardLink href="https://www.facebook.com/Estudio-Contable-y-Seguros-Generales-Liset" target="_blank" rel="noopener noreferrer">Facebook</CardLink>
            <CardLink href="https://www.instagram.com/santiagopabloliset/" target="_blank" rel="noopener noreferrer">Instagram</CardLink>
          </Card>
        </CardGrid>
        <ContactForm />
      </ContentGrid>
    </ContactoWrapper>
  );
};

export default Contacto; 
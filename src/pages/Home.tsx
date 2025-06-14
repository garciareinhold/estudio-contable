import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../config/theme';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.background};
  text-align: center;
  padding: ${theme.spacing.xl};
`;

const ContentSection = styled(motion.section)`
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: ${theme.colors.background};
  border-radius: 8px;
  padding: ${theme.spacing.xl};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: ${theme.spacing.xl};
`;

const ServiceTitle = styled.h2`
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.md};
`;

const ServiceDescription = styled.p`
  color: ${theme.colors.text};
  line-height: 1.8;
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <div>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Estudio Contable Profesional
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Soluciones contables y fiscales para tu negocio
          </HeroSubtitle>
        </div>
      </HeroSection>

      <ContentSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ServiceCard
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ServiceTitle>Contabilidad Empresarial</ServiceTitle>
          <ServiceDescription>
            Ofrecemos servicios completos de contabilidad para empresas de todos los tamaños,
            incluyendo gestión de libros contables, balances y estados financieros.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ServiceTitle>Asesoría Fiscal</ServiceTitle>
          <ServiceDescription>
            Asesoramiento fiscal integral, planificación tributaria y cumplimiento
            de obligaciones fiscales para optimizar la situación fiscal de tu empresa.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ServiceTitle>Auditoría</ServiceTitle>
          <ServiceDescription>
            Servicios de auditoría externa e interna para garantizar la transparencia
            y el cumplimiento de las normativas contables y fiscales.
          </ServiceDescription>
        </ServiceCard>
      </ContentSection>
    </>
  );
};

export default Home; 
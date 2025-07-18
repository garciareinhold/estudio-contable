import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../config/theme';
import { useRef } from 'react';

const Section = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const TitleSection = styled(Section)`
  background-color: ${theme.colors.primary};
`;

const VideoSection = styled(Section)`
  background-color: ${theme.colors.background};
`;

const VideoContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
  z-index: 0;
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 1;
  text-align: center;
  color: ${theme.colors.background};
  padding: 0 ${theme.spacing.xl};
  max-width: 800px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: ${theme.spacing.lg};
  font-weight: 700;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  line-height: 1.6;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`;

const ContentSection = styled(motion.section)`
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
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
  const videoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "start start"]
  });

  const videoOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const videoScale = useTransform(scrollYProgress, [0, 0.2], [1.1, 1]);

  return (
    <>
      <VideoSection ref={videoRef}>
        <VideoContainer
          style={{
            opacity: videoOpacity,
            scale: videoScale
          }}
        >
          <VideoBackground autoPlay muted loop playsInline>
            <source src="videos/home_video.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </VideoBackground>
          <Overlay />
        </VideoContainer>
      </VideoSection>

      <TitleSection>
        <Content>
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
        </Content>
      </TitleSection>

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

        <ServiceCard
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ServiceTitle>Seguros</ServiceTitle>
          <ServiceDescription>
            Ofrezco seguros para auto, moto, hogar, vida, comercio, responsabilidad civil profesional, PyMEs, consorcios y accidentes personales. Consultá para encontrar la mejor cobertura para vos o tu empresa.
          </ServiceDescription>
        </ServiceCard>

      </ContentSection>
    </>
  );
};

export default Home; 
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../config/theme';
import { motion, AnimatePresence } from 'framer-motion';

const testimonios = [
  {
    testimonio: 'Excelente profesional. Sumamente responsable, detallista y siempre está al tanto de las últimas normativas de ARCA, lo que es un alivio en medio de tanto caos. Siempre me dio un asesoramiento claro y preciso, en terminos que puedo entender. Muy buena disposición para responder consultas y resolver dudas de manera rápida. Lo recomiendo!',
    nombre: 'Arturo Garcia Reinhold',
    link: 'https://www.google.com/maps/place/LISET+-+Estudio+Contable+y+Seguros+Generales/@-37.3194206,-59.2985912,12z/data=!3m1!4b1!4m6!3m5!1s0x869026b165e0cc13:0xa0d5010f3648c9f6!8m2!3d-37.3195228!4d-59.1427021!16s%2Fg%2F11y1r1w3cq?entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D',
  },
  {
    testimonio: 'Santi es un excelente profesional, serio y responsable. Siempre está dispuesto a resolver todas mis dudas de manera amable y muy didáctica. Muy recomendable su trabajo, y él siempre atento.',
    nombre: 'Martina Knell',
    link: 'https://www.google.com/maps/place/LISET+-+Estudio+Contable+y+Seguros+Generales/@-37.3194206,-59.2985912,12z/data=!3m1!4b1!4m6!3m5!1s0x869026b165e0cc13:0xa0d5010f3648c9f6!8m2!3d-37.3195228!4d-59.1427021!16s%2Fg%2F11y1r1w3cq?entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D',
  },
  {
    testimonio: 'Santiago, muchas gracias por tu asesoramiento. Me aclaraste todas las dudas, me sugeriste el mejor seguro de acuerdo a mi necesidad a un costo único. No solo bajé mis costos sino que sigo con la misma cobertura que tenía. Genio total.',
    nombre: 'Javier Jose de Elizalde',
    link: 'https://www.google.com/maps/place/LISET+-+Estudio+Contable+y+Seguros+Generales/@-37.3194206,-59.2985912,12z/data=!3m1!4b1!4m6!3m5!1s0x869026b165e0cc13:0xa0d5010f3648c9f6!8m2!3d-37.3195228!4d-59.1427021!16s%2Fg%2F11y1r1w3cq?entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D',
  },
  {
    testimonio: 'Excelente profesional, a mi me resolvió mi trámite muy rápido,explica muy bien todo lo que le consultas sin dejarte duda alguna. Super recomendable gracias Santiago!!',
    nombre: 'Fabiana Andrea Prieto',
    link: 'https://www.google.com/maps/place/LISET+-+Estudio+Contable+y+Seguros+Generales/@-37.3194206,-59.2985912,12z/data=!3m1!4b1!4m6!3m5!1s0x869026b165e0cc13:0xa0d5010f3648c9f6!8m2!3d-37.3195228!4d-59.1427021!16s%2Fg%2F11y1r1w3cq?entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D',
  },
];

const TestimonioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  text-align: center;
  padding: ${theme.spacing.xl} ${theme.spacing.md};
`;

const TestimonioCard = styled(motion.div)`
  background: ${theme.colors.lightGray};
  color: ${theme.colors.text};
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(44, 62, 80, 0.10);
  padding: 3rem 2rem 2.5rem 2rem;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 340px;
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 2rem 0.5rem 2rem 0.5rem;
    min-height: 220px;
  }
`;

const Quote = styled.span`
  font-size: 4.5rem;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.text};
  opacity: 0.18;
  user-select: none;
  position: absolute;
  top: 18px;
  &.left {
    left: 24px;
    @media (max-width: ${theme.breakpoints.tablet}) {
      left: 8px;
    }
  }
  &.right {
    right: 24px;
    @media (max-width: ${theme.breakpoints.tablet}) {
      right: 8px;
    }
  }
`;

const TestimonioTexto = styled(motion.p)`
  font-size: 2.1rem;
  font-weight: 600;
  line-height: 1.3;
  margin: 0 2.5rem;
  z-index: 1;
  text-align: center;
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.2rem;
    margin: 0 1rem;
  }
`;

const NombrePersona = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${theme.colors.darkGray};
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  z-index: 1;
`;

const GoogleLink = styled.a`
  color: ${theme.colors.secondary};
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: underline;
  margin-top: 0.5rem;
  display: inline-block;
  transition: color 0.2s;
  z-index: 1;
  &:hover {
    color: ${theme.colors.primary};
  }
`;

const TestimoniosCarousel = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonios.length);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <TestimonioWrapper>
      <AnimatePresence mode="wait">
        <TestimonioCard
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          <Quote className="left">“</Quote>
          <TestimonioTexto>
            {testimonios[index].testimonio}
          </TestimonioTexto>
          <Quote className="right">”</Quote>
          <NombrePersona>{testimonios[index].nombre}</NombrePersona>
          <GoogleLink href={testimonios[index].link} target="_blank" rel="noopener noreferrer">
            Ver en Google
          </GoogleLink>
        </TestimonioCard>
      </AnimatePresence>
    </TestimonioWrapper>
  );
};

const Clientes = () => {
  return <TestimoniosCarousel />;
};

export default Clientes; 
import styled from 'styled-components';
import { theme } from '../config/theme';
import { motion } from 'framer-motion';

const secciones = [
  {
    titulo: 'Servicios Contables',
    items: [
      'Liquidación de impuestos mensuales y anuales',
      'IVA, Ganancias, Bienes Personales, Ingresos Brutos, etc.',
      'Monotributo',
      'Alta, recategorización, baja, control de deuda.',
      'Inscripción y seguimiento de AFIP, ARBA y ANSES',
      'Confección de balances y estados contables',
      'Asesoramiento fiscal y planificación impositiva',
      'Gestión de Libros Contables Digitales',
      'Certificaciones contables',
      'Atención de requerimientos e inspecciones',
    ],
  },
  {
    titulo: 'Asesoramiento Profesional',
    items: [
      'Consultas personalizadas para contribuyentes individuales, pymes y emprendedores',
      'Evaluación de situación fiscal actual',
      'Orientación sobre cumplimiento de obligaciones tributarias',
      'Planificación para optimización de cargas impositivas',
    ],
  },
  {
    titulo: 'Gestión Periódica',
    items: [
      'Recordatorios de vencimientos',
      'Agenda impositiva mensual',
      'Envío de reportes por WhatsApp o mail',
    ],
  },
  {
    titulo: 'Documentación y Trámites',
    items: [
      'Alta temprana y baja de empleados en AFIP',
      'Declaraciones juradas informativas',
      'Trámites ante organismos oficiales (AFIP, ARBA, etc.)',
    ],
  },
  {
    titulo: 'Capacitación y Novedades',
    items: [
      'Actualizaciones tributarias relevantes',
      'Tips para emprendedores y trabajadores independientes',
      'Información útil para tomar decisiones contables',
    ],
  },
  {
    titulo: 'Seguros que ofrezco',
    items: [
      'Seguro de Auto',
      'Seguro de Moto',
      'Seguro de Hogar',
      'Seguro de Vida',
      'Seguro de Comercio',
      'Seguro de Responsabilidad Civil Profesional',
      'Seguro Integral para PyMEs',
      'Seguro para consorcios',
      'Accidentes personales',
    ],
  },
];

const CTA = [
  '¿Querés regularizar tu situación impositiva? Contactanos.',
  'Consultá sin compromiso tu caso y te orientamos.',
];

const ServiciosWrapper = styled.div`
  min-height: 90vh;
  background: ${theme.colors.lightGray};
  padding: ${theme.spacing.xl} 0;
`;

const SeccionesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

const Card = styled(motion.div)`
  background: ${theme.colors.background};
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(44, 62, 80, 0.10);
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 320px;
`;

const Titulo = styled.h2`
  color: ${theme.colors.primary};
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-family: ${theme.fonts.heading};
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  color: ${theme.colors.text};
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  &::before {
    content: '•';
    color: ${theme.colors.secondary};
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
`;

const CTAWrapper = styled.div`
  margin: 3rem auto 0 auto;
  max-width: 700px;
  text-align: center;
`;

const CTAText = styled.p`
  color: ${theme.colors.accent};
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
`;

const Servicios = () => {
  return (
    <ServiciosWrapper>
      <SeccionesGrid>
        {secciones.map((sec, idx) => (
          <Card
            key={sec.titulo}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Titulo>{sec.titulo}</Titulo>
            <ItemList>
              {sec.items.map((item, i) => (
                <Item key={i}>{item}</Item>
              ))}
            </ItemList>
          </Card>
        ))}
      </SeccionesGrid>
      <CTAWrapper>
        {CTA.map((txt, i) => (
          <CTAText key={i}>{txt}</CTAText>
        ))}
      </CTAWrapper>
    </ServiciosWrapper>
  );
};

export default Servicios; 
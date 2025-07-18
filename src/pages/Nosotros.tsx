import styled from 'styled-components';
import { theme } from '../config/theme';
import { motion } from 'framer-motion';

const beneficios = [
  'Asesoramiento independiente y personalizado',
  'Comparación de precios y coberturas',
  'Acompañamiento en todo el proceso: desde la contratación hasta el siniestro',
  'Atención rápida y cercana',
];

const NosotrosWrapper = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xl} ${theme.spacing.md};
`;

const Card = styled(motion.div)`
  background: ${theme.colors.background};
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(44, 62, 80, 0.10);
  padding: 2.5rem 2rem 2rem 2rem;
  max-width: 600px;
  width: 100%;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Titulo = styled.h1`
  color: ${theme.colors.primary};
  font-size: 2rem;
  font-family: ${theme.fonts.heading};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const BeneficiosList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const Beneficio = styled.li`
  color: ${theme.colors.text};
  font-size: 1.15rem;
  margin-bottom: 1.1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  &::before {
    content: '🤝';
    font-size: 1.2rem;
    margin-right: 0.7rem;
  }
`;

const MatriculasCard = styled(motion.div)`
  background: ${theme.colors.primary};
  color: ${theme.colors.background};
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(44, 62, 80, 0.10);
  padding: 2rem 2rem 1.5rem 2rem;
  max-width: 600px;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const Matricula = styled.div`
  margin-bottom: 0.7rem;
`;

const Nosotros = () => {
  return (
    <NosotrosWrapper>
      <Card
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Titulo>¿Por qué contratarme como tu Productor?</Titulo>
        <BeneficiosList>
          {beneficios.map((b, i) => (
            <Beneficio key={i}>{b}</Beneficio>
          ))}
        </BeneficiosList>
      </Card>
      <MatriculasCard
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Matricula>Productor Asesor de Seguros Mat. N° 75208</Matricula>
        <Matricula>Contador Público Mat. N° 47497/5 Tº182 Fº222</Matricula>
      </MatriculasCard>
    </NosotrosWrapper>
  );
};

export default Nosotros; 